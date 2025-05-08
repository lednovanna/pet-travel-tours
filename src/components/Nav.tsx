import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const Nav = () => {
  const scrollLinkClass =
    'cursor-pointer px-4 py-2 transition-colors duration-200 hover:text-blue-600';
  const routerLinkClass =
    'cursor-pointer px-4 py-2 transition-colors duration-200 hover:text-blue-600';
  const activeClass = 'text-amber-500 font-bold';

  return (
    <nav>
      <div className="flex gap-8 justify-center py-2 text-gray-700 font-medium text-lg">
        <ScrollLink
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          activeClass={activeClass}
          className={scrollLinkClass}
        >
          Home
        </ScrollLink>
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          offset={-70}
          activeClass={activeClass}
          className={scrollLinkClass}
        >
          About
        </ScrollLink>

        {/* Этот пункт ведёт на /packages */}
        <RouterLink
          to="/"
          className={routerLinkClass}
        >
          Packages
        </RouterLink>
       
      </div>
    </nav>
  );
};

export default Nav;