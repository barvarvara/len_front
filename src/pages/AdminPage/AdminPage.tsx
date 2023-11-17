import './AdminPage.scss';
import React, { FC, useState } from 'react'
import Tabs from '../../components/Tabs';
import ClientsTab from './components/ClientsTab';
import ProductsTab from './components/ProductsTab';
import CertificatesTab from './components/CertificatesTab';
import ClassesTab from './components/ClassesTab';
import { Tab } from '../../types/types';

export type AdminPageProps = {}

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

  const handleTabCkick = (id: string | number) => {
    setSelectedId(id);
  }

  const TabPage = tabPages[selectedId]

  return (
    <div className="admin-panel container">
      <Tabs selectedId={selectedId} tabs={tabs} onClick={handleTabCkick}/>

      <div className="admin-panel__tab-pages">
        <TabPage/>
      </div>
    </div>
  )
}

export default AdminPage;