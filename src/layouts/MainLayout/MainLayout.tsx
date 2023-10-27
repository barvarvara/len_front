import Header from "../../components/ui/Header";
import Footer from "../../components/ui/Footer";
import React, { ReactNode } from 'react';

export type MainLayoutProps = {
  children?: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({children}) => {
  return (
    <>
      <Header isMain={true}/>

      <main> {children} </main>

      <Footer/>
    </>
  )
}

export default MainLayout;