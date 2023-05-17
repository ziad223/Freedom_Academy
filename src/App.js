import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from '../src/pages/Home/Home';
import About from '../src/pages/About/About';
import Contact from '../src/pages/Contact/Contact';
import Footer from './components/footer/Footer';
import { useContext } from 'react';
import { darkContext } from './context/darkContext';
import Header from './components/Header/Header';
import Courses from './components/courses/Courses';

function App() {
    const {dark } = useContext(darkContext);

  return (
    <div className={dark ? 'App dark' : 'App'}>
    <BrowserRouter>
    <Navbar/>
    <Header/>
    <Routes>
      <Route path='/' element = {<Home/>} />
      <Route path='/about' element = {<About/>} />
      <Route path='/contact' element = {<Contact/>} />
      <Route path='/courses' element = {<Courses/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
