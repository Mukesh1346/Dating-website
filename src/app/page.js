import React from 'react'
import './globals.css'
import TrustedSec from '@/app/component/TrustedSec/page'
import DateAdviceSec from '@/app/component/DateAdviceSec/page'
import CollectionUser from '@/app/component/CollectionUser/page'

import Hero from './component/Hero/Hero'
import SearchHereSec from './component/SearchHereSec/page'
import MeetOn from './component/MeetOn/page'
import TestimonialCarousel from './component/Testimonial/page'
import VideoSection from './component/VideoSec/page'
import CoupleForm from './component/CoupleForm/CoupleForm'


import AnimatedSection from './component/AnimatedSection/page'
import CubeMainSec from './component/CubeMainSec/page'



const page = () => {
  return (
    <>
      <Hero />
      <AnimatedSection>
      <CoupleForm />
      </AnimatedSection>
      <TrustedSec/>

      <AnimatedSection>   
      <DateAdviceSec/>
      </AnimatedSection>
 
      <CollectionUser/>

      <AnimatedSection>
      <SearchHereSec/>
      </AnimatedSection>
      
      <AnimatedSection>
      <MeetOn/>
      </AnimatedSection>
       
       <AnimatedSection>     
         <TestimonialCarousel/>
       </AnimatedSection>

      <AnimatedSection>
      <VideoSection/>
      </AnimatedSection>
         <CubeMainSec/>
       {/* <CubeSection/> */}
   
       






    </>
  )
}

export default page