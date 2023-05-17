import React, {useEffect} from 'react';
import './Courses.css';
import english from '../../images/english.jfif';
import germany from '../../images/german.jfif';
import frech from '../../images/french.jfif';
import frontend from '../../images/frontend.jfif';
import marketing from '../../images/marketing.jfif';
import graphic from '../../images/graphic.jfif';
import icdl from '../../images/icdl.jfif';
import air from '../../images/air.jfif';
import paython from '../../images/paython.jfif';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Courses = () => {

    useEffect(() =>{
        AOS.init({duration : 2000})
      }, [])

  return (
    <div className='courses'>
     <div className="container">
     <h2 data-aos = 'fade-up'>Our Courses</h2>
     <div className="all-courses">

        <div className="course" data-aos = 'fade-right'>
            <p>English Course</p>
            <img src={english} alt="" />
            <button className='btn-course'>Book Now</button>
        </div>
        <div className="course">
            <p data-aos = 'fade-down'>Germany Course</p>
            <img src={germany} alt="" />
            <button className='btn-course'>Book Now</button>
        </div>
        <div className="course" data-aos = 'fade-left'>
            <p>French Course</p>
            <img src={frech} alt="" />
            <button className='btn-course'>Book Now</button>
        </div>
        <div className="course" data-aos = 'fade-right'>
            <p>Frontend Course</p>
            <img src={frontend} alt="" />
            <button className='btn-course'>Book Now</button>
        </div>
        <div className="course" data-aos = 'fade-up'>
            <p>Python Course</p>
            <img src={paython} alt="" />
            <button className='btn-course'>Book Now</button>
        </div>
        <div className="course" data-aos = 'fade-left'>
            <p>Air hospitality</p>
            <img src={air} alt="" />
            <button className='btn-course'>Book Now</button>
        </div>
        <div className="course" data-aos = 'fade-right'>
            <p>ICDL Course</p>
            <img src={icdl} alt="" />
            <button className='btn-course'>Book Now</button>
        </div>
        <div className="course" data-aos = 'fade-down'>
            <p>Marketing Course</p>
            <img src={marketing} alt="" />
            <button className='btn-course'>Book Now</button>
        </div>
        <div className="course" data-aos = 'fade-left'>
            <p>Graphic Course</p>
            <img src={graphic} alt="" />
            <button className='btn-course'>Book Now</button>
        </div>

        
     </div>
     </div>
    </div>
  )
}

export default Courses