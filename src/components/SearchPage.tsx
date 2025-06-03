
import SearchResults from "../components/SearchResults";
import HeaderSecondary from "./HeaderSecondary";
 

const SearchPage = () => {
  
  

  return (
    <section className=" min-h-screen   my-40 flex flex-col">
    <HeaderSecondary/>
      
      <div className=" mx-auto container max-w-[900px] py-10 px-4">
        <h1 className=" max-w-lg font-bold text-[32px]">Search Results</h1>
        <SearchResults />
      </div>
    </section>
  );
};



export default SearchPage;

 