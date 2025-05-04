import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  Preload,
} from "@react-three/drei";
import { Suspense } from "react";
import CanvasLoader from "../../CanvasLoader";
import Helipad from "./Helipad";
import { Float } from "@react-three/drei";
const HelipadCanvas = () => {

  return (
    <Canvas className="cursor-grab active:cursor-grabbing ml-auto text-right" camera={{
        fov: 5,
        near: 0.5,
        far: 250,
        position: [-11, 9, 15],
      }}>
        <ambientLight intensity={0} />
        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[-5, 16, 8]} shadow-mapSize={1024} />
        <Environment preset="sunset" />
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          
          <Helipad scale={0.5} rotation={[0,1,0]}  position={[0, -0.8, 0]}/>
          
          <Preload all/>
        </Suspense>
      </Canvas>
  );
};

export default HelipadCanvas;
