import React from 'react';
import Link from '../../../../components/ui/Link/Link';
import './MasterClassCard.scss'
import { useNavigate } from 'react-router-dom';

export type MasterClassCardProps = {
  title: string,
  description: string,
  imgSrc: string,
  imgAlt: string
}

const MasterClassCard: React.FC<MasterClassCardProps> = ({
  title,
  description,
  imgSrc,
  imgAlt
}) => {
  const navigate = useNavigate();

  return (
    <figure className="card">
      <img src={require(`${imgSrc}`)} alt={imgAlt}/>

      <figcaption>
        <h4>{title}</h4>
        <p>{description}</p>

        <div>
          <Link title="Записаться" addStyle="link" onPress={() => {navigate("/")}}></Link>
        </div>
      </figcaption>

    </figure>
  );
};

export default MasterClassCard;