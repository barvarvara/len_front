import React from 'react';
import Modal from 'react-modal';

import './ClientModal.scss'
import { Client, Contact } from '../../../../types/types';
import ClientCard from '../ClientCard';

Modal.setAppElement('#root');

const MODAL_CUSTOM_STYLE = {
  'content': {
    display: 'flex',
    position: 'absolute',
    left: '30vw',
    top: '20vh'
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  },
}

export type ClientCardProps = {
  client: Client,
  contacts?: Contact[],
  visible: boolean;
  onClose: () => void;
}

const ClientModal: React.FC<ClientCardProps> = ({
  client,
  contacts,
  visible,
  onClose
}) => {
  return (
    <Modal
      isOpen={visible}
      onRequestClose={onClose}
      contentLabel="Get Client"
      className={'client-modal'}
      style={MODAL_CUSTOM_STYLE as any}
    >
      <div className="client-modal__items">
        <h4>{client.name}</h4>
        <h5>{client.fcs}</h5>

        <p>статус: {client.client_status.name}</p>
        <p>тип: {client.client_type.name}</p>

        <h5>Контакты клиента: </h5>
        {contacts &&
          contacts.map((contact) => (
            <div className="client-modal__items__contact"
                 key={contact.id}>
              <p>{contact.fcs}</p>
              <p>{contact.phone}</p>
            </div>
          ))
        }
      </div>

    </Modal>
  );
};

export default ClientModal;