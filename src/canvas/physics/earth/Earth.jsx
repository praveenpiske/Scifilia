/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 ./public/3dassets/earth.glb 
Author: PatelDev (https://sketchfab.com/PatelDev)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/earth-f7a76c63ff1846afb2d606e5c8369c15
Title: Earth
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Earth (props) {
  const { nodes, materials } = useGLTF('/3dassets/earth.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials['Scene_-_Root']} scale={2.828} />
    </group>
  )
}

useGLTF.preload('/3dassets/earth.glb')
