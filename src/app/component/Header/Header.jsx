"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
// import logo from "../../Images/logo-light.svg"
import logo from "../../Images/logo.png"
import mermberImage from "../../Images/explore-lmage.png"
import './header.css'

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Find Match",
    href: "/pages/find-match",
  },
  {
    label: "Community",
    href: "/about",
    isDropdown: true,
    dropdown: [
      {
        title: "Community",
        links: [
          { label: "Community Activity", href: "/about" },
          { label: "Recent Groups", href: "/about" },
          { label: "Single Group", href: "/about" },
          { label: "Members", href: "/about" },
          { label: "About Us", href: "/pages/about-us" },
        ]
      },
      {
        title: "Profile",
        links: [
          { label: "Profile Main", href: "/pages/profile" },
          { label: "Media Profile", href: "/about" },
        ]
      },
      {
        title: "Members",
        image: mermberImage,
        href: "/about"
      }
    ]
  },
  {
    label: "Services",
    href: "/services",
    isDropdown: true,
    dropdown: [
      {
        title: "Our Services",
        links: [
          { label: "Web Development", href: "/services/web-development" },
          { label: "UI/UX Design", href: "/services/ui-ux" },
          { label: "SEO Optimization", href: "/services/seo" },
          { label: "E-commerce Solutions", href: "/services/ecommerce" },
        ]
      }
    ]
  },
  
  {
    label: "Subscriptions",
    href: "/pages/subscriptions"
  },
  
  {
    label: "Contact",
    href: "/pages/contact"
  }
];


const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  return (
    <div className="nav-main">
      <div className="container">
        <nav className="navbar">
          <div className="desktop row align-items-center w-100">
            <div className="col-md-2 d-flex">
              <div className="nav-logo ">
                <Link href="/">
                  <Image src={logo} width={160} height={100} alt="Logo" />
                </Link>
              </div>
              <div>
                <h3 className='logotext'>Trustme</h3>
                </div>
            </div>
            <div className="col-md-8">
              <div className="nav-menu-header">
                <ul className="nav-menu-ul">
                  {navItems.map((item, idx) => (
                    <li key={idx} className={item.isDropdown ? "dropdown-parent" : ""}>
                      <Link href={item.href}>
                        {item.label}
                        {item.isDropdown && <i className="bi bi-chevron-down"></i>}
                      </Link>

                      {item.isDropdown && (
                        <div className="dropdown">
                          <div className="hero-dropdown-content-main">
                            {item.dropdown.map((section, i) => (
                              <div className='hero-dropdown-content' key={i}>
                                {section.title && <p><b>{section.title}</b></p>}
                                {section.links && (
                                  <ul>
                                    <li>
                                      {section.links.map((link, j) => (
                                        <Link key={j} href={link.href}>{link.label}</Link>
                                      ))}
                                    </li>
                                  </ul>
                                )}
                                {section.image && (
                                  <Link href={section.href}>
                                    <Image className='mt-3' src={section.image} width="100" height={100} alt="our member" />
                                  </Link>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-2 text-end">
              <Link href="/pages/login" className="login-btn">Log In / Register</Link>
            </div>
          </div>
          <div className='responsive-sidebar'>
            <Image src={logo} className='logo' alt='responsive logo' />
            <button className="hamburger" onClick={toggleSidebar}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

          <div className={`nav-sidebar sidebar ${sidebarOpen ? 'open' : ''}`}>
            <button className="close-btn" onClick={toggleSidebar}>×</button>
            <ul className="sidebar-menu">
              {navItems.map((item, idx) => (
                <li key={idx}>
                  <details>
                    <summary>
                      <Link href={item.href} onClick={toggleSidebar}>
                        {item.label}
                      </Link>
                    </summary>
                    {item.isDropdown && (
                      <div className="sidebar-dropdown">
                        {item.dropdown.map((section, i) => (
                          <div key={i}>
                            {section.title && <b>{section.title}</b>}
                            {section.links && (
                              <ul>
                                {section.links.map((link, j) => (
                                  <li key={j}>
                                    <Link href={link.href} onClick={toggleSidebar}>{link.label}</Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                            {section.image && (
                              <Link href={section.href}>
                                <Image src={section.image} width={100} height={80} alt="Dropdown" />
                              </Link  >
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </details>
                </li>
              ))}
              <li><Link href="/login" onClick={toggleSidebar}>Log In / Register</Link></li>
            </ul>
          </div>

        </nav>
      </div>
    </div>
  )
}

export default Header
