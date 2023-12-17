import React from 'react';
import Modal from 'react-modal';

import './CreateClientModal.scss'
import { Client, Contact } from '../../../../types/types';
import TextInput from '../../../../components/ui/TextInput';
import Button from '../../../../components/ui/Button';

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

export type CreateClientCardProps = {
  client: Client;
  visible: boolean;
  onClose: () => void;
}

const CreateClientModal: React.FC<CreateClientCardProps> = ({
  client,
  visible,
  onClose
}) => {
  return (
    <Modal
      isOpen={visible}
      onRequestClose={onClose}
      contentLabel="Add Client"
      className={'client-modal'}
      style={MODAL_CUSTOM_STYLE as any}
    >
      <div className="client-modal__items">
        <form>
          <TextInput placeholder="Имя пользователя"
                     addStyle="form-text-input"
                     onChangeText={(srt) => {}}/>

          <TextInput placeholder="Полное имя (ФИО)"
                     addStyle="form-text-input"
                     onChangeText={(srt) => {}}/>

          <TextInput placeholder="Тип" onChangeText={(srt) => {}}/>
          <TextInput placeholder="Статус" onChangeText={(srt) => {}}/>

          <Button type="submit" addStyleClass="btn__login" onPress={() => {}} title={"Сохранить"}/>
        </form>
      </div>

    </Modal>
  );
};

export default CreateClientModal;