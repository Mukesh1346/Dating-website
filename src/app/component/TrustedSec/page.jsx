import Image from 'next/image'
import React from 'react'
import pic1 from '@/app/Images/awesome.png'
import pic2 from '@/app/Images/icon.png'
import pic3 from '@/app/Images/millions.webp'
import pic4 from '@/app/Images/icon1.jpeg'
import './trustedSec.css'

const page = () => {
  return (
    <>
      <section className='trusted-sec-main'>
        <div>
          <div className="container-fluid">
            <div className='text-center'>
              <h1>The No.1 Trusted Dating</h1>
            </div>
            <div className="row align-items-center">
              <div className="col-md-3">
                <div className='trustedSec'>
                  <Image src={pic1} alt="svgImage" height={50} width={50} className='svgImg' />
                  <h3 className='fs-'>Awesome Community</h3>
                  <p className='m-0'>Caramels pie cake pie marshmallow soufflé donut biscuit.</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className='trustedSec'>
                  <Image src={pic2} alt="svgImage" height={60} width={60} className='svgImg' />
                  <h3>Million Members</h3>
                  <p className='m-0'>Caramels pie cake pie marshmallow soufflé donut biscuit.</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className='trustedSec'>
                  <Image src={pic3} alt="svgImage" height={60} width={60} className='svgImg' />
                  <h3>Private Groups</h3>
                  <p className='m-0'>Caramels pie cake pie marshmallow soufflé donut biscuit.</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className='trustedSec'>
                  <Image src={pic4} alt="svgImage" height={60} width={60} className='svgImg' />
                  <h3>Friendly Forums</h3>
                  <p className='m-0'>Caramels pie cake pie marshmallow soufflé donut biscuit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default page
