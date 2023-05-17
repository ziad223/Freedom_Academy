import React, { useEffect } from 'react';
import './chooseUs.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img3 from '../../images/about-3.png'

const ChooseUs = () => {

  useEffect(() =>{
    AOS.init({duration : 2000})
  }, [])
  return (
    <div className='chooseUs'>
    <div className="container">
        <div className="choose-content">
            <img src={img3} alt="" data-aos = 'fade-right'  />
            <div className="choose-wrapper">
                 <h2 data-aos = 'fade-up'>Why Choose Us ?</h2>
                 <div className="chooses">
               
                <div className="choose-a">
                <div className="choose">
                <i class="fa-solid fa-earth-europe"></i>
                 <p data-aos = 'fade-right'>Electronic services</p>
                 </div>
                    <div className="choose">
                    <i class="fa-solid fa-globe"></i>
                    <p  data-aos = 'fade-right'>Online && Offline</p>
                    </div>
                </div>

                  <div className="choose-a">
                  <div className="choose">
                  <i class="fa-solid fa-wifi"></i>
                      <p data-aos = 'fade-left'>Free Wifi All Time</p>
                    </div>

                    <div className="choose">
                    <i class="fa-solid fa-clock"></i>
                    <p data-aos = 'fade-right'>Continuous Tracking</p>
                    </div>
                  </div>
                 </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ChooseUs