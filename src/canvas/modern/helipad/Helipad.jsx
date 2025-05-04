import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';

function Helipad(props) {
  const { nodes, materials, scene } = useGLTF('/3dassets/helipad.glb');
  const groupRef = useRef();

  useEffect(() => {
    if (!groupRef.current) return;

    // Traverse all children and force rendering order
    groupRef.current.traverse((child) => {
      if (child.isMesh) {
        child.renderOrder = 10;
        child.material.depthTest = false;
        child.material.transparent = true;
        child.material.opacity = 1;
      }
    });
  }, []);

  return (
    <group {...props} ref={groupRef} dispose={null}>
      <group scale={2}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials['Material.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials['Material.003']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_7.geometry}
        material={materials['Material.001']}
        position={[-0.348, 0.433, 0.339]}
      />
    </group>
  );
}

useGLTF.preload('/3dassets/helipad.glb');

export default Helipad;
