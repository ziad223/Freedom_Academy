import React, { useContext } from 'react';
import './Header.css';
import background from '../../images/background.avif';
import backgroundDark from '../../images/backgroundDark.jpg';
import Typewriter from 'typewriter-effect';
import { darkContext } from '../../context/darkContext';

const Header = () => {
  const {dark} = useContext(darkContext);
  return (
    <div className='header'>
      {dark ? 
      <img src={backgroundDark} alt="" /> 
      : <img src={background} alt="" />

    }
      <Typewriter
      className = 'typeWriter'
  options={{
    strings: ['Welcome Everyone in Freedom Academy'
    , 'Online && Offline Education'],
    autoStart: true,
    loop: true,
    
  }}
/>
    </div>
  )
}

export default Header