import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import FlowingMenu from "./FlowingMenu";

import CustomButton from "../components/CustomButton";
import SectionWrapper from "../hoc/SectionWrapper";
import SpaceshipCanvas from "../canvas/modern/spaceship/SpaceshipCanvas";
import HeroSection from "../components/HeroSection";
import HelipadCanvas from "../canvas/modern/helipad/HelipadCanvas";
import { slideAnimation } from "../config/motion";
import useStore from "../hooks/useStore";
import RotatingText from "../components/RotatingText";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const navigate = useNavigate();
  const containerRef = useRef();

  const [scrollProgress, setScrollProgress] = useState({
    pixels: 0,
    total: 1,
    percent: 0,
  });

  const ready = useStore((state) => state.ready);

  const demoItems = [
    {
      link: "explore/physics",
      text: "Physics",
      image: "/images/physics-corousel.jpg",
    },
    {
      link: "explore/chemistry",
      text: "chemistry",
      image: "/images/chemistry-corousel.jpg",
    },
    {
      link: "explore/biology",
      text: "Biology",
      image: "/images/biology-carousel.png",
    },
    {
      link: "explore/modern",
      text: "Modern",
      image: "/images/modern-carousel.png",
    },
    {
      link: "explore/cars",
      text: "Cars",
      image: "/images/car-carousel.png",
    },
  ];

  useGSAP(
    () => {
      if (!ready) return;
      const tl = gsap.timeline({ defaults: { ease: "power1.inOut" } });

      // Animate hero intro text
      tl.to(".subtext1, .subtext2", {
        scale: 4,
        opacity: 1,
        duration: 1,
        stagger: 0.5,
        delay: 1,
      }).to(".desc, .btn", {
        y: -10,
        opacity: 1,
        duration: 1,
        stagger: 0.5,
      });

      // ScrollTrigger for tracking scroll in pixels
      ScrollTrigger.create({
        trigger: ".hero-trigger",
        start: "top top",
        end: "bottom bottom",
        scrub: 2,
        onUpdate: (self) => {
          const scrolledPixels = self.scroll() - self.start;
          const totalPixels = self.end - self.start;
          const percent = scrolledPixels / totalPixels;

          setScrollProgress({
            pixels: scrolledPixels,
            total: totalPixels,
            percent: percent,
          });
        },
        // markers: true, // Uncomment for testing
      });
    },
    { scope: containerRef, dependencies: [ready] }
  );

  return (
    <div className="relative z-0">
      <div ref={containerRef} className="relative z-10">
        {/* Hero Section */}
        <div className="w-full px-2 my-8 hero-trigger bg-[#050816]">
          <motion.main className="max-w-7xl flex flex-col gap-14 mx-auto">
            <SectionWrapper>
              <motion.section
                {...slideAnimation("down")}
                className="text-center min-h-screen flex flex-col justify-center"
              >
                <h1 className="head-text text-purple-500">SciFilia</h1>

                <div className="flex flex-col justify-center items-center gap-14 mt-6">
                  <h3 className="h3-semibold subtext1 opacity-0">
                    WHERE SCIENCE
                  </h3>
                  <h3 className="h3-semibold subtext2 opacity-0">
                    MEETS FANTASY
                  </h3>
                </div>

                <p className="w-full max-w-2xl font-normal text-gray-500 mt-10 mb-4 desc opacity-0">
                  SciFilia provides interactive 3D science objects that enhance
                  learning by exploring complex phenomena in a dynamic and
                  engaging environment.
                </p>

                <div className="flex items-center justify-center btn opacity-0 z-[25]">
                  <p className="font-semibold mr-4">Turning Imagination Into</p>
                  <RotatingText
                    texts={["Science", "Interaction", "Virtuality"]}
                    className="px-4 py-2 rounded-full bg-purple-600 text-white text-lg font-semibold shadow-lg transition-all duration-500"
                  />
                </div>
              </motion.section>
            </SectionWrapper>

            {/* Spaceship 3D Canvas */}
            <SpaceshipCanvas scrollProgress={scrollProgress} />
          </motion.main>
        </div>

        {/* Second Section */}
        <HeroSection
          title="DIVE INTO A NEW DIMENSION OF SCIENCE"
          description="With SciFilia, learning isn’t just visual — it’s dimensional. Discover science the way it was meant to be understood."
          buttonTitle="Explore >"
          handleButtonClick={() => navigate("/get-started")}
          direction="left"
          CanvasComponent={undefined}
        />
      </div>
      <div style={{ height: "600px", position: "relative" }} className="z-10">
        <FlowingMenu items={demoItems} />
      </div>
    </div>
  );
};

export default Home;
