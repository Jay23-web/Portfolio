import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import PortFolio from './components/PortFolio';
import './index.css'
import Contact from './components/Contact';
import Experiance from './components/Experiance';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';

  
  export const App = () => {
    return (
      <>
     {/* <div className='bg-blue-700'> */}
     <div  className="bg-[#19376d] text-lg text-white font-mono">
     {/* <div  className="bg-[#1f2022]"> */}
     
      <Navbar/>
      <Home/>
      <About/>
      <PortFolio/>  
      <Experiance/>
      <Contact/>
      <Footer/>
      </div>  
      <Toaster/>  
        </>
    )
  }
  



export default App;
