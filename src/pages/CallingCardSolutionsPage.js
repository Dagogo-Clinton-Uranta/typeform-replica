
import Header from '../page-components/componentsCallingCardSolutions/header/Header'


import Experience from '../page-components/componentsCallingCardSolutions/experience/Experience'


import About from '../page-components/componentsCallingCardSolutions/about/About'
/*import RangeTable from '../componentsCallingCardSolutions/rangeTable/RangeTable'*/
import Choice from '../page-components/componentsCallingCardSolutions/choice/Choice'
/*import Solutions from '../componentsCallingCardSolutions/solutions/Solutions'*/
import Testimonials from '../page-components/componentsCallingCardSolutions/testimonials/Testimonials'

import Features from '../page-components/componentsCallingCardSolutions/features/Features'
/*import Projects from '../componentsCallingCardSolutions/projects/Projects'*/
import Faq from '../page-components/componentsCallingCardSolutions/Faq/Faq'
import Footer from 'src/general-components/footer/Footer'
import ClientTestimonials from 'src/page-components/componentsCallingCardSolutions/client-testimonials/ClientTestimonials'
import Expectations from 'src/page-components/componentsCallingCardSolutions/expectations/Expectations'
import CallToAction from 'src/page-components/componentsCallingCardSolutions/calltoaction/CallToAction'
import Benefits from 'src/page-components/componentsCallingCardSolutions/benefits/Benefits'

const CallingCardSolutionsPage = () => {
 
    return (
        <div className="welcomePage">
        {/*<Nav/>*/}
        {<Header />}
        <Expectations />
        <About />
        <Experience />

        <Features/>
        <Benefits/>
        
      
         {/* <Choice/>*/}
        {/*<Solutions/>*/}
        <Testimonials/>
        <CallToAction/>
        <ClientTestimonials/>
        <Faq/>
        {/*<Projects/>*/}
        <Footer/>
        </div>
      )
}

export default CallingCardSolutionsPage