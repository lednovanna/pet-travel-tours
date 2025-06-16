import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Feature from './components/Feature';
import Packages from './components/Packages';
import Testimonial from './components/Testimonial';
import PackageDetails from './components/PackageDetails';
import SearchPage from './components/SearchPage';
import GetApp from './components/GetApp';
import Register from './components/Register';
import Login from './components/Login';
import SearchResults from './components/SearchResults';
import CartPage from './components/CartPage';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';

function MainLayout() {
  return(
    <>
    
     <Header/>
     <main>
              <Hero />
              <Feature />
              <Packages />
              <Testimonial />
              <GetApp />
     </main>
      <Footer />
      
    </>
  );
}

function App() { 

  return (
        
        <Routes>
           <Route path="/" element={<MainLayout />} />
           <Route path="/searchResults" element={<SearchResults/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/packages/:title" element={<PackageDetails />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/packageDetails" element={<PackageDetails/>}/>
        </Routes>
         
         

  )
}

export default App;
