import youtube from '../assets/icons/youtube.png';
import facebook from '../assets/icons/facebook.png';

const Footer = () => {
    return (
        <footer className="">
        <div className=" p-[5px]">
             <a href="https://www.youtube.com/watch?v=Ury6uN4ShfM" className="hover:text-blue-700">
              <img src={youtube} height={25} width={30} alt="youtube icon" />
            </a>
            <a href="#" className="hover:text-blue-700">
              <img src={facebook} height={25} width={30} alt="facebook icon" />
            </a>
            
            Footer
        </div>
        </footer>
    )
}

export default Footer;