/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 ./public/3dassets/telescope.glb 
Author: Francesco Coldesina (https://sketchfab.com/topfrank2013)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/telescope-7220b6283360440fbbf8ccff08e25a7f
Title: Telescope
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Telescope (props) {
  const { nodes, materials } = useGLTF('/3dassets/telescope.glb')
  return (
    <group {...props} dispose={null} scale={0.025} position={[0.2,-0.2,0]} rotation={[0,2,0]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_3.geometry} material={materials.material_0} position={[-44.717, -69.657, -119.913]} />
      </group>
    </group>
  )
}

useGLTF.preload('/3dassets/telescope.glb')
