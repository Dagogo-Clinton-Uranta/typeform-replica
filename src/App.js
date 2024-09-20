// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './general-components/scroll-to-top';
import { StyledChart } from './general-components/chart';
import './index.css';
import { ToastContainer } from 'react-toastify';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeProvider>
       <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
      <ScrollToTop />
      <StyledChart />
      <Router />
    </ThemeProvider>
  );
}
