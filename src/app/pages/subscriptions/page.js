import React from 'react'
import './subscriptions.css'
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
            <section className='subscription-sec'>
                <div className="container-fluid">
                    <div className="row justify-content-center g-4">
                        {plans.map((plan, idx) => (
                            <div key={idx} className="col-md-6 col-lg-3">
                                <div className="card text-center h-100 pricing-card">
                                    <div className="card-body">
                                        <h5 className="subs-card-title">{plan.title}</h5>
                                        <hr />
                                        <h3 className="price-text">
                                            <span style={{color:'var(--bg)'}}><strong> ${plan.price}</strong></span>{" "}
                                            <small style={{color:'var(--bg)'}}>/ month</small>
                                        </h3>
                                        <hr />
                                        <ul className="list-unstyled text-start mt-4 mb-4">
                                            {plan.features.map((feature, i) => (
                                                <li key={i} className='sub-icons' style={{color:'var(--bg)'}}>
                                                    <i className="bi bi-check-circle-fill me-2"></i>
                                                    {feature}
                                                </li>
                                            ))}
                                            {plan.disabled.map((feature, i) => (
                                                <li key={i} className='sub-text'>
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
        </>
    )
}

export default page