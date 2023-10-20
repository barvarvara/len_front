import React from 'react';
import ServiceCard from "../ServiceCard/ServiceCard";
import "./ServicesSection.scss"

export type ServicesSectionProps = {}

const ServicesSection: React.FC<ServicesSectionProps> = () => {
  return (
    <section className="services container">
      <ServiceCard title="Мастер-классы"
                   description="Лепим, получаем радость от творчества и создаем предметы домашнего обихода с душой"
                   imgSrc="./assets/girl-potter.jpg"
                   imgAlt="Мастер-классы в гончарной студии Лён"
      />

      <ServiceCard title="Сертификаты"
                   description="Потратить можно на что угодно - гончарный круг, ручная лепка или на всю сумму набрать нашей керамики с полок"
                   imgSrc="./assets/cert.jpg"
                   imgAlt="Сертификаты гончарная студия ЛЁН"
      />

      <ServiceCard title="Магазин керамики"
                   description="Изделия, сделанные с душой, нашими мастерами"
                   imgSrc="./assets/goshi.jpg"
                   imgAlt="Изделия гончарная студия ЛЁН"
      />
    </section>
  );
};

export default ServicesSection;