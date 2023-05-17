import React, { useContext } from 'react';
import { useState ,  useRef } from 'react'; 
import './Navbar.css';
import { Link } from 'react-router-dom';
// import {FaUtensils} from 'react-icons/fa';
import {AiOutlineMenu} from 'react-icons/ai';
import {HiOutlineMoon} from 'react-icons/hi';
import {BsSun} from 'react-icons/bs';
import logo from '../../images/freedom.png';
import { darkContext } from '../../context/darkContext';

const Navbar = () => {
    const menuRef = useRef();
    const {dark , changeDark} = useContext(darkContext);
    const menuToggle =() =>{
        menuRef.current.classList.toggle("active_menu");
    }

    
  return (
<>
<header className="navbar">
        <div className="container">
            <div className="navigation">

                <div className="logo">
                    <Link to='/' className='logo-link'>
                <img src={logo} alt="" /> 
                <p>Freedom <span>Academy</span></p>
                        </Link >
                </div>

                {dark ?   <BsSun className='sun'  onClick={changeDark}/> :
                 <HiOutlineMoon className='moon' onClick={changeDark}/>    }


                <div className="nav_menu" onClick={menuToggle}  ref={menuRef}>
                <div className="nav_list_wrapper">

                 <ul className="nav_list">
                  <Link style={{textDecoration : 'none'}} to='/' className="nav_item"> <a href="#">Home</a> </Link>
                  <Link style={{textDecoration : 'none'}} to='/about' className="nav_item"> <a href="#">About Us</a> </Link>
                  <Link style={{textDecoration : 'none'}} to='/courses' className="nav_item"> <a href="#">Our Courses</a> </Link>
                  <Link style={{textDecoration : 'none'}} to='/contact' className="nav_item"> <a href="#">Contact Us</a> </Link>
                     </ul>
                
                 </div>
                </div>
               
           
              

              
               
              <div className="mobile_menu">
                    <span><AiOutlineMenu onClick={menuToggle} className='menu-icon' /></span>
                </div>
            </div>
        </div>
    </header>
   
</>
  )
}

export default Navbar