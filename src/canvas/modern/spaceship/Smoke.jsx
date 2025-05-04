import { useRef, useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { gsap } from "gsap";

const Smoke = ({ visible = false, position = [0, 0, 0] }) => {
  const groupRef = useRef();
  const smokeTexture = useLoader(THREE.TextureLoader, "./images/smoke.png");

  useEffect(() => {
    if (!groupRef.current) return;

    gsap.to(groupRef.current.children.map(mesh => mesh.material), {
      opacity: visible ? 0.3 : 0,
      duration: 1.5,
      ease: "power2.out",
    });
  }, [visible]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.children.forEach((mesh) => {
        mesh.rotation.z += 0.001;
      });
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* First smoke mesh */}
      <mesh
        position={[-2, -5, 0]}
        rotation={[-Math.PI / 2, 15, Math.PI]}
      >
        <planeGeometry args={[10, 10]} />
        <meshBasicMaterial
          map={smokeTexture}
          transparent
          opacity={0}
          depthWrite={false}
        />
      </mesh>

      {/* Second smoke mesh */}
      <mesh
        position={[8, -10, 0]}
        rotation={[-Math.PI / 2, 5, Math.PI]}
      >
        <planeGeometry args={[10, 10]} />
        <meshBasicMaterial
          map={smokeTexture}
          transparent
          opacity={0}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
};

export default Smoke;
