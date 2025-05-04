import { Canvas } from "@react-three/fiber";
import Spaceship from "./Spaceship";
import {
  Environment,
  OrbitControls,
  Preload,  
} from "@react-three/drei";
import { Suspense } from "react";
import CanvasLoader from "../../CanvasLoader";

const SpaceshipCanvas2 = () => {

  return (
    <Canvas className="cursor-grab active:cursor-grabbing ml-auto text-right" camera={{
      fov: 5,
      near: 0.5,
      far: 250,
      position: [-11, 9, 15],
    }}>
      <ambientLight />
      <Environment preset="sunset" />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls />
        <Spaceship />
        <Preload all/>
      </Suspense>
    </Canvas>
  );
};

export default SpaceshipCanvas2;
