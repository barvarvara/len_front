import './ClientsTab.scss';
import React from 'react'
import TextInput from '../../../../components/ui/TextInput';
import Button from '../../../../components/ui/Button';
import { Client } from '../../../../types/types';
import ClientCard from '../ClientCard';

export type ClientsTabProps = {
  data: Client[],
  onPressClient: (client: Client) => void,
  onPressCreateClient: () => void,
}

const ClientsTab: React.FC<ClientsTabProps> = (
  {
    data,
    onPressClient,
    onPressCreateClient
  }
) => {

  const onPressClientInner = (client: Client) => {
    onPressClient(client)
  }

  return (
    <div className="clients-tab">

      <div className="clients-tab__filter">
        <h3> Поиск по контактным данным </h3>

        <div className="clients-tab__filter__inputs">
          <TextInput placeholder={'Фамилия'} onChangeText={(srt) => {}}/>
          <TextInput placeholder={'Имя'} onChangeText={(srt) => {}}/>
          <TextInput placeholder={'Номер телефона'} onChangeText={(srt) => {}}/>
        </div>

        <div className="clients-tab__filter__btns">
          <Button addStyleClass={'btn-search'} onPress={() => {}} type={'submit'} title={'Поиск'}/>
          <Button onPress={() => {}} type={'button'} title={'Выгрузить в excel'}/>
        </div>

      </div>

      <Button addStyleClass={'btn-add-client'} onPress={() => {onPressCreateClient()}} title={'Добавить'}/>

      <div className="clients-tab__clients">
        {data &&
          data.map((client) => (
            <ClientCard client={client}
                        key={client.id}
                        onPressClient={(client) => onPressClientInner(client)}
            />
          ))}
      </div>

    </div>
  )
}

export default ClientsTab;