import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Feature from './components/Feature';
import Packages from './components/Packages';
import Testimonial from './components/Testimonial';
import PackageDetails from './components/PackageDetails';
import "slick-carousel/slick/slick.css";
import './App.css';

function App() {
  

  return (
    <div className=''>
    <Header/>
      <main className="">
        <Routes>
          <Route path="/" element={
            <>
            <Hero/>
            <Feature/>
           <Packages/>
           <Testimonial/>
            </>
          }/>
            
           <Route path="/packages/:title" element={<PackageDetails />} />
       </Routes>
    </main>
    <Footer />
     
    </div>
   
  )
}

export default App;
