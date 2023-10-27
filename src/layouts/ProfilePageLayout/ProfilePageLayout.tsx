import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import React, { ReactNode } from 'react';

export type PageLayoutProps = {
  title: string;
  children: ReactNode;
}

const ProfilePageLayout: React.FC<PageLayoutProps> = ({
  title,
  children
}) => {
  return (
    <>
      <Header isMain={false}/>

      <main>
        <h1 className="container-title">{ title }</h1>

        {children}
      </main>

      <Footer/>
    </>
  )
}

export default ProfilePageLayout;
