import React from 'react';
import About from '../About/About';
import ChooseUs from '../../components/chooseUs/ChooseUs';
import Courses from '../../components/courses/Courses';
import Contact from '../Contact/Contact';


const Home = () => {
  return (
    <div>
      <About/>
      <Courses/>
      <ChooseUs/>
      <Contact/>
    </div>
  )
}

export default Home