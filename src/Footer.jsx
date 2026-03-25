import React from "react";
import "./Footer.css";
import Footerlogo from "./assets/header.jpg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-left">
          <div className="logo">
            <img src={Footerlogo} className="footerlogo"></img>
          </div>

          <p className="footer-desc">
           Hogist is a premium catering consultancy dedicated to transforming food businesses into efficient, scalable, and high-performing operations. From concept creation to execution, we guide you through every step with industry expertise and strategic planning.
          </p>

          <div className="socials">
            <div className="circle">f</div>
            <div className="circle">Bē</div>
            <div className="circle">◎</div>
            <div className="circle">◌</div>
          </div>
        </div>

        {/* MENU */}
        <div className="footer-col">
          <h6>Menu</h6>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Blog</li>
            <li>Contacts Us</li>
          </ul>
        </div>

        {/* LINKS */}
        <div className="footer-col">
          <h6>Links</h6>
          <ul>
            <li>Events</li>
            <li>Pricing</li>
            <li>FAQs</li>
            <li>Our Menu</li>
            <li>Our Team</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h6>Contact</h6>
          <ul>
            <li>support@hogist.com</li>
            <li>
              HOGIST TECHNOLOGIES PVT. LTD.
              <br/> 2nd Floor, Kakani Towers, <br/>No:34 Khader Nawaz Khan Road Nungambakkam,<br/> Chennai 600 006.
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2024, Hogist technologies private limited. All rights reserved.
</p>
        <p>Site by ThemeRex.</p>
      </div>
    </footer>
  );
};

export default Footer;