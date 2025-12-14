import { Timer, PencilLine, Trash } from "lucide-react";
import { useState } from "react";
import { deleteNotes } from "../utils/Deletehandler";
import { useContext } from 'react';
import { RecentNotes } from '../context/Notes';
const NoteCard = (props) => {
  const [hover, sethover] = useState(null)
  const ishover = hover === props.data.id
   const { notes , setNotes } = useContext(RecentNotes)
  function Delete(){
   const data = deleteNotes({notes : notes , id : props.data.id})
   setNotes(data)
    
  }
  return (
    <div
      className=" relative
        bg-yellow-400 
        w-full sm:w-[190px] md:w-[140px] lg:w-[200px]
        h-[230px] sm:h-[250px]
        rounded-xl p-5 sm:p-6 
        shadow-lg hover:shadow-xl transition-shadow
        flex flex-col
      "
      onMouseEnter={() => sethover(props.data.id)} onMouseLeave={() => sethover(null)} >
      {/* Date - Fixed height section */}
      <div className="h-5">
        <p className="font-light text-xs sm:text-sm text-gray-700">
          {props.data.date}
        </p>
      </div>

      {/* Title + Edit - Fixed height section */}
      <div className="mt-1">
        <div className="flex justify-between items-center">
          <h2 className=" font-semibold truncate pr-2 flex-1">
            {props.data.title}
          </h2>

          <button className="cursor-pointer shrink-0 p-1 rounded-full hover:bg-yellow-300">
            <PencilLine size="1rem" />
          </button>
        </div>

        <hr className="border-gray-700 mt-2 mb-3" />
      </div>

      {/* Content - Flexible section that takes remaining space */}
      <div className="flex-1 overflow-hidden mb-3">
        <p className="text-sm text-gray-800 line-clamp-4">
          {props.data.content}
        </p>
      </div>

      {/* Footer - Fixed height section */}
      <div className="  flex items-center gap-1 pt-2 border-t border-gray-500/50 h-8" >
        <Timer size="1rem" className="text-gray-700" />
        <div className="font-light text-xs sm:text-sm text-gray-700">
          {props.data.time}
        </div>
      </div>
      {ishover && (
        <div className="absolute top-2 right-2 transform translate-x-1/4 -translate-y-1/4 cursor-pointer bg-red-200 rounded-full p-1 shadow-md hover:bg-red-300" onClick={Delete} >
          <Trash
            color='red'
            size={18}
            className=''
          />
        </div>
      )}
    </div>
  );
};
export default NoteCard