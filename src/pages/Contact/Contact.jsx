import React, { useEffect } from 'react';
import './Contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {

  useEffect(() =>{
 AOS.init({duration : 2000})
  }, []);

  return (
    <div className='contact' data-aos = 'fade-right'>
    <div className="container">
     <h2 data-aos = 'fade-down'>Contact Us</h2>
     <div class="icons-container">

<div class="icons" data-aos = 'fade-right'>
   <i class="fas fa-clock"></i>
   <h3>opening hours :</h3>
   <p >10:00 am to 06:00 pm</p>
</div>

<div class="icons" data-aos = 'fade-down'>
   <i class="fas fa-phone"></i>
   <h3>phone :</h3>
   <p  >01018147820</p>
</div>

<div class="icons" data-aos = 'fade-up'>
   <i class="fas fa-envelope"></i>
   <h3> email : </h3>
   <p  >freedomofchoicedata@gmail.com</p>
</div>

<div class="icons" data-aos = 'fade-left'>
   <i class="fas fa-map"></i>
   <h3>address :</h3>
   <p > الزقازيق - فلل الجامعة امام مطعم هوت برجر</p>
</div>
</div>

    

    </div>
    </div>
  )
}

export default Contact