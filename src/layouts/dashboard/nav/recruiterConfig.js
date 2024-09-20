// component
import { FaPerson } from 'react-icons/fa6';
import SvgColor from '../../../general-components/svg-color';
import { FaSearch,FaBook, FaUser } from "react-icons/fa";

// const icon = (name) => <SvgColor src={`/assets/icons/${name}.png`} sx={{ width: 1, height: 1 }} />;
const icon = (name) => <img src={`/assets/icons2/${name}.png`} sx={{ width: 1, height: 1 }} />;

const recruiterConfig = [
   
  {
    title: 'Dashboard',
    path: '/dashboard/recruiter-home',
    icon: icon('dashboard'),
  },
 
  {
    title: 'Job Listings',
    path: '/dashboard/recruiter-job-listing',
    icon: <FaBook/>,
  },
  {
    title: 'Candidates',
    path: '/dashboard/recruiter-candidates',
    icon: <FaUser />,
  },
  

 

  {
    title: 'Settings',
    // path: '/dashboard/settings',
    path: '#',
    icon: icon('settings'),
  },
];

export default recruiterConfig;
