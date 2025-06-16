import HeaderSecondary from "./HeaderSecondary";
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';
import { MdOutlinePeopleAlt } from "react-icons/md";

const CartPage = () => {
    const navigate = useNavigate();
    const { items, removeFromCart } = useCart();
    const subtotal = items.reduce(
      (sum, item) => sum + item.basePrice * item.adults +
                           item.basePrice * 0.7 * item.children,
                            0);

    return (
      <section className="p-8 my-40 max-w-4xl mx-auto">
      
        <HeaderSecondary/>
      <div className="">
         <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      {items.length === 0 ? (
        <p className="text-gray-600 text-xl">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white rounded-lg shadow p-4"
              >

                <img
                  src={item.URL}
                  alt={item.title}
                  className="w-full md:w-48 h-32 object-cover rounded-lg"
                />
                 <div className="flex-1 md:ml-6 w-full">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <div className="text-gray-600 mt-1 flex items-center gap-1">
                    <MdOutlinePeopleAlt /> 
                    <span>
                    {item.adults} adult{item.adults !== 1 ? 's' : ''}, {item.children} child{item.children !== 1 ? 'ren' : ''}
                     </span>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.title)}
                    className="mt-2 text-sm text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </div>

                 <div className="text-xl font-semibold text-amber-600">
                  ${( item.basePrice * item.adults +
                      item.basePrice * 0.7 * item.children
                    ).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
           <div className="mt-10 flex justify-end">
            <div className="text-right space-y-3">
              <div className="text-xl font-semibold">
                Subtotal ({items.length} tour{items.length !== 1 ? 's' : ''}):{' '}
                <span className="text-amber-600">${subtotal.toFixed(2)}</span>
              </div>
              <button className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-500 transition">
                Checkout
              </button>
              
            </div>
            
          </div>
          <div className="flex justify-end">
          <button
                type="button"
                  onClick={() => navigate(-1)}
                  className="text-blue-600 self-end hover:underline text-md my-2 cursor-pointer"
      >
        ← Back
      </button>
      </div>
        </>
      )}
      
      </div>
      </section>
       
     );
};

export default CartPage;