import Slider from "react-slick";
import  { FEATURE } from '../data';

import { Link } from 'react-router-dom';


const Feature = () => {

    
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } },
          ],
        };

    return(
        <section className="justify-center w-full m-auto py-20 xl:py-32 bg-white " id="feature">
        <div className="container w-[90%] m-auto">
            <div className="mx-4">
               <h4 className=" text-2xl text-amber-600">What we serve</h4> 
               <h3 className="max-w-lg font-bold text-[32px]">We Provide Top Destinations </h3>
               <p className="mt-3 leading-tight md:leading-[1.3] mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Impedit laborum distinctio dolorum quod cumque quos culpa
                 ullam accusamus quis, repudiandae tempora sunt praesentium. 
                 Error quas, minus voluptates similique sed quasi.</p>
            </div>
            {/*slider*/}
            <div>
                <Slider {...settings}>
                  {FEATURE.map((feature) => (
                    <FeatureItem 
                    key={feature.URL}
                    URL={feature.URL}
                    title={feature.title}
                    des={feature.des}
                    />
                  ))}
                </Slider>
            </div>
        </div>
        </section>
    )
}

type FeatureItemProps = {
    URL: string;
    title:string;
    des: string;
}

const FeatureItem = ({ title, URL, des }: FeatureItemProps) => {
    return(
        <div className="mx-4 overflow-hidden group">
            <Link to="/" className="overflow-hidden relative">
            <div>
               <img alt="Image" src={URL} height={600} width={510} className="hover:scale-105 transition-all 
            duration-700 overflow-hidden"/> 
            </div>
             
            </Link>
            <h4 className="capitalize font-medium text-3xl mx-3 absolute text-white top-6">{title}</h4>
             <p className="font-medium absolute bottom-6 bg-neutral-900 px-4 py-2
              group-hover:bg-amber-600 rounded-r-full group-hover:!pr-8 transition-all duration-300 text-white">{des}</p>
        </div>
    )
}

export default Feature;