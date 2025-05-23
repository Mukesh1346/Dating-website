"use client"
import React, { useState } from 'react';
import "./profiletabs.css"
import MyProfile from '../MyProfile/MyProfile';
const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState('my-profile');

  // Content based on selected tab
  const renderContent = () => {
    switch (activeTab) {
      case 'my-profile':
        return (
          <>
           <MyProfile />
          </>
        );
      case 'go-live':
        return (
          <>
            <h5 className="card-title">go-live Profile</h5>
            <p className="card-text">You can go-live your personal details and information here.</p>
          </>
        );
      case 'message':
        return (
          <>
            <h5 className="card-title">message</h5>
            <p className="card-text">Configure your application message and preferences here.</p>
          </>
        );
      case 'users':
        return (
          <>
            <h5 className="card-title">users</h5>
            <p className="card-text">Update your password and manage your users message here.</p>
          </>
        );
      case 'setting':
        return (
          <>
            <h5 className="card-title">setting</h5>
            <p className="card-text">Click the setting button to exit your account.</p>
            <button className="btn btn-danger">setting</button>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <section className='profile-tabs-section'>
    <div className="container-fluid mt-4">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-2 mb-3">
          <div className="list-group">
            <button
              className={`list-group-item list-group-item-action ${activeTab === 'my-profile' ? 'active' : ''}`}
              onClick={() => setActiveTab('my-profile')}
            >
            <i className="bi bi-person"></i>  My Profile 
            </button>
            <button
              className={`list-group-item list-group-item-action ${activeTab === 'go-live' ? 'active' : ''}`}
              onClick={() => setActiveTab('go-live')}
            >
              <i className="bi bi-play"></i> Go live
            </button>
            <button
              className={`list-group-item list-group-item-action ${activeTab === 'message' ? 'active' : ''}`}
              onClick={() => setActiveTab('message')}
            >
             <i className="bi bi-chat-dots"></i> Message
            </button>
            <button
              className={`list-group-item list-group-item-action ${activeTab === 'users' ? 'active' : ''}`}
              onClick={() => setActiveTab('users')}
            >
             <i className="bi bi-people"></i> Users
            </button>
            <button
              className={`list-group-item list-group-item-action ${activeTab === 'setting' ? 'active' : ''}`}
              onClick={() => setActiveTab('setting')}
            >
            <i className="bi bi-gear-wide-connected"></i> Setting
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="col-md-10">
          <div>
            {/* <div>
              {activeTab.replace('_', ' ')}
            </div> */}
            <div>
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default ProfileTabs;
