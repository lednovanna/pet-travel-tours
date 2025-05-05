import { Link } from 'react-scroll';


const Nav = () => {
 const linkClass =
        'cursor-pointer px-4 py-2 transition-colors duration-200 hover:text-blue-600';
    
      const activeClass = 'text-amber-500 font-bold';

    return (
       
       <nav className="">
         <div className="flex gap-8 justify-center py-2 text-gray-700 font-medium text-lg cursor-pointer" >
        <Link to= "home"
        spy={true}
         smooth={true}
         duration={500} 
         offset={-70}
         activeClass={activeClass} 
         className={linkClass}>
            Home
            </Link>
        <Link to= "about"
         smooth={true} 
         duration={500}
         offset={-70}
         activeClass={activeClass} 
         className={linkClass}>
            About
        </Link>
        <Link to= "tours"
        smooth={true}
         duration={500} 
         offset={-70}
         activeClass={activeClass} 
         className={linkClass}>
            Tours</Link>
            </div>
       </nav>
       
    )
}

export default Nav;