import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Preload } from "@react-three/drei";
import { Suspense } from "react";
import CanvasLoader from "../../CanvasLoader";

import Bmw from "./Bmw_i8";
const BmwCanvas = () => {
  return (
    <Canvas
      className="cursor-grab active:cursor-grabbing ml-auto text-right"
      camera={{
        fov: 26,
      }}
    >
      <ambientLight />
      <Environment preset="sunset" />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls />
        <Bmw />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default BmwCanvas;
