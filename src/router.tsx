import { Outlet, Navigate, useRoutes } from 'react-router-dom';
import MainPage from './pages/Main';
import LoginPage from './pages/Login';
import MasterClasses from './pages/MasterClasses';
import AdminPage from './pages/AdminPage';
import { Page404 } from './pages/Page404';
import MainLayout from './layouts/MainLayout';
import ProfilePageLayout from './layouts/ProfilePageLayout';
import ProductGenerationPage from './pages/ProductGeneration';
import { getIsAuthFromLocalStorage } from './store/localStorage';

type ProtectedRouteProps = {
  children: any;
  isAuth: boolean;
};

const ProtectedRoute = ({
  children,
  isAuth
}: ProtectedRouteProps) => {
  if (!isAuth)
    return <Navigate to={'/login'} replace/>;
  else
    return children ?? <Outlet/>;
};

export default function Router() {
  const isAuth = getIsAuthFromLocalStorage() === "true"

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
      path: '/product-generation',
      element:
        <MainLayout>
          <ProductGenerationPage/>
        </MainLayout>
      ,
    },
    {
      path: '/admin',
      element: (
        <ProtectedRoute isAuth={isAuth}>
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