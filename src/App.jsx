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
     
     <div className="bg-navyBlack text-softGray text-lg font-mono"> 

     
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
