import './AdminPage.scss';
import React, { FC, useState } from 'react'
import Tabs, { Tab } from '../../components/Tabs/Tabs';
import ClientsTabPage from './components/ClientsTab';

export type AdminPageProps = {}

const AdminPage: React.FC<AdminPageProps> = () => {
  const tabPages: Record<string, FC> = {
    '0': ClientsTabPage,
    '1': ClientsTabPage,
    '2': ClientsTabPage,
    '3': ClientsTabPage
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


  return (
    <>
      <div className="admin-panel container">
        <Tabs selectedId={selectedId} tabs={tabs} onClick={handleTabCkick}/>

        <div className="admin-panel_tab-pages">

        </div>
      </div>
    </>
  )
}

export default AdminPage;