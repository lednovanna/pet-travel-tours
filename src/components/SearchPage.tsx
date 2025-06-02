import { useLocation } from "react-router-dom";
import SearchResults from "../components/SearchResults";
import HeaderSecondary from "./HeaderSecondary";
 

const SearchPage = () => {
  const location = useLocation();
  const searchResults = location.state?.results as Tour[] || [];

  return (
    <section className=" min-h-screen   my-40 flex flex-col">
    <HeaderSecondary/>
      
      <div className=" mx-auto container max-w-[900px] py-10 px-4">
        <h1 className=" max-w-lg font-bold text-[32px]">Search Results</h1>
        <SearchResults results={searchResults} />
      </div>
    </section>
  );
};

type Tour = {
    title: string;
    location: string;
    price: string;
    URL: string;
    desShort: string;
    des: string;
    duration: string;
  };

export default SearchPage;

 