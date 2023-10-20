import React from 'react';
import "./HeroSection.scss"

export type HeroSectionProps = {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section className="hero container">
      <h1 className="hero__title">
        Гончарная Студия ЛЁН
      </h1>

      <p className="hero__description">
        В уютной и дружной атмосфере погружаемся в творчество и создаем новые миры своими руками
      </p>

    </section>
  );
};

export default HeroSection;