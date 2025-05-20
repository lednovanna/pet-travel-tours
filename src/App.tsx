import { Routes, Route  } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Feature from './components/Feature';
import Packages from './components/Packages';
import Testimonial from './components/Testimonial';
import PackageDetails from './components/PackageDetails';
import GetApp from './components/GetApp';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';



function App() {
   
  
   

  return (
    <div className=''>
    <Header/>
      <main className="">
        <Routes>
        <Route path="/" element={
            <>
              <Hero />
              <Feature />
              <Packages />
              <Testimonial />
              <GetApp />
            </>
          } />
          
          <Route path="/packages/:title" element={<PackageDetails />} />
          
        </Routes>
         
         
         
    </main>
    <Footer />
    </div>

  )
}

export default App;
