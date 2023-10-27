import { useRoutes } from 'react-router-dom';
import MainPage from './pages/Main';
import LoginPage from './pages/Login';
import MasterClasses from './pages/MasterClasses';
import AdminPage from './pages/AdminPage';
import { Page404 } from './pages/Page404';
import MainLayout from './layouts/MainLayout';
import ProfilePageLayout from './layouts/ProfilePageLayout';

type ProtectedRouteProps = {
  isAllowed: boolean;
  redirectPath: string;
  children: any;
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
        // <ProtectedRoute
        //   isAllowed={userRole.includes("admin") || userRole.includes("jdg-chk") || userRole.includes("jdg-res")}
        //   redirectPath="/adminAuth"
        // >
        <ProfilePageLayout title={"Админка"}> <AdminPage/> </ProfilePageLayout>
        // </ProtectedRoute>
      ),
    },
    {
      path: '*', element: <Page404/>
    },
  ])
}