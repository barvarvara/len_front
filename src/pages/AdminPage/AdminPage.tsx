import './AdminPage.scss';
import React, { FC, useState } from 'react'
import Tabs from '../../components/Tabs';
import ClientsTab from './components/ClientsTab';
import ProductsTab from './components/ProductsTab';
import CertificatesTab from './components/CertificatesTab';
import ClassesTab from './components/ClassesTab';
import { Client, Tab } from '../../types/types';
import { useGetClientsQuery } from '../../logic/user/user.api';

export type AdminPageProps = {}


const AdminPage: React.FC<AdminPageProps> = () => {
  const tabPages: Record<string, FC<any>> = {
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

  const TabPage = tabPages[selectedId]

  const { data } = useGetClientsQuery()
  console.log(data)

  return (
    <div className="admin-panel container">
      <Tabs selectedId={selectedId} tabs={tabs} onClick={handleTabClick}/>

      <div className="admin-panel__tab-pages">
        <TabPage clients={data}/>
      </div>
    </div>
  )
}

export default AdminPage;