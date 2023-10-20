import './AdminPage.scss';
import React from "react"
import SecondMenuItem from "../../components/SideBarItem";

export type AdminPageProps = {}

const AdminPage: React.FC<AdminPageProps> = () => {
  return (
    <>
      <div className="admin-panel container">
        <SecondMenuItem>Клиенты</SecondMenuItem>
        <SecondMenuItem>Занятия</SecondMenuItem>
        <SecondMenuItem>Изделия</SecondMenuItem>
      </div>
    </>
  )
}

export default AdminPage;