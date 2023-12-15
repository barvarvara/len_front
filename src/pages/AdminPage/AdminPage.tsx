import './AdminPage.scss';
import React, { FC, useState } from 'react'
import Tabs from '../../components/Tabs';
import ClientsTab from './components/ClientsTab';
import ProductsTab from './components/ProductsTab';
import CertificatesTab from './components/CertificatesTab';
import ClassesTab from './components/ClassesTab';
import { Client, ClientStatus, ClientType, Contact, Tab } from '../../types/types';
import { useGetClientsQuery, useLazyGetClientContactsQuery } from '../../logic/user/user.api';
import ClientModal from './components/ClientModal';

export type AdminPageProps = {}

const CONTACTS_INIT: Contact[] = [{ id: 0, fcs: '', phone: '', birthday: '', ban_on_spam: false }];

const CLIENT_INIT: Client = {
  id: 0,
  name: '',
  fcs: '',
  client_type: { id: 0, name: '', definition: '' },
  client_status: { id: 0, name: '', definition: '' }
}

const AdminPage: React.FC<AdminPageProps> = () => {
  const { data } = useGetClientsQuery()
  console.log(data)

  const [clientModalVisible, setClientModalVisible] = useState(false);

  const [client, setClient] = useState(CLIENT_INIT)
  const [fetchContacts, {data : contactsData} ] = useLazyGetClientContactsQuery()

  const onPressClient = (client: Client) => {
    setClient(client)
    fetchContacts(client.id)
    setClientModalVisible(true)
  }

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

  return (
    <>
      <div className="admin-panel container">
        <Tabs selectedId={selectedId} tabs={tabs} onClick={handleTabClick}/>

        <div className="admin-panel__tab-pages">
          <TabPage data={data}
                   onPressClient={onPressClient}/>
        </div>
      </div>

      <ClientModal client={client}
                   contacts={contactsData}
                   visible={clientModalVisible}
                   onClose={() => {setClientModalVisible(false)}}/>
    </>
  )
}

export default AdminPage;