import './ProductGeneration.scss'
import React, { useEffect } from 'react'
import { ContactShadows, Decal, Environment, Float, OrbitControls, Stars, useTexture } from '@react-three/drei';
import Mug from './components/Mug';

export type ProductGenerationProps = {}

const ProductGeneration: React.FC<ProductGenerationProps> = () => {
  useEffect(() => {
    document.title = 'Генерация текстур для изделия';
  }, []);

  return (
    <>
      {/*<h1 className="container-title">Мастер-классы и мероприятия</h1>*/}

      {/*<section className="masterclasses-container">*/}
      {/*<h2>Мастер-классы (свободная лепка)</h2>*/}

      {/*<div className="cards">*/}
      <OrbitControls/>
      <Mug/>


      <ContactShadows position-y={0.5} opacity={0.4} blur={1}/>
      <Environment preset="city" background blur={4}/>

      {/*</div>*/}
      {/*</section>*/}
    </>
  )
}

export default ProductGeneration;