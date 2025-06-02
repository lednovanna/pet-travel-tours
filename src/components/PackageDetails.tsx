import { PACKAGES } from '../data';
import { useParams, Link } from 'react-router-dom';
import HeaderSecondary from './HeaderSecondary';




const PackageDetails = () => {

  const { title } = useParams();

  const selectedPackage = PACKAGES.find(
    (pkg) => pkg.title.toLowerCase() === decodeURIComponent(title || '').toLowerCase()
  );

  if (!selectedPackage) {
    return <div className="p-8 text-center text-xl">Package not found.</div>;
  }


    return(
        <section className="p-8 my-40 max-w-4xl mx-auto" >
          <HeaderSecondary/>
            <div className="text-justify">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <img src={selectedPackage.URL} alt={title} className="w-full h-96 object-cover rounded-lg mb-6" />
            <p className="  mb-4 text-slate-500">
            {selectedPackage.des} 
            </p>
      <p className="font-semibold">Location: {selectedPackage.location}</p>
      <p className="font-semibold">Price: ${selectedPackage.price}</p>
      <p className="font-semibold">Duration: {selectedPackage.duration}</p>
            </div>
            <div className="mt-4">
                    <Link
                        to="/"
                        className=" text-center px-8 py-2 bg-amber-600 hover:bg-amber-700 my-4 text-white font-semibold  rounded-lg transition-all duration-300"
                    >
                        Order
                    </Link>
                    <Link to="/" className="text-blue-600 underline mt-4 block">← Back </Link>
                </div>
                
        </section>
    )
}

export default PackageDetails;