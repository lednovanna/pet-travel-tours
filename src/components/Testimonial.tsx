import  { TESTIMONIAL } from '../data';
import Accordion from './Accordion';
import { FaQuoteLeft } from "react-icons/fa6";
import Slider from "react-slick";

const Testimonial = () => {

    const settings = {
        arrows: false,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 860, settings: { slidesToShow: 1, } },
          { breakpoint: 768, settings: { slidesToShow: 1, } },
        ],
      };

    return (
        <section className="container  m-auto py-13 xl:py-18  relative" id="testimonial">
        <div className="flex flex-col gap-8 lg:flex-row  px-4">
            <div className="w-full lg:w-1/2 ">
                <h4 className="mx-4 text-2xl text-amber-600">HAPPY CUSTOMERS</h4>
                <h3 className="mx-4 max-w-lg font-bold text-[32px]">Testimonials</h3>
                <div className=" max-w-[660px]  px-4  ">
                    <Slider {...settings}>
                        {TESTIMONIAL.map((testimonial) => (
                            <div  key={testimonial.name} className=" px-2 pt-8">
                            <TestimonialItem
                           
                            name={testimonial.name}
                            comment={testimonial.comment}
                            URL={testimonial.URL}

                            />
                         </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div className=" w-full lg:w-1/2">
                <Accordion/>
              </div>  
        </div>
        </section>
    )
}

type TestimonialItemProps = {
    comment: string;
    name: string;
    URL: string;
}

const TestimonialItem = ({name, URL, comment}: TestimonialItemProps) => {
    return (
        <div className="w-full h-full bg-white shadow-md p-6 rounded-md flex flex-col ">
            <div className="pb-6">
                <img src={URL} alt="User's Image" className="h-[77px] w-[77px] object-center rounded-full mb-4"></img> 
            <div className="text-[21px] text-amber-600">{name}</div>
            </div>
            <span className="text-3xl "><FaQuoteLeft /></span>
            <p className="max-w-lg pt-3 text-[16px] text-slate-500 text-justify">{comment}</p>
        </div>
    )
}

export default Testimonial;