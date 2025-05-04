import React, { forwardRef } from 'react';
import { useGLTF } from '@react-three/drei';

const Spaceship = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('/3dassets/orange_spaceship.glb');

  return (
    <group ref={ref} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.Material}
          position={[-17.254, -15.969, -2.313]}
        />
      </group>
    </group>
  );
});

useGLTF.preload('/3dassets/orange_spaceship.glb');

export default Spaceship;
