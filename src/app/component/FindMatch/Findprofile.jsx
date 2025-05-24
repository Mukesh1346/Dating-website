'use client'
import React, { useState } from 'react';
import './findprofile.css';
import Filterations from './Filterations';
import Image from 'next/image';
import Link from 'next/link';
import pic1 from "../../Images/user/user1.jpeg"
import pic2 from "../../Images/user/user2.jpeg"
import pic3 from "../../Images/user/user2.jpg"
import pic4 from "../../Images/user/user3.jpeg"
import pic5 from "../../Images/user/user4.jpeg"
import pic6 from "../../Images/user/user5.jpeg"

const originalProfiles = [
    {
        picture: pic1,
        name: "juhi khan",
        age: 24,
        profession: "web developer",
        city: "rohini",
        state: "Delhi",
        tags: ["🗻 Skiing", "🍕 Foodie", "🎵 Music lover"],
        isOnline: true,
    },
    {
        picture: pic2,
        name: "Divya Rathor",
        age: 24,
        profession: "web developer",
        city: "rohini",
        state: "Delhi",
        tags: ["🗻 Skiing", "🍕 Foodie", "🎵 Music lover"],
        isOnline: false,
    },
    {
        picture: pic3,
        name: "Nirmala Devi",
        age: 34,
        profession: "web developer",
        city: "rohini",
        state: "Delhi",
        tags: ["🗻 Skiing", "🍕 Foodie", "🎵 Music lover"],
        isOnline: true,
    },
    {
        picture: pic4,
        name: "Kalpana chawla",
        age: 40,
        profession: "web developer",
        city: "rohini",
        state: "Delhi",
        tags: ["🗻 Skiing", "🍕 Foodie", "🎵 Music lover"],
        isOnline: true,
    },
    {
        picture: pic5,
        name: "Vidya Devi",
        age: 50,
        profession: "web developer",
        city: "rohini",
        state: "Delhi",
        tags: ["🗻 Skiing", "🍕 Foodie", "🎵 Music lover"],
        isOnline: false,
    },
    {
        picture: pic6,
        name: "Santosh Singh",
        age: 70,
        profession: "web developer",
        city: "rohini",
        state: "Delhi",
        tags: ["🗻 Skiing", "🍕 Foodie", "🎵 Music lover"],
        isOnline: true,
    },
]

const Findprofile = () => {
    const [filteredProfiles, setFilteredProfiles] = useState(originalProfiles);

    const applyFilters = (filters) => {
        let result = [...originalProfiles];

        if (filters.gender)
            result = result.filter((p) => p.gender === filters.gender);

        if (filters.minAge)
            result = result.filter((p) => p.age >= filters.minAge);

        if (filters.maxAge)
            result = result.filter((p) => p.age <= filters.maxAge);

        if (filters.location)
            result = result.filter((p) => p.city.toLowerCase().includes(filters.location));

        if (filters.onlineNow)
            result = result.filter((p) => p.onlineNow);

        if (filters.verifiedOnly)
            result = result.filter((p) => p.verified);

        if (filters.sortBy === "newest")
            result = result.reverse(); // simulate newest

        setFilteredProfiles(result);
    };



    return (
        <>
        <section className='find-profile-section'>
            <div className="container-fluid">
            <Filterations onFilterChange={applyFilters} />
            <hr />
                <div className="row">
                    {filteredProfiles.map((item, index) => (
                        <div key={index} className="col-md-3">
                            <Link href={'/pages/find-match/id'} className='profile-match-link'>
                                <div className='profile-match-card'>
                                    <div className="profile-image-wrapper">
                                        <Image src={item.picture} alt={item.name} className="profile-img" />
                                    </div>
                                    <div className="profile-info">
                                        <h4>{item.name}, <span>{item.age}</span></h4>
                                        <p className="profession"><i className="bi bi-briefcase-fill"></i> {item.profession}</p>
                                        <div className="tags">
                                            {item.tags.map((tag, idx) => (
                                                <span key={idx} className="tag">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="bottom-avatar">
                                        <Image src={item.picture} alt="small" className="avatar-img" />
                                    </div>
                                <div className={`online-offline-dot ${item.isOnline ? 'green' : 'red'}`}></div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </>
    );
};

export default Findprofile;
