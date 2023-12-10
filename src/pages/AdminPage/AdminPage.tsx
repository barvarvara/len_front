import './AdminPage.scss';
import React, { FC, useEffect, useState } from 'react'
import Tabs from '../../components/Tabs';
import ClientsTab from './components/ClientsTab';
import ProductsTab from './components/ProductsTab';
import CertificatesTab from './components/CertificatesTab';
import ClassesTab from './components/ClassesTab';
import { Client, Tab } from '../../types/types';
import axios from 'axios';
import { CONFIG } from '../../config';

export type AdminPageProps = {}

type GetClientsResponse = {
  data: Client[]
}


const AdminPage: React.FC<AdminPageProps> = () => {
  const tabPages: Record<string, FC> = {
    '0': ClientsTab,
    '1': ClassesTab,
    '2': ProductsTab,
    '3': CertificatesTab
  }

  const tabs: Tab[] = [
    { id: '0', label: 'Клиенты' },
    { id: '1', label: 'Занятия' },
    { id: '2', label: 'Изделия' },
    { id: '3', label: 'Сертификаты' }
  ]

  const [selectedId, setSelectedId] = useState(tabs[0].id);

  const handleTabClick = (id: string | number) => {
    setSelectedId(id);
  }


  const [clients, setClients] = useState([]);


  const TabPage = tabPages[selectedId]

  return (
    <div className="admin-panel container">
      <Tabs selectedId={selectedId} tabs={tabs} onClick={handleTabClick}/>

      <div className="admin-panel__tab-pages">
        <TabPage/>
      </div>
    </div>
  )
}

export default AdminPage;