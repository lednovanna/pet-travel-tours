import videoHero from '../assets/video/videoHero.mp4';
import { MdLocationPin } from "react-icons/md";
import { PACKAGES } from '../data';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";




const Hero = () => {

  const [city, setCity] = useState('');
  const navigate = useNavigate();
  const [maxPrice, setMaxPrice] = useState(10000);

  const handleSearch = () => {
    const results = PACKAGES.filter((tour) =>{ 
     const matchesCity = tour.title.toLowerCase().includes(city.toLowerCase()) ||
                         tour.location.toLowerCase().includes(city.toLowerCase());

    const matchesPrice = Number(tour.price) <= maxPrice;
     return matchesCity && matchesPrice;
    });
     
     if (results.length === 0) {
    navigate("/search", { state: { results: [], noResults: true } });
  } else {
    navigate("/search", { state: { results } });
  }
    
    
    
  };

    return (
        <section className=" relative justify-center h-screen w-full tracking-wider overflow-hidden" id="home">
        {/* Фоновое видео */}
        <div className="absolute w-full h-full top-0 left-0">
          <video
            src={videoHero}
            muted
            autoPlay
            loop
            className="absolute w-full h-full top-0 left-0 object-cover z-0"
          ></video>
        </div>
  
        {/* Текст и форма */}
        <div className=" relative w-full text-white pt-12 flex flex-col gap-y-3 max-w-[740px] lg:items-start lg:ml-16 items-center justify-center h-full px-4 sm:px-8 mx-auto z-10 lg:pt-64">
          <div className=" bg-black/40 p-5 rounded-lg">
            <div className="text-xl font-bold sm:text-3xl lg:text-4xl">
              DISCOVER THE WORLD WITHOUT LIMITS
            </div>
            <h2 className="h2 text-xl sm:text-xl lg:text-2xl">
              Experience the World Like Never Before
            </h2>
          </div>
  
          {/* Форма поиска */}
          <div className="">
            <div className=" ">
              
              
              <div className=" flex-col md:flex-row gap-6 p-6 bg-white rounded-md">
                {/* Destination */}
                <div className="flex-1">
                  <label htmlFor="city" className="block text-gray-500 mb-2">
                    Search your destination:
                  </label>
                  <div className="flex  border-gray-300 rounded items-center border  px-3 py-2">
                    <input
                      type="text"
                      placeholder="Enter city..."
                      className="bg-transparent outline-none  w-full text-gray-700"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      
                    />
                    <MdLocationPin className="text-xl text-black ml-2" />
                  </div>
                </div>
  
                {/* Date */}
                <div className="flex-1">
                  <label htmlFor="date" className="block text-gray-500 mb-2">
                    Select your date:
                  </label>
                  <input
                    type="date"
                    className="bg-transparent border border-gray-300 rounded px-3 py-2 w-full text-gray-700"
                  />
                </div>
  
                {/* Price */}
                <div className="flex-1">
                  <div className="flex justify-between  items-center mb-2">
                    <label htmlFor="price" className="text-gray-500 mt-3">
                      Max price:
                    </label>
                    <span className="text-gray-950 font-semibold mt-2 items-center text-s">$10 000</span>
                  </div>
                  
                  <input
                    type="range"
                    max="10000"
                    min="300"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full"
                  />
                  <span className="text-gray-950 font-semibold mt-2 items-center text-s">
                  ${maxPrice}
                  </span>
                </div>
              </div>

              <div className=" text-center text-white py-2 px-4 mt-5 hover:bg-amber-400 bg-amber-500
               rounded-md cursor-pointer"
               onClick={handleSearch}
               >
                Search for your trip
              </div>

            </div>
            
          </div>
        </div>
        </section>
    )
}

export default Hero;