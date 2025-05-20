import { Link } from 'react-router-dom';
import  { PACKAGES } from '../data';
import { MdLocationPin } from "react-icons/md";
import { IoIosStar } from "react-icons/io";
import { RiTimeLine } from "react-icons/ri";

const Packages = () => {
    return (
        <section className="container py-16 xl:py-28  bg-slate-50 m-auto" id="offers">
        <div className="mx-4 ">
            <h4 className="text-2xl text-amber-600">LOOK AT THESE OFFERS</h4>
            <h3 className="max-w-lg font-bold text-[32px]"> We Provide Top Destinations</h3>
            <p className=" mt-3 text-[18px] text-slate-500 text-justify leading-tight md:leading-[1.3] mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                 Impedit nihil non dicta adipisci consectetur eos necessitatibus, 
                 unde tenetur harum et odit sunt temporibus cupiditate officia numquam ab 
                 repellendus illum vel.</p>
        </div>
        <div className="grid gap-8 grid-cols-1  text-slate-500 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 py-12 mx-4">
            {PACKAGES.map((elem) => (
                <PackageItem
                key={elem.URL}
                URL={elem.URL}
                price={elem.price}
                title={elem.title}
                location={elem.location}
                desShort={elem.desShort}
                duration={elem.duration}
                />
            ))}
        </div>
        </section>
    );
};

type PackageItemProps = {
    URL: string;
    title: string;
    location: string;
    price: string;
    desShort: string;
    duration: string;
}

const PackageItem = ({URL, title, location, price, desShort, duration}: PackageItemProps) => {
    return(
     <div className=" flex flex-col overflow-hidden rounded-tl-xl rounded-tr-xl shadow  bg-white h-full  group">
        <Link to="/" className="overflow-hidden relative">
        <img className="bottom-4 overflow-hidden w-[640px] h-[366px] object-cover" src={URL}  alt="Image"></img>
        <span className=" text-[20px] font-bold text-white bg-neutral-900 rounded-full group-hover:bg-amber-600 absolute bottom-7 right-1/2
        translate-x-1/2 translate-y-1/2 px-8 py-2">$ {price}</span>
        </Link>
        <div className="p-4 bg-white  flex flex-col flex-grow">
            <div className="capitalize text-[20px] font-medium">
                <div className="text-gray-700">{title}</div>
                <div className="flex items-center gap-x-2 my-1"><MdLocationPin className="text-gray-400"/><span className="text-[18px] font-normal">{location}</span></div>
            </div>
            <hr className="mt-3 text-slate-200"/>
            <p className="my-3 text-[16px] text-justify">{desShort}</p>
            <hr className="mt-3 text-slate-200"/>
            <div className="flex my-3 justify-between">
                <div className="flex justify-center items-center gap-1.5">
                    <div className="flex text-amber-300">
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                    </div>
                    <span>(22)</span>
                </div>
                <div className="flex gap-1.5 items-center">
                <RiTimeLine />
                    <span>{duration}</span>
                </div>

            </div>
        </div>
        <div className="mt-auto px-4 pb-4">
                    <Link
                        to={`/packages/${encodeURIComponent(title)}`}
                        className="inline-block w-full text-center bg-amber-600 hover:bg-amber-700 my-4 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
                    >
                        View Details
                    </Link>
                </div>
     </div>
    )
}

export default Packages;