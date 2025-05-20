import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';

const ScrollToSection = ({ sectionId }: { sectionId: string }) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/'); 

    
    const timer = setTimeout(() => {
      scroller.scrollTo(sectionId, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -70,
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [sectionId, navigate]);

  return null;
};

export default ScrollToSection;