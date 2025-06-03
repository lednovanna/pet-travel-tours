import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

type Tour = {
  title: string;
  location: string;
  price: string;
  URL: string;
  desShort: string;
};


const SearchResults: React.FC = () => {
    const location = useLocation();
    const results = (location.state?.results || []) as Tour[];
  const noResults = location.state?.noResults;

  if (noResults || results.length === 0) {
    return (
      <div className="text-center text-xl mt-20 text-gray-700 font-semibold">
        No results found for your search.
      </div>
    );
  }

  if (results.length === 0) return null;

  

  return (
    <div className="bg-white bg-opacity-70 p-6 rounded-md mt-8 max-w-[900px] mx-auto">
      
      <div className="space-y-6">
        {results.map((tour, index) => (
          <div key={index}
           className="flex flex-col md:flex-row items-start md:items-center gap-6
            bg-white rounded-lg shadow-md p-4">
              <div className="w-full md:w-74 h-48 overflow-hidden rounded">
            <img src={tour.URL} alt={tour.title}
             className="w-full h-full  object-cover " />
            </div>
             <div className="flex flex-col justify-between md:flex-row w-full gap-4">
                <div className="flex-1 ">
                <h4 className="text-xl font-bold mb-1">{tour.title}</h4>
                <p className="text-sm text-amber-600 mb-1">{tour.location}</p>
                <p className="text-gray-700 text-[16px] mb-2">{tour.desShort}</p>
                </div> 
                <div className="flex flex-col   gap-2 mt-4 md:mt-0 ">
                <div className="w-full  font-semibold text-lg">${tour.price}</div>
                <Link to={`/packages/${encodeURIComponent(tour.title)}`} 
                className="bg-amber-600 mt-2 text-center text-white px-4 py-2 rounded-lg max-w-[150px] hover:bg-amber-500 ">
                  Show More
                </Link>
                </div>
                </div>
          </div>
          
        ))}
        
      </div>
    </div>
  );
};

export default SearchResults;