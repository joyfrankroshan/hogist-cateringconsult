import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import headerlogo from "../../assets/header.jpg";
import { FaArrowRight } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";

import "./Header.css";

function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const timeoutRef = useRef(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  // DESKTOP HOVER
  const handleEnter = (menu) => {
    clearTimeout(timeoutRef.current);
    setOpenMenu(menu);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 200);
  };

  return (
    <>
      <motion.div
        className="header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        {/* LOGO */}
        <div className="headerlogo">
          <img src={headerlogo} alt="logo" />
        </div>

        {/* RIGHT */}
        <div className="header-right">

          {/* HOME */}
          <div
            className="menu-item"
            onMouseEnter={() => handleEnter("home")}
            onMouseLeave={handleLeave}
          >
            <span className="menu-icon">
Home <MdKeyboardArrowDown className="arrow-icon" />            </span>

            {openMenu === "home" && (
              <div className="dropdown">
               <p>Catering</p>
        <p>Event Agency</p>
        <p>Wedding Planner </p>
        <p>Vip Parties</p>
        <p>Birthday Parties</p>
        <p>Big Conference</p>
              </div>
            )}
          </div>

          {/* PAGES */}
          <div
            className="menu-item"
            onMouseEnter={() => handleEnter("pages")}
            onMouseLeave={handleLeave}
          >
            <span className="menu-icon">
              Pages <MdKeyboardArrowDown />
            </span>

            {openMenu === "pages" && (
              <div className="dropdown">
                 <p>About us-1</p>
        <p>About us-2</p>
        <p>Our menu</p>
        <p>Services-1</p>
        <p>Services-2</p>
        <p>FAQ</p>
        <p>Pricing</p>
        <p>404 Page</p>
        <p>Service Plus</p>
        <p>AI Features</p>
              </div>
            )}
          </div>

          {/* EVENTS */}
          <div
            className="menu-item"
            onMouseEnter={() => handleEnter("events")}
            onMouseLeave={handleLeave}
          >
            <span className="menu-icon">
              Events <MdKeyboardArrowDown />
            </span>

            {openMenu === "events" && (
              <div className="dropdown">
                 <p>Events Calender</p>
        <p>Events List</p>
        <p>Single Event</p>
              </div>
            )}
          </div>

          {/* BLOG */}
          <div
            className="menu-item"
            onMouseEnter={() => handleEnter("blog")}
            onMouseLeave={handleLeave}
          >
            <span className="menu-icon">
              Blog <MdKeyboardArrowDown />
            </span>

            {openMenu === "blog" && (
              <div className="dropdown">
                <p>Blog-standard</p>
        <p>Blog-Grid</p>
        <p>Post-WithStandard</p>
        <p>Post-WithOutSidebar</p>
              </div>
            )}
          </div>

          {/* CONTACT */}
          <div
            className="menu-item"
            onMouseEnter={() => handleEnter("contact")}
            onMouseLeave={handleLeave}
          >
            <span className="menu-icon">
              Contact Us 
            </span>

            {openMenu === "contact" && (
              <div className="dropdown">
                <p>Email</p>
                <p>Phone</p>
                <p>Support</p>
              </div>
            )}
          </div>

          {/* BUTTON */}
          <button className="header-button">
            Book Free Audit <FaArrowRight />
          </button>
        </div>

        {/* HAMBURGER (MOBILE) */}
        <div className="hamburger" onClick={() => setMobileMenu(true)}>
          <HiMenuAlt2 />
        </div>
      </motion.div>

      {/* OVERLAY */}
      {mobileMenu && (
        <div className="overlay" onClick={() => setMobileMenu(false)} />
      )}

      {/* MOBILE MENU */}
      {mobileMenu && (
        <motion.div
          className="mobile-menu"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.4 }}
        >
         <div className="mobile-menu-content">

  {/* HOME */}
  <div className="m-item">
    <p onClick={() => setMobileDropdown(mobileDropdown === "home" ? null : "home")}>
      Home <MdKeyboardArrowDown />
    </p>

    {mobileDropdown === "home" && (
      <div className="m-dropdown">
        <span>Catering</span>
        <span>Event Agency</span>
        <span>Wedding Planner </span>
        <span>Vip Parties</span>
        <span>Birthday Parties</span>
        <span>Big Conference</span>




      </div>
    )}
  </div>

  {/* PAGES */}
  <div className="m-item">
    <p onClick={() => setMobileDropdown(mobileDropdown === "pages" ? null : "pages")}>
      Pages <MdKeyboardArrowDown />
    </p>

    {mobileDropdown === "pages" && (
      <div className="m-dropdown">
        <span>About us-1</span>
        <span>About us-2</span>
        <span>Our menu</span>
        <span>Services-1</span>
        <span>Services-2</span>
        <span>FAQ</span>
        <span>Pricing</span>
        <span>404 Page</span>
        <span>Service Plus</span>
        <span>AI Features</span>


        
      </div>
    )}
  </div>

  {/* EVENTS */}
  <div className="m-item">
    <p onClick={() => setMobileDropdown(mobileDropdown === "events" ? null : "events")}>
      Events <MdKeyboardArrowDown />
    </p>

    {mobileDropdown === "events" && (
      <div className="m-dropdown">
        <span>Events Calender</span>
        <span>Events List</span>
        <span>Single Event</span>
      </div>
    )}
  </div>

  {/* BLOG */}
  <div className="m-item">
    <p onClick={() => setMobileDropdown(mobileDropdown === "blog" ? null : "blog")}>
      Blog <MdKeyboardArrowDown />
    </p>

    {mobileDropdown === "blog" && (
      <div className="m-dropdown">
       <span>Blog-standard</span>
        <span>Blog-Grid</span>
        <span>Post-WithStandard</span>
        <span>Post-WithOutSidebar</span>
      </div>
    )}
  </div>

  {/* CONTACT */}
  <div className="m-item">
    <p onClick={() => setMobileDropdown(mobileDropdown === "contact" ? null : "contact")}>
      Contact Us
    </p>

    {mobileDropdown === "contact" && (
      <div className="m-dropdown">
        
      </div>
    )}
  </div>

  <span className="close-btn" onClick={() => setMobileMenu(false)}>
    ✕
  </span>

</div>
        </motion.div>
      )}
    </>
  );
}

export default Header;