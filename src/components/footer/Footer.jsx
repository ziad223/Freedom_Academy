import React, { useEffect } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../../images/freedom.png'



const Footer = () => {

 useEffect(() =>{
AOS.init({duration : 2000});
 }, [])

  return (
    <div className='footer'>

    <div className="container">
      <div className="footer-content">

        <div className="footer-logo"   data-aos = 'fade-down'>
          <img src={logo} alt="" />
          <h2>Freedom <span>Academy</span></h2>
          </div>

          <div className="footer-links"   data-aos = 'fade-right'>
            <h2>Our Links</h2>
            <ul>
              <Link className='link' to="/">Home</Link>
              <Link className='link' to="/about">About</Link>
              <Link className='link' to="/courses">Courses</Link>
              <Link className='link' to="/contact">Contact</Link>
            </ul>
          </div>

          <div className="footer-social"   data-aos = 'fade-left'>
            <h2>Freedom Social</h2>
            <ul>
              <li><a href="https://www.facebook.com/freedom055" target='_blank'><i class="fa-brands fa-facebook one"></i></a></li>
              <li><a href="https://www.instagram.com/freedom__055/" target='_blank'><i class="fa-brands fa-instagram two"></i></a></li>
              <li><a href="https://twitter.com/freedom52057624" target='_blank'><i class="fa-brands fa-twitter three"></i></a></li>
              <li><a href="https://www.tiktok.com/@freedom_academy?lang=en" target='_blank'><i class="fa-brands fa-tiktok four"></i></a></li>
              <li><a href="https://www.youtube.com/channel/UCIY---kfx3Z99wH82crQepQ" target='_blank'><i class="fa-brands fa-youtube five"></i></a></li>
            </ul>
          </div>

      </div>
    </div>
    </div>
  )
}

export default Footer
