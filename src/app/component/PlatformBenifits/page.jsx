import React from 'react'
import { GiLovers } from "react-icons/gi";
import './Benifits.css'
import Image from 'next/image';
import pic1 from '@/app/Images/banner6.jpg'
import icon1 from '@/app/Images/secureicon.png'
import icon2 from '@/app/Images/Connection.png'
import icon3 from '@/app/Images/Profile.png'
import icon4 from '@/app/Images/experience.png'


const page = () => {
  return (
    <>
      <section>
        <div className='container'>
            <div className="row">
                <div className="col-md-6">
                             <div className='BenifitLeftSec' >
                                <h3> Benefits of Using Our Dating Platform</h3>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className='text-center'>
                                       <Image className='iconimg' src={icon1} alt="icon" height={100} width={100}/>
                                        </div>
                                    <div className='BenifitSec'>
                                        <b className='BenifitHeading'>Find True Connections:</b>
                                        <p>Discover authentic relationships and meaningful conversations with like-minded individuals who value love and connection as much as you do.</p>
                                    </div>
                                    </div>
                                    <div className="col-md-6">
                                    <div className='text-center'>
                                       <Image className='iconimg' src={icon2} alt="icon" height={100} width={100}/>
                                        </div>
                                    <div className='BenifitSec'>
                                        <b>Safe & Secure:</b>
                                        <p>Your privacy and safety are our top priority. We use advanced encryption and verification tools to ensure your profile is secure and your interactions are genuine.</p>
                                    </div>
                                    </div>

                                    <div className="col-md-6">
                                    <div className='text-center'>
                                       <Image className='iconimg' src={icon3} alt="icon" height={100} width={100}/>
                                        </div>
                                    <div className='BenifitSec'>
                                        <b>Advanced Matching:</b>
                                        <p>Our smart matchmaking algorithm connects you with people who share your interests, values, and lifestyle, giving you the best chance to find someone special.</p>
                                    </div>
                                    </div>
                                   
                                    <div className="col-md-6">
                                    <div className='text-center'>
                                       <Image className='iconimg' src={icon4} alt="icon" height={100} width={100}/>
                                        </div>
                                    <div className='BenifitSec'>
                                        <b>Seamless User Experience:</b>
                                        <p>Enjoy a smooth, user-friendly interface that lets you focus on making connections, with intuitive messaging, dynamic profiles, and interactive features.</p>
                                    </div>
                                    </div>
                                </div>
                </div>
                <div className="col-md-6">
                       <Image src={pic1} alt="" width={600} height={600}/>
                </div>
            </div>

        </div>
      </section>
    </>
  )
}

export default page
