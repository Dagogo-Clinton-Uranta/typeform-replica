
import Header from '../page-components/componentsBackendServices/header/Header'


import Experience from '../page-components/componentsBackendServices/experience/Experience'


import About from '../page-components/componentsBackendServices/about/About'
/*import RangeTable from '../componentsBackendServices/rangeTable/RangeTable'*/
import Choice from '../page-components/componentsBackendServices/choice/Choice'
/*import Solutions from '../componentsBackendServices/solutions/Solutions'*/
import Testimonials from '../page-components/componentsBackendServices/testimonials/Testimonials'

import Features from '../page-components/componentsBackendServices/features/Features'
/*import Projects from '../componentsBackendServices/projects/Projects'*/
import Faq from '../page-components/componentsBackendServices/Faq/Faq'
import Footer from 'src/general-components/footer/Footer'
import ClientTestimonials from 'src/page-components/componentsBackendServices/client-testimonials/ClientTestimonials'
import Expectations from 'src/page-components/componentsBackendServices/expectations/Expectations'
import CallToAction from 'src/page-components/componentsBackendServices/calltoaction/CallToAction'

const BackendServicesPage = () => {
 
    return (
        <div className="welcomePage">
        {/*<Nav/>*/}
        {<Header />}
        <Expectations />
        <Experience />
        <Features/>
        <CallToAction/>
        <About />
        
        {/*<RangeTable/>*/}
        
         {/* <Choice/>*/}
        {/*<Solutions/>*/}
        <Testimonials/>
        <ClientTestimonials/>
        <Faq/>
        {/*<Projects/>*/}
        <Footer/>
        </div>
      )
}

export default BackendServicesPage