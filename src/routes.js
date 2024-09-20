import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';


import Page404 from './pages/Page404';

import WelcomePage from './pages/WelcomePage';
import BackendServicesPage from './pages/BackendServicesPage';

import CallCenterSolutionsPage from './pages/CallCenterSolutionsPage';
import LoanInquiryPage from './pages/LoanInquiryPage';
import LoanRefundPage from './pages/LoanRefundPage';
import LoanReminderPage from './pages/LoanReminderPage';
import LoanPaidOffPage from './pages/LoanPaidOffPage';
import LoanRenewalPage from './pages/LoanRenewalPage';
import YearEndSummaryPage from './pages/YearEndSummaryPage';
import LoanAdditionalInfoPage from './pages/LoanAddiitonalInfoPage';
import LoanApprovedPage from './pages/LoanApprovedPage';
import LoanRefinancePage from './pages/LoanRefinancePage';
import LoanUpdatePage from './pages/LoanUpdatePage';
import LoanFeedbackPage from './pages/LoanFeedbackPage';
import HolidayMessagePage from './pages/HolidayMessagePage';
import InconvenienceMessagePage from './pages/InconvenienceMessage';
import LoanTermsChangePage from './pages/LoanTermsChangePage';
import LoanSignPage from './pages/LoanSignPage';
import LoanAccountStatementPage from './pages/LoanAccountStatement';
import LoanSpecialOfferPage from './pages/LoanSpecialOfferPage';
import LoanPreApprovedPage from './pages/LoanPreApprovedPage';
import LoanPastDuePage from './pages/LoanPastDuePage';


export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/home" />, index: true },
      


    
      ],
    },
  
    //SERVICES
   
   
    { path: 'backend-services', element: <BackendServicesPage /> },
   
    //SOLUTIONS
   
    { path: 'home', element: <CallCenterSolutionsPage /> },
    { path: 'loan-inquiry', element: <LoanInquiryPage /> },
    { path: 'loan-refund', element: <LoanRefundPage /> },
    { path: 'loan-reminder', element: <LoanReminderPage /> },
    { path: 'loan-paid-off', element: <LoanPaidOffPage /> },
    { path: 'loan-approved', element: <LoanApprovedPage /> },
    { path: 'loan-feedback', element: <LoanFeedbackPage /> },
    { path: 'loan-update', element: <LoanUpdatePage /> },
    { path: 'loan-refinance', element: <LoanRefinancePage /> },
    { path: 'loan-sign', element: <LoanSignPage /> },
    { path: 'loan-account-statement', element: <LoanAccountStatementPage /> },
    { path: 'holiday-message', element: <HolidayMessagePage /> },
    { path: 'loan-terms-change', element: <LoanTermsChangePage /> },
    { path: 'inconvenience-message', element: <InconvenienceMessagePage /> },
    { path: 'loan-additional-info', element: <LoanAdditionalInfoPage /> },
   
    /*SECTION 1 */
    { path: 'loan-pre-approved', element: <LoanPreApprovedPage /> },
    { path: 'loan-special-offer', element: <LoanSpecialOfferPage /> },
    { path: 'loan-past-due', element: <LoanPastDuePage /> },
   /*SECTION 1 END */

    { path: 'loan-renewal', element: <LoanRenewalPage /> },
    { path: 'year-end-summary', element: <YearEndSummaryPage /> },
   

  


    //ABOUT-MENU
    

    //OFFRINGS
    
    //CONTACT IN FOOTER
    
    
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
