import logo from '../assets/icons/logo.jpg';
import { Menu, X } from 'lucide-react';
import { Link as RouterLink } from "react-router-dom";
import Button from './Button';

import { useState, useEffect } from 'react';
import { IoCallOutline } from "react-icons/io5";


const HeaderSecondary = () => {
    const [active, setActive] = useState(false);
    const [menuOpened, setMenuOpened] = useState(false);
    const toggleMenu = () => setMenuOpened(!menuOpened);
  
    useEffect(() => {
      const handleScroll = () => {
        setActive(window.scrollY > 40);
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <header
        className={`${
          active ? 'bg-amber-400 shadow-xl' : 'bg-amber-300'
        } fixed top-0 left-0 right-0 w-full z-50 transition-all duration-200`}
      >
        
        <div className="container mx-auto flex justify-between items-center px-4 ">
          
          <RouterLink
            to="/"
            className="flexCenter py-3"
            
          
          >
            <img src={logo} alt="logo" className="w-[110px] h-[100px] object-contain" />
          </RouterLink>
  
          
  
          <div className="hidden md:flex  items-center gap-3 my-2">
          <RouterLink to="/" className=" font-bold mr-17 hover:text-blue-800 transition-colors">
              Home
          </RouterLink>
          <RouterLink to="/login">
              <Button
                type="button"
                title="Sign in"
                variant=""
              />
            </RouterLink>
            <span className="mx-1 text-gray-500">/</span>
            <RouterLink to="/register">
              <Button
                type="button"
                title="Sign up"
                variant=""
              />
            </RouterLink>
            <a
              href="tel:+380671234567"
              className="hidden lg:flex hover:text-blue-700 ml-4  gap-1 text-l font-medium transition-colors duration-200 "aria-label="Phone number"
            >
              <IoCallOutline size={22}  title="phone icon" /> 
              +380 67 123 45 67
            </a>  
          </div>
  
          {/* Burger icon */}
          <button
            className="md:hidden text-gray-700"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpened ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
  
        {/* Mobile menu */}
        {menuOpened && (
          <div className="md:hidden fixed top-0 left-0 w-full h-screen z-40 bg-white/40 backdrop-blur-md flex flex-col items-center justify-center gap-6 text-xl font-semibold text-gray-800">
    {/* Кнопка закрытия */}
    <button
      onClick={toggleMenu}
      aria-label="Close menu"
      className="absolute top-6 right-6 text-gray-700 hover:text-blue-600 transition-colors"
    >
      <X size={36} />
      </button>
     
            <div className="text-lg font-medium">
  <RouterLink to="/register" className="hover:text-blue-700">Sign up</RouterLink>
  <span className="mx-1 text-gray-500">/</span>
  <RouterLink to="/login" className="hover:text-blue-700">Sign in</RouterLink>
</div>
            <a
              href="tel:+380671234567"
              className="flex items-center gap-2 hover:text-blue-700"
            >
             <IoCallOutline size={22}  title="phone icon" /> 
              +380 67 123 45 67
            </a>
            
          </div>
        )}
        <div>
           
        </div>
      </header>
    );
  };

export default HeaderSecondary;