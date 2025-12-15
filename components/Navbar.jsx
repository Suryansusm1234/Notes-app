import { Search } from "lucide-react";
import { useState, useEffect } from 'react'; 
import { useContext } from 'react';
import { RecentNotes } from '../context/Notes';
import { Searchfunction } from "../utils/SearchHandler";

const Navbar = () => {
  const { notes } = useContext(RecentNotes)
  const [search, setsearch] = useState([])
  const [searchText, setSearchText] = useState("");
  
  const [isFocused, setIsFocused] = useState(false);

  const showResultsPanel = isFocused && searchText.length > 0;
  
  const handleCloseSearch = () => {
    setIsFocused(false);
  };

  useEffect(() => {
   
    if (searchText.trim().length > 0) {
      
      const result = Searchfunction({ notes, search: searchText });
      console.log(result);
      setsearch(result);
    } else {
      
      setsearch([]);
    }
  
  }, [searchText, notes]); 


  return (
    <>
    
      {isFocused && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-10" 
          onMouseDown={handleCloseSearch} 
        />
      )}

      <div className="relative flex flex-col sm:flex-row justify-between items-center 
                      gap-3 mt-2 mx-2 z-20">

        <h1 className="text-xl sm:text-2xl font-bold">MY NOTES</h1>

       
        <div className="relative w-full sm:w-64 md:w-80"> 
          <div
            className={`
              bg-gray-300 flex items-center p-1.5 gap-2 rounded-xl 
              w-full 
              transition-all 
              ${isFocused ? 'ring-2 ring-blue-500 bg-white shadow-lg' : 'focus-within:ring-2 focus-within:ring-blue-500'}
            `}
          >
           
            <Search className={searchText.length > 0 ? "opacity-0 absolute" : "opacity-100"} />

            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none flex-1"
              value={searchText}
             
              onChange={ (e) => setSearchText(e.target.value)} 
              onFocus={() => setIsFocused(true)}
            />
          </div>

         
          {showResultsPanel && (
              <div 
                  className="absolute top-full mt-2 w-full max-h-80 overflow-y-auto 
                             bg-white rounded-xl shadow-xl border border-gray-200 p-4"
              ><p className="font-medium">Search Results</p>
                 
                  {search.length > 0 ? (
                      <ul>
                          {search.map((item, index) => (
                              <li 
                                  key={item.id || index} 
                                  className="p-2 cursor-pointer hover:bg-gray-100 rounded-lg text-gray-800 flex justify-between"
                              >
                                  {item.title }
                                  <p className="truncate">{item.content}</p> 
                              </li>
                          ))}
                      </ul>
                  ) : (
                      <p className="text-gray-500 text-center py-4">
                          No results found for "{searchText}"
                      </p>
                  )}
              </div>
          )}
        </div>
        
        <div className="profile flex items-center gap-2">
          <div className="max-w-20 sm:max-w-[120px]">
            <p className="font-medium truncate">Suryansu</p>
          </div>

          <img
            src="/dummyProfile.jpg"
            alt="Profile"
            className="w-10 h-10 object-cover rounded-full"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;