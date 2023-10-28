import './ClientsTab.scss';
import React from 'react'

export type ClientsTabProps = {}


const ClientsTab: React.FC<ClientsTabProps> = () => {


  return (
    <div className="clients-tab">
      <div className="clients-tab__filter">
        <h3> Поиск по контактным данным </h3>


      </div>
    </div>
  )
}

export default ClientsTab;