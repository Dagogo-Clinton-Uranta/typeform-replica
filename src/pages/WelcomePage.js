
import Header from '../page-components/componentsWelcome/header/Header'
import Nav from '../general-components/navbar-black/nav/Nav'

import Experience from '../page-components/componentsWelcome/experience/Experience'

import Expectations from 'src/page-components/componentsWelcome/expectations/Expectations'
import About from '../page-components/componentsWelcome/about/About'
/*import RangeTable from '../componentsWelcome/rangeTable/RangeTable'*/
import Choice from '../page-components/componentsWelcome/choice/Choice'
import CallToAction from '../page-components/componentsWelcome/calltoaction/CallToAction'
/*import Solutions from '../componentsWelcome/solutions/Solutions'*/
import Testimonials from '../page-components/componentsWelcome/testimonials/Testimonials'

import Features from '../page-components/componentsWelcome/features/Features'
/*import Projects from '../componentsWelcome/projects/Projects'*/
import Faq from '../page-components/componentsWelcome/Faq/Faq'
import Footer from 'src/general-components/footer/Footer'
import ClientTestimonials from 'src/page-components/componentsWelcome/client-testimonials/ClientTestimonials'



const WelcomePage = () => {
 
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

export default WelcomePage