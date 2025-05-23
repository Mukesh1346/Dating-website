import ProfileHeader from '@/app/component/ProfileHeader/ProfileHeader'
import ProfileTabs from '@/app/component/ProfileTabs/ProfileTabs'
import React from 'react'

const page = () => {
  return (
    <>
    <section className='profile'>
    {/* <ProfileHeader /> */}
    <ProfileTabs />
    </section>
    </>
  )
}

export default page