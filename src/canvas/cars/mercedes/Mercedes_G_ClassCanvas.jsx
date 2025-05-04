import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Preload } from "@react-three/drei";
import { Suspense } from "react";
import CanvasLoader from "../../CanvasLoader";

import Mercedes_G_Class from "./Mercedes_G_class";
const Mercedes_G_ClassCanvas = () => {
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
        <Mercedes_G_Class />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default Mercedes_G_ClassCanvas;
