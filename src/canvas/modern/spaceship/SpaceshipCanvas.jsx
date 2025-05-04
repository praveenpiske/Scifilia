import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Environment, Loader, Preload } from "@react-three/drei";

import CanvasLoader from "../../CanvasLoader";
import SpaceshipScene from "./SpaceshipScene";

import {Perf} from 'r3f-perf'

const SpaceshipCanvas = ({ scrollProgress = 0 }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-0 pointer-events-none">
      <Canvas
        camera={{
          fov: 45,
          near: 0.5,
          far: 250,
          position: [-11, 9, 15],
        }}
      >
        <ambientLight intensity={0.5} />
        <Environment preset="sunset" />

        <Suspense fallback={<CanvasLoader />}>
          <SpaceshipScene scrollProgress={scrollProgress} />
          <Preload all />
        </Suspense>
        {/* <Perf position="bottom-left"/> */}
        
      </Canvas>
    </div>
  );
};

export default SpaceshipCanvas;
