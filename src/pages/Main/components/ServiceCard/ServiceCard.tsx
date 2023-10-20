import React from 'react';
import './ServiceCard.scss'

export type ServiceCardProps = {
  title: string,
  description: string,
  imgSrc: string,
  imgAlt: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  imgSrc,
  imgAlt
}) => {
  return (
    <figure className="services__card">
      <img src={require(`${imgSrc}`)} alt={imgAlt}/>

      <figcaption>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <a href="/">Подробнее...</a>
      </figcaption>
    </figure>
  );
};

export default ServiceCard;