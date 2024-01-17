import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import React, { ReactNode } from 'react';
import { useUserInfo } from '../../store/customHooks';

export type PageLayoutProps = {
  title: string;
  children: ReactNode;
}

const ProfilePageLayout: React.FC<PageLayoutProps> = ({
  title,
  children
}) => {
  const user = useUserInfo();

  return (
    <>
      <Header isMain={false}
              user={user}/>

      <main>
        <h1 className="container-title">{title}</h1>

        {children}
      </main>

      <Footer/>
    </>
  )
}

export default ProfilePageLayout;
