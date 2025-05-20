import youtube from '../assets/icons/youtube.png';
import facebook from '../assets/icons/facebook.png';
import instagram from '../assets/icons/instagram.png';
import { FOOTER_CONTACT_INFO, FOOTER_LINKS } from '../data';
import { Link } from 'react-router-dom';
import React from 'react';

const Footer = () => {
    return (
        <footer className=" m-auto pb-14 pt-20 w-full w-100% flex bg-gray-700 justify-center">
        <div className="container mx-4 px-4 flex flex-col rounded-xl">
          <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row lg:flex-row p-8 bg-gray-200 rounded-lg">
            <div className="flex flex-wrap gap-4 sm:justify-between md:flex-1 font-semibold">
              {FOOTER_LINKS.map((col) => (
              <FooterColumn 
              key={col.title}
              title={col.title}
              >
                <ul className="flex flex-col gap-3 mt font-normal text-[16px] text-gray-500">
                  {col.links.map((link) => (
                    <Link to="#" key={link} >
                      {link}
                    </Link>
                  ))}
                </ul>
                </FooterColumn>
              ))}
              <div className="flex flex-col gap-3 ">
                <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link to={"#"} key={link.label} className="flex gap-3 md:flex-col lg:flex-row">
                    <p className=" text-[16px] font-normal text-gray-500">{link.label}:</p>
                    <p className="text-[16px] font-semibold text-gray-500">{link.value}</p>
                  </Link>
                ))}
                </FooterColumn>
              </div>
              <div className="flex gap-3">
                <a href="https://www.youtube.com/watch?v=Ury6uN4ShfM" className="hover:text-blue-700">
              <img src={youtube} height={25} width={30} alt="youtube icon" />
            </a>
            <a href="#" className="hover:text-blue-700">
              <img src={facebook} height={25} width={30} alt="facebook icon" />
            </a>
            <a href="#" className="hover:text-blue-700">
              <img src={instagram} height={25} width={30} alt="instagram icon" />
            </a>
              </div>
            </div>    
        </div>
        <div className="flex justify-end lg:justify-end md:justify-end sm:justify-center">
        <p className="font-normal text-gray-400 text-[16px] mt-8 px-8 items-end">
          <span>2025</span><span className="ml-3">All rights reserved</span>
          </p> 
          </div>
        </div>
        </footer>
    );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({title, children}: FooterColumnProps) => {
  return ( 
    <div >
    <div className="mb-3">
      <h4 className="whitespace-nowrap">{title}</h4>
      </div>
      <div className="flex flex-col gap-3 ">
        {children}
      </div>
      
    </div>
  )
}

export default Footer;