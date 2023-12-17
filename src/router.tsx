import { Outlet, Navigate, useRoutes } from 'react-router-dom';
import MainPage from './pages/Main';
import LoginPage from './pages/Login';
import MasterClasses from './pages/MasterClasses';
import AdminPage from './pages/AdminPage';
import { Page404 } from './pages/Page404';
import MainLayout from './layouts/MainLayout';
import ProfilePageLayout from './layouts/ProfilePageLayout';
import { RootState } from './store';
import { useSelector } from 'react-redux';

type ProtectedRouteProps = {
  children: any;
};

const ProtectedRoute = ({
  children,
}: ProtectedRouteProps) => {
  const auth = useSelector((state: RootState) => state.auth);
  console.log(auth)

  if (auth.access) {
    return children ?? <Outlet />;
  } else if (!auth.access) {
    return <Navigate to={'/login'} replace />;
  } else {
    return <div>Not found</div>;
  }
};

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout> <MainPage/> </MainLayout>,
    },
    {
      path: '/login',
      element: <LoginPage/>,
    },
    {
      path: '/masterclasses',
      element: <MainLayout> <MasterClasses/> </MainLayout>,
    },
    {
      path: '/admin',
      element: (
        <ProtectedRoute>
          <ProfilePageLayout title={'Админка'}>
            <AdminPage/>
          </ProfilePageLayout>
        </ProtectedRoute>
      ),
    },
    {
      path: '*', element: <Page404/>
    },
  ])
}