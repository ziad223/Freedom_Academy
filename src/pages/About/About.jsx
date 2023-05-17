import React, { useEffect } from 'react';
import './About.css';
import img1 from '../../images/mobile1.png';
import img2 from '../../images/about-2.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Menu from '../../components/Menu/Menu';

const About = () => {

  useEffect(() =>{
    AOS.init({duration : 1000})
  })
  return (
    <div className='about'>
       <h2 data-aos = 'fade-down'>About Us</h2>
   <div className="container">
    <Menu/>
      <div className="about-content">
      <div className="about-img" data-aos = 'fade-right' >
        <img src={img1} alt="" />
      </div>

     <div className="about-info" data-aos = 'fade-left' >
     <h3>Welcome To Freedom Academy</h3>
        <p>
        Freedom Academy is a leading and distinguished scientific institution in the field of training and providing training courses, online and offline courses, and distance training. We offer training courses in diffrent fields through the most skilled and best trainers.
        </p>
     </div>
        
      </div>

      <div className="about-content two">
     <div className="about-info" data-aos = 'fade-right' >
     <h3>Welcome To Freedom Academy</h3>
        <p>
       Freedom Academy It has the most qualified lecturers in all courses, and they have more than ten years of experience in their fields, and they have the skill to deal with all age groups, including children, students, graduates, and the elderly.
        </p>
     </div>
        <div className="about-img i">
        <img src={img2} alt=""  data-aos = 'fade-left' />
      </div>
      </div>

      
   </div>
    </div>
  )
}

export default About