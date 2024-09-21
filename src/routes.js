import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';


import Page404 from './pages/Page404';


import CallCenterSolutionsPage from './pages/CallCenterSolutionsPage';


export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/home" />, index: true },
      


    
      ],
    },
  
 
    //SOLUTIONS
   
    { path: 'home', element: <CallCenterSolutionsPage /> },
    
   
    
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/home" />, index: true },
        {/* element: <Navigate to="/dashboard/home" />, index: true */},
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
