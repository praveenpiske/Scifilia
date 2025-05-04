import { Float } from "@react-three/drei";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Spaceship from "./Spaceship";
import { useStore } from "../../../hooks/useStore.js";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const SpaceshipScene = () => {
  const spaceshipRef = useRef();

  const isready = useStore((state) => state.isready);

  useGSAP(() => {
    if (!spaceshipRef.current) return;

    isready();

    const finalPosition = { x: 12, y: -4, z: 0 };

    gsap.set(spaceshipRef.current.position, { x: -12, y: 8, z: -5 });
    gsap.set(spaceshipRef.current.rotation, { x: 0, y: 0.3, z: -0.3 });
    gsap.set(spaceshipRef.current.scale, { x: 0.4, y: 0.4, z: 0.4 });

    const introTl = gsap.timeline({
      defaults: {
        ease: "power2.inOut",
        duration: 3,
      },
      scrollTrigger: {
        trigger: ".hero-trigger",
        start: "top top",
        end: "bottom top",
        scrub: true,
        markers: false,
      },
    });

    introTl
      .to(spaceshipRef.current.position, {
        x: finalPosition.x,
        y: finalPosition.y,
        z: finalPosition.z,
      })
      .to(
        spaceshipRef.current.rotation,
        {
          x: -0.4,
          y: -0.8,
          z: -0.2,
        },
        "<"
      );

    const flyAwayTl = gsap.timeline({
      defaults: {
        ease: "power2.in",
        duration: 2,
      },
      scrollTrigger: {
        trigger: ".hero-trigger",
        start: "bottom top",
        end: "bottom -100%",
        scrub: true,
        
      },
    });

    flyAwayTl
      .to(spaceshipRef.current.scale, {
        x: 1000,
        y: 1000,
        z: 1000,
      })
      .to(
        spaceshipRef.current,
        {
          opacity: 0,
        },
        "<"
      );
  }, []);

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.5}
      floatingRange={[-0.01, 0.01]}
    >
      <Spaceship
        ref={spaceshipRef}
        scale={0.4}
        rotation={[0, 0, -0.3]}
        position={[0, 0, 0]}
      />
    </Float>
  );
};

export default SpaceshipScene;