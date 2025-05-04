"use client";

import { motion, AnimatePresence, useCycle } from "framer-motion";
import { useEffect, useRef, useState, memo } from "react";

const RotatingText = ({
  texts = [],
  interval = 2000,
  auto = true,
  className = "",
  splitBy = "words", // words, characters, or lines
}) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [index, cycleIndex] = useCycle(...texts.map((_, i) => i));

  const splitText = (text) => {
    if (splitBy === "characters") return text.split("");
    if (splitBy === "lines") return text.split("\n");
    return text.split(" ");
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    const node = containerRef.current;
    if (node) observer.observe(node);
    return () => node && observer.unobserve(node);
  }, []);

  useEffect(() => {
    if (!auto || !isVisible) return;
    const id = setInterval(() => {
      cycleIndex();
    }, interval);
    return () => clearInterval(id);
  }, [auto, isVisible, interval, cycleIndex]);

  return (
    <div
      ref={containerRef}
      className={`relative inline-flex overflow-hidden ${className}`}
      aria-live="polite"
    >
      <span className="sr-only">{texts[index]}</span>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="flex gap-1"
          aria-hidden="true"
        >
          {splitText(texts[index]).map((word, i) => (
            <span key={i} className="inline-block">
              {word}
              {i !== texts[index].length - 1 && " "}
            </span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default memo(RotatingText);
