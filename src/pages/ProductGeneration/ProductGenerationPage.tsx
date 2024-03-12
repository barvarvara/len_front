import './ProductGenerationPage.scss';
import React, { useEffect } from 'react';
import TexturedMug from './components/TexturedMug';

export type ProductGenerationPageProps = {}

const ProductGenerationPage: React.FC<ProductGenerationPageProps> = () => {
  useEffect(() => {
    document.title = 'Генерация текстур для изделия';
  }, []);

  return (
    <>
      <h1 className="container-title">Генерация текстур для изделия</h1>

      <section className="masterclasses-container">
        <h2>Изображение на изделии: </h2>

        <div className="cards">
          <TexturedMug/>
        </div>

      </section>
    </>
  )
}

export default ProductGenerationPage;