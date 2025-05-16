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

const page = () => {
  return (
    <>
      <Hero />
      <TrustedSec/>
      <DateAdviceSec/>
      <CollectionUser/>
      <SearchHereSec/>
      <MeetOn/>
      <TestimonialCarousel/>
      <VideoSection/>

    </>
  )
}

export default page