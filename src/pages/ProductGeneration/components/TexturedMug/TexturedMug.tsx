import './TexturedMug.scss'
import React from 'react'
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei';
import Mug from '../Mug';
import { Canvas } from '@react-three/fiber';

export type TexturedMugProps = {}

const TexturedMug: React.FC<TexturedMugProps> = () => {
  return (
    <Canvas shadows camera={{ position: [3, 3, 3], fov: 50 }} style={{ 'height': '100vh' }}>

      <OrbitControls/>
      <Mug/>

      <ContactShadows position-y={0.5} opacity={0.4} blur={1}/>
      <Environment preset="city" background blur={4}/>
    </Canvas>

  )
}

export default TexturedMug;