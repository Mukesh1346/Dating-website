import React from 'react'
import './subscriptions.css'
import Image from 'next/image';
import img1 from '@/app/Images/graph1.jpg'
import img2 from '@/app/Images/Registration.avif'
import img3 from '@/app/Images/time.jpg'

const page = () => {
    const plans = [
        {
            title: "Qiupid Standard",
            price: 35,
            features: [
                "View members directory",
                "View members profile",
                "Access to groups",
                "Add media to your profile",
            ],
            disabled: [
                "View site activity",
                "Send private messages",
                "Access group directory",
                "Create group",
                "Forum admin",
                "Special title",
            ],
         

        },
        {
            title: "Qiupid Plus",
            price: 40,
            features: [
                "View members directory",
                "View members profile",
                "Access to groups",
                "Add media to your profile",
                "View site activity",
            ],
            disabled: [
                "Send private messages",
                "Access group directory",
                "Create group",
                "Forum admin",
                "Special title",
            ],
        },
        {
            title: "Qiupid Extra",
            price: 45,
            features: [
                "View members directory",
                "View members profile",
                "Access to groups",
                "Add media to your profile",
                "View site activity",
                "Send private messages",
                "Access group directory",
            ],
            disabled: ["Create group", "Forum admin", "Special title"],
        },
        {
            title: "Qiupid Platinum",
            price: 50,
            features: [
                "View members directory",
                "View members profile",
                "Access to groups",
                "Add media to your profile",
                "View site activity",
                "Send private messages",
                "Access group directory",
                "Create group",
                "Forum admin",
                "Special title",
            ],
            disabled: [],
        },
    ];
    return (
        <>
            <section className='breadcrumb-all'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center m-0 gap-2">
                                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                                    <i className="bi bi-heart"></i>
                                    <li className="breadcrumb-item active" aria-current="page">Subscriptions</li>
                                </ol>
                            </nav>
                            <h1 className='text-center'>Subscriptions</h1>
                            <p className='text-center'>Choose the plan that suits you best</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='subscription-sec'>
                <div className="container-fluid">
                    <div className="row justify-content-center g-4">
                        {plans.map((plan, idx) => (
                            <div key={idx} className="col-md-6 col-lg-3">
                                <div
                                    className="card text-center h-100 pricing-card"
                                    style={idx === 0 ? { backgroundColor: "#A16EFF" } : {}}
                                >

                                    <div className="card-body">
                                        <h5 className="subs-card-title" >{plan.title}</h5>
                                        <hr />
                                        <h3 className="price-text">
                                            <span style={ idx===0 ?{color:"black"}: { color: 'var(--bg)' }}><strong> ${plan.price}</strong></span>{" "}
                                            <small style={idx===0 ?{color:"black"}:{ color: 'var(--bg)' }}>/ month</small>
                                        </h3>
                                        <hr />
                                        <ul className="list-unstyled text-start mt-4 mb-4">
                                            {plan.features.map((feature, i) => (
                                                <li key={i} className='sub-icons' style={idx===0 ?{color:"black"}: { color: 'var(--bg)' }}>
                                                    <i className="bi bi-check-circle-fill me-2"style={idx===0 ? {color:"black"}:{}} ></i>
                                                    {feature}
                                                </li>
                                            ))}
                                            {plan.disabled.map((feature, i) => (
                                                <li key={i} className='sub-text' style={idx===0 ?{color:"white"}:{}}>
                                                    <i className="bi bi-circle me-2"></i>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                        <button className="btn btn-pink w-100">All Promises</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section>
                <div>
                    <div className='titlesec'>
                        <h1>How upgraded profile can <br /> help us to find partner?</h1>
                    </div>


                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-5'>

                                <div className='SubscriptionleftSec'>
                                    <Image   src={img1} alt="" className='image1' height={400} width={400} />

                                </div>

                            </div>
                            <div className='col-md-7'>
                                <div className='SubscriptionRightSec'>
                                    <h3 className='text-center sectionsubtitle '>We rank Your proposal</h3>
                                    <p>Love is in the numbers.
                                        Since launching, we ve seen a steady rise in user engagement, successful matches, and retention rates — proving that people are not just joining, they’re staying and connecting.
                                        <br />
                                        📈 Consistent User Growth month-over-month
                                        <br />
                                        ❤️ Thousands of Matches Made every week
                                        <br />
                                        💬 High Engagement Rates in chats and interactions
                                        <br />
                                        🔒 Strong Retention driven by user trust and satisfaction

                                        With a user-centric approach and data-backed strategies, we’re building more than just a dating platform — we’re creating a trusted space for real relationships to blossom.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-7'>
                                <div className='SubscriptionRightSec'>
                                    <h3 className='text-center sectionsubtitle'>We rank Your proposal</h3>
                                    <p>Love is in the numbers.
                                        Since launching, we ve seen a steady rise in user engagement, successful matches, and retention rates — proving that people are not just joining, they’re staying and connecting.
                                        <br />
                                        📈 Consistent User Growth month-over-month
                                        <br />
                                        ❤️ Thousands of Matches Made every week
                                        <br />
                                        💬 High Engagement Rates in chats and interactions
                                        <br />
                                        🔒 Strong Retention driven by user trust and satisfaction

                                        With a user-centric approach and data-backed strategies, we’re building more than just a dating platform — we’re creating a trusted space for real relationships to blossom.</p>
                                </div>


                            </div>
                            <div className='col-md-5'>


                                <div className='SubscriptionleftSec'>
                                    <Image src={img2} alt="" className='image2' height={400} width={400} />

                                </div>


                            </div>
                        </div>

                    </div>

                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-5'>

                                <div className='SubscriptionleftSec'>
                                    <Image src={img3} alt="" className='image3' height={400} width={400} />

                                </div>

                            </div>
                            <div className='col-md-7'>
                                <div className='SubscriptionRightSec'>
                                    <h3 className='text-center sectionsubtitle'>We rank Your proposal</h3>
                                    <p>Love is in the numbers.
                                        Since launching, we ve seen a steady rise in user engagement, successful matches, and retention rates — proving that people are not just joining, they’re staying and connecting.
                                        <br />
                                        📈 Consistent User Growth month-over-month
                                        <br />
                                        ❤️ Thousands of Matches Made every week
                                        <br />
                                        💬 High Engagement Rates in chats and interactions
                                        <br />
                                        🔒 Strong Retention driven by user trust and satisfaction

                                        With a user-centric approach and data-backed strategies, we’re building more than just a dating platform — we’re creating a trusted space for real relationships to blossom.</p>
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