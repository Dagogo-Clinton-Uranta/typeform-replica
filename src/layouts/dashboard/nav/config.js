// component
import SvgColor from '../../../general-components/svg-color';
import { FaSearch,FaBook } from "react-icons/fa";

// const icon = (name) => <SvgColor src={`/assets/icons/${name}.png`} sx={{ width: 1, height: 1 }} />;
const icon = (name) => <img src={`/assets/icons2/${name}.png`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
   
  {
    title: 'Dashboard',
    path: '/dashboard/home',
    icon: icon('dashboard'),
  },
 
  {
    title: 'Prep',
    path: '/dashboard/create',
    icon: <FaBook/>,
  },
  {
    title: 'Search',
    path: '/dashboard/search',
    icon: <FaSearch />,
  },
 /* {
    title: 'Resources',
    path: '/dashboard/resources',
    icon: icon('student'),
  },*/
  
  {
    title: 'Resume',
    path: '/dashboard/resume',
    icon: icon('student'),
  },
  

 

  {
    title: 'Settings',
     path: '/dashboard/settings',
    //path: '#',
    icon: icon('settings'),
  },
];

export default navConfig;
