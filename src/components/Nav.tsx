
import { Link  } from 'react-scroll';

const Nav = () => {
  const scrollLinkClass =
    'cursor-pointer px-4 py-2 transition-colors duration-200 hover:text-blue-600';
  
  const activeClass = 'text-white bg-amber-500 px-4 py-2 rounded-full shadow-md transition-all duration-300';

  return (
    <nav>
      <div className="flex gap-8 justify-center py-2 text-gray-700 font-medium text-lg">
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          activeClass={activeClass}
          className={scrollLinkClass}
        >
          Home
        </Link>
        <Link
          to="destinations"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          activeClass={activeClass}
          className={scrollLinkClass}
        >
          Destinations
        </Link>
        <Link
          to="offers"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          activeClass={activeClass}
          className={scrollLinkClass}
        >
          Offers
        </Link>
        <Link
          to="testimonial"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          activeClass={activeClass}
          className={scrollLinkClass}
        >
          Testimonials
        </Link>
        <Link
          to="downloads"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          activeClass={activeClass}
          className={scrollLinkClass}
        >
          Get App
        </Link>
      </div> 
    </nav>
  );
};

export default Nav;