import { Search } from "lucide-react";
import { useState } from 'react';

const Navbar = () => {
  const [searchtext, setsearchtext] = useState("");
  const [input, setinput] = useState("");

  function clearsearch() {
    setinput("");
    setsearchtext(false);
  }

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center 
                    gap-3 mt-2 mx-2">

      <h1 className="text-xl sm:text-2xl font-bold">MY NOTES</h1>

      <div
        className="bg-gray-300 flex items-center p-1.5 gap-2 rounded-xl 
                   focus-within:ring-2 focus-within:ring-blue-500 
                   w-full sm:w-64 md:w-80
                   transition-all"
        onBlur={clearsearch}
      >
        <Search className={searchtext ? "opacity-0" : "opacity-100"} />

        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none flex-1"
          value={input}
          onChange={(e) => {
            setsearchtext(e.target.value.length > 0);
            setinput(e.target.value);
          }}
        />
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
  );
};

export default Navbar;
