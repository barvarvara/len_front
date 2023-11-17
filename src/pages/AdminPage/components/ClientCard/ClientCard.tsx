import React from 'react';
import './ClientCard.scss'
import { Client } from '../../../../types/types';

export type ClientCardProps = {
  client: Client,
}

const ClientCard: React.FC<ClientCardProps> = ({
  client
}) => {
  return (
    <div className="client-card">
      <h4>{client.name}</h4>
      <p>{client.fcs}</p>

      <div className="client-card__secondary">
        <p>{client.client_status.name}</p>
        <p>{client.client_type.name}</p>
      </div>

    </div>
  );
};

export default ClientCard;