import { Link } from 'react-router-dom';
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import appImg from "../assets/img/app.png";

const GetApp = () => {
    return(
        <section className=" m-auto w-full py-12 " id="downloads">
        <div className="container px-10 relative flex-col w-full flex items-center justify-between gap-32 lg:flex-row sm:gap-12 sm:py-18  xl-max-h-[600px]      
                overflow-hidden m-auto 2xl:rounded-5xl">
            <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-4
            xl:max-w-[555px]">
                <h2 className=" font-bold text-[32px]">Get Our App!</h2>
                <h4 className="font-medium text-amber-600 ">AVAILABLE FOR IOS AND ANDROID</h4>
                <p className="mt-3 text-[18px] text-slate-500 text-justify">Plan your next adventure anytime, anywhere. With our mobile app,
                    you can browse destinations, book trips, and manage your travel 
                    details — all from your phone. Download now and explore the world 
                    with ease!</p>
                    <div className="flex w-full flex-col gap-3 whitespace-nowrap mt-5 xl:flex-row">
                    <Link to="#" className="w-full inline-flex items-center justify-center gap-3 xl:w-auto bg-black text-white px-5 py-3 rounded-xl shadow-md hover:bg-neutral-500 transition-all">
                    <FaApple className="text-[26px]  "/>
                <div className="text-center ">
                <p className="text-[12px] sm:text-[12px] leading-none">Download on the</p>
                <p className="text-m font-semibold leading-tight  sm:text-2xl">App Store</p>
                </div>
                </Link>

                    <Link to="#" className=" w-full inline-flex items-center justify-center gap-3 xl:w-auto bg-amber-600 text-white border border-amber-600 px-5 py-3 rounded-xl shadow-md
                        hover:bg-amber-500 transition-all">
                    <FaGooglePlay  className="text-[26px]  "/>
                    <div className="text-center">
                    <p className="text-[12px] leading-none sm:text-[12px]">Download on the</p>
                    <p className="text-m font-semibold leading-tight sm:text-2xl">Play Store</p>
                    </div>
                    </Link>
                    </div>
            </div>
            <div className="flex flex-1 items-center justify-end">
                <img src={appImg} alt=" Mobile App image" className="w-full object-contain max-w-[650px] h-auto  "/>
            </div>
        </div>
        </section>
    )
}

export default GetApp;