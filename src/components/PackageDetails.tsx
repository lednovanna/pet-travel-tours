import { PACKAGES } from '../data';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderSecondary from './HeaderSecondary';
import { useCart } from './СartContext';




const PackageDetails = () => {
  const { addToCart } = useCart();
  const { title } = useParams();
  
  const tour = PACKAGES.find(pkg => pkg.title === title);

  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  if (!tour) return <div className="text-center mt-20 text-xl">Tour not found.</div>;

  const basePrice = parseFloat(tour.price);
  const totalPrice = (adults * basePrice) + (children * basePrice * 0.7);

   const handleOrder = () => {
  addToCart({
    title: tour.title,
    price: totalPrice,
    quantity: adults + children
  });
}; 

    return(
        <section className="p-8 my-40 max-w-4xl mx-auto" >
          <HeaderSecondary/>
            <div className="text-justify">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <img src={tour.URL} alt={title} className="w-full h-96 object-cover rounded-lg mb-6" />
            <p className="  mb-4 text-slate-500">
            {tour.des} 
            </p>
              <p className="font-semibold">Location: {tour.location}</p>
              <p className="font-semibold">Price: ${tour.price}</p>
              <p className="font-semibold">Duration: {tour.duration}</p>
            </div>
            
              <div className="bg-white my-8 shadow-md rounded p-6  space-y-1 max-w-md">
        <div className="flex justify-between items-center">
          <label htmlFor="adults" className=" font-medium">Adults:</label>
          <input
            type="number"
            id="adults"
            min={1}
            value={adults}
            onChange={(e) => setAdults(Number(e.target.value))}
            className="border border-gray-300 rounded px-3 py-1 w-20 text-right"
          />
        </div>

        <div className="flex justify-between items-center">
          <label htmlFor="children" className="text-gray-700 font-medium">Children (0–12 years):</label>
          <input
            type="number"
            id="children"
            min={0}
            value={children}
            onChange={(e) => setChildren(Number(e.target.value))}
            className="border border-gray-300 rounded px-2 ml-4 py-1 w-20 text-right"
          />
        </div>

        <div className="pt-2 text-lg font-semibold text-gray-800">
          Total Price: <span className="text-amber-600">${totalPrice.toFixed(2)}</span>
        </div>
         </div>
            <div className="mt-4">
                    <button
                        
                        onClick={handleOrder}
                        className=" text-center px-8 py-2 bg-amber-600 hover:bg-amber-500 my-4 text-white font-semibold  rounded-lg transition-all duration-300"
                    >
                        Order
                    </button>
                    
                </div>
                
        </section>
    )
}

export default PackageDetails;