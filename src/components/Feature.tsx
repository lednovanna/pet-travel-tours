import Slider from "react-slick";
import  { FEATURE } from '../data';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';


const Feature = () => {

        const NextArrow = (props: any) => {
          const {onClick} = props;
          return (
            <div onClick={onClick} className="bg-white text-2xl p-3 inline-block rounded-lg shadow-md
            absolute  right-0 top-1/2 transform -translate-y-1/2 lg:right-4 z-10 ring-1 ring-slate-900/5 hover:bg-amber-600">
            <IoIosArrowForward />
            </div>
          )
        }

        const PrevArrow = (props: any) => {
          const {onClick} = props;
          return (
            <div onClick={onClick} className="bg-white text-2xl p-3 inline-block rounded-lg shadow-md
            absolute  left-0 top-1/2 transform -translate-y-1/2 lg:left-4 z-10 ring-1 ring-slate-900/5 hover:bg-amber-600">
            <IoIosArrowBack />
            </div>
          )
        }

        const settings = {
          arrows: true,
          infinite: true,
          speed: 500,
          autoplay: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          nextArrow: <NextArrow/>,
          prevArrow: <PrevArrow/>,
          responsive: [
            { breakpoint: 1220, settings: { slidesToShow: 3 } },
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1, centerMode: true, centerPadding: "0px" } },
          ],
        };

    return(
        <section className="justify-center w-full m-auto py-20 xl:py-32 bg-white " id="feature">
        <div className="container  m-auto">
            <div className="mx-4">
               <h4 className=" text-2xl text-amber-600">WHAT WE SERVE</h4> 
               <h3 className="max-w-lg font-bold text-[32px]">We Provide Top Destinations </h3>
               <p className="mt-3 text-[18px] text-slate-500 text-justify leading-tight md:leading-[1.3] mb-4">Discover the most captivating places across
                 the globe — handpicked for unforgettable travel experiences. From vibrant cities to serene 
                 landscapes, our top destinations combine culture, beauty, and adventure to inspire your next
                  journey.
               Whether you're dreaming of sipping coffee in Paris, exploring ancient temples in 
               Thailand, or relaxing on the beaches of Bali — your perfect getaway starts here.</p>
            </div>
            {/*slider*/}
            <div className="pt-12">
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
            duration-700 max-w-[500px] max-h-[580px] overflow-hidden"/> 
            </div>
             
            </Link>
            <h4 className="capitalize font-medium text-3xl mx-3 absolute text-white top-6">{title}</h4>
             <p className="font-medium absolute bottom-6 bg-neutral-900 px-4 py-2
              group-hover:bg-amber-600 rounded-r-full group-hover:!pr-8 transition-all duration-300 text-white">{des}</p>
        </div>
    )
}

export default Feature;