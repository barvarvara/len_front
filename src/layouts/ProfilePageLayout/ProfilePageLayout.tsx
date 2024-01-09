import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import React, { ReactNode } from 'react';
import { User } from '../../types/types';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export type PageLayoutProps = {
  title: string;
  children: ReactNode;
}

const ProfilePageLayout: React.FC<PageLayoutProps> = ({
  title,
  children
}) => {
  const auth = useSelector((state: RootState) => state.auth);
  const user = auth.user
  console.log(auth.user)

  return (
    <>
      <Header isMain={false}
              user={user} />

      <main>
        <h1 className="container-title">{title}</h1>

        {children}
      </main>

      <Footer/>
    </>
  )
}

export default ProfilePageLayout;
