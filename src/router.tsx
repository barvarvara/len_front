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
import ProductGeneration from './pages/ProductGeneration';
import { Canvas } from '@react-three/fiber';

type ProtectedRouteProps = {
  children: any;
};

const ProtectedRoute = ({
  children,
}: ProtectedRouteProps) => {
  // const auth = useSelector((state: RootState) => state.auth);
  // console.log(auth)

  const access_token = localStorage.getItem('access_token')

  if (access_token) {
    return children ?? <Outlet/>;
  } else if (!access_token) {
    return <Navigate to={'/login'} replace/>;
  } else {
    return <div>Страница не найдена</div>;
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
      path: '/product-generation',
      element:
        <MainLayout>
          <Canvas shadows camera={{ position: [3, 3, 3], fov: 50 }} style={{ 'height': '100vh' }}>
            <ProductGeneration/>
          </Canvas>
        </MainLayout>
      ,
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