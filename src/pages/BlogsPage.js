
import Header from '../page-components/componentsBlogs/header/Header'


import Experience from '../page-components/componentsBlogs/experience/Experience'


import About from '../page-components/componentsBlogs/about/About'
/*import RangeTable from '../componentsBlogs/rangeTable/RangeTable'*/
import Choice from '../page-components/componentsBlogs/choice/Choice'
/*import Solutions from '../componentsBlogs/solutions/Solutions'*/
import Testimonials from '../page-components/componentsBlogs/testimonials/Testimonials'

import Features from '../page-components/componentsBlogs/features/Features'
/*import Projects from '../componentsBlogs/projects/Projects'*/
import Faq from '../page-components/componentsBlogs/Faq/Faq'
import Footer from 'src/general-components/footer/Footer'
import ClientTestimonials from 'src/page-components/componentsBlogs/client-testimonials/ClientTestimonials'
import Expectations from 'src/page-components/componentsBlogs/expectations/Expectations'
import CallToAction from 'src/page-components/componentsBlogs/calltoaction/CallToAction'

const BlogsPage = () => {
 
    return (
        <div className="welcomePage">
       
        {<Header />}
        <Expectations />
        {/*<Experience />
        <Features/>
        <CallToAction/>
        <About />
        
       
        <Testimonials/>
        <ClientTestimonials/>
        <Faq/>
        */}
        <Footer/>
        </div>
      )
}

export default BlogsPage