
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Feature from './components/Feature';
import "slick-carousel/slick/slick.css";
import './App.css';

function App() {
  

  return (
    <div className=''>
    <Header/>
      <main className="">
       <Hero/>
       <Feature/>
    </main>
    <Footer />
    </div>
  )
}

export default App
