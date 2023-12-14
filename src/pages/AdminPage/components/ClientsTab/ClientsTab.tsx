import './ClientsTab.scss';
import React, { useState } from 'react'
import TextInput from '../../../../components/ui/TextInput';
import Button from '../../../../components/ui/Button';
import { Client, ClientType } from '../../../../types/types';
import ClientCard from '../ClientCard';

export type ClientsTabProps = {
  clients: Client[]
}


const ClientsTab: React.FC<ClientsTabProps> = (
  {
    clients
  }
) => {

  return (
    <div className="clients-tab">

      <div className="clients-tab__filter">
        <h3> Поиск по контактным данным </h3>

        <div className="clients-tab__filter__inputs">
          <TextInput placeholder={'Фамилия'}/>
          <TextInput placeholder={'Имя'}/>
          <TextInput placeholder={'Номер телефона'}/>
        </div>

        <div className="clients-tab__filter__btns">
          <Button addStyleClass={'btn-search'} onPress={() => {}} type={'submit'} title={'Поиск'}/>
          <Button onPress={() => {}} type={'button'} title={'Выгрузить в excel'}/>
        </div>

      </div>

      <Button addStyleClass={'btn-add-client'} onPress={() => {}} title={'Добавить'}/>

      <div className="clients-tab__clients">
        {clients &&
          clients.map((client) => (
            <ClientCard client={client}
                        key={client.id}
            />
          ))}
      </div>

    </div>
  )
}

export default ClientsTab;