import React, { useEffect } from 'react';
import './Menu.css';
import konor from '../../images/konor.jfif';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Menu = () => {

  useEffect(() =>{
    AOS.init({duration : 2000})
  })
  return (
    <div className='menu'>
      <div className="container">
      <div className="menu-wrapper">
      <div className="menu-content" data-aos = 'fade-up'>
            <p>+ 8000</p>
            <h3>Students</h3>
            <i class="fa-solid fa-graduation-cap"></i>
        </div>
        <div className="menu-content" data-aos = 'fade-down'>
            <p>+ 20 </p>
            <h3>Rooms</h3>
            <i class="fa-solid fa-restroom"></i>
        </div>
        <div className="menu-content" data-aos = 'fade-left'>
            <p>+ 40 </p>
            <h3>Instructor</h3>
            <i class="fa-solid fa-person-chalkboard"></i>
        </div>
        <div className="menu-content" data-aos = 'fade-right'>
            <p>+ 12</p>
            <h3>Courses</h3>
            <i class="fa-solid fa-book-open"></i>
        </div>
        <div className="menu-content" data-aos = 'fade-down'>
            <p>+ 15 </p>
            <h3>Services</h3>
            <i class="fa-brands fa-usps"></i>
        </div>
        <div className="menu-content" data-aos = 'fade-right'>
            <p>+ 99%</p>
            <h3>Satisfaction</h3>
            <i class="fa fa-face-smile" ></i>

        </div>
      </div>
      </div>
    </div>
  )
}

export default Menu