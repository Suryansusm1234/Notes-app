import { Search } from "lucide-react";
import { useState } from 'react';
const Navbar = () => {
    const [searchtext, setsearchtext] = useState("")
    const [input, setinput] = useState("")
    function clearsearch(){
       setinput("")
       setsearchtext(false)
        
    }
  return (
    <div className='flex justify-between'>
        <h1 className='text-2xl'>MY NOTES</h1>
        <div className='bg-gray-300 flex justify-center items-center p-1.5 gap-2 mt-1 rounded-xl cursor-pointer focus-within:ring-2 focus-within:ring-blue-500 shrink-0 'onBlur={clearsearch}>
        <Search className={searchtext? "opacity-0":"opacity-100"}/>
        <input type="text" name="" id="" placeholder='Search' className="bg-transparent outline-none cursor-pointer" value={input} onChange={(e)=>{
            setsearchtext(e.target.value.length > 0);
            setinput(e.target.value)
            
        }}/>
        </div>
        <div className="profile">
            <p>Name</p>
            <img src="" alt="" />
        </div>
    </div>
  )
}

export default Navbar