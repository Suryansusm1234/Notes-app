import { Timer, PencilLine } from "lucide-react";

const NoteCard = (props) => {
  return (
    <div className="bg-yellow-400 w-full max-w-[200px] sm:max-w-[230px] md:max-w-[280px]

                    rounded-xl p-5 sm:p-6 
                    shadow-lg hover:shadow-xl transition-shadow">

      {/* Date */}
      <p className="font-light text-xs sm:text-sm text-gray-700 mb-1 ml-1">
       {props.data.date}
      </p>

      {/* Title + Edit */}
      <div className="flex justify-between items-center pl-1 pr-1">
        <h2 className="text-lg sm:text-xl font-semibold truncate max-w-[75%]">
         {props.data.title}
        </h2>

        <button className="cursor-pointer shrink-0 ml-2 p-1 rounded-full hover:bg-yellow-300">
          <PencilLine size="1rem" />
        </button>
      </div>

      <hr className="border-gray-700 my-2" />

      {/* Content */}
      <div className="mt-2 text-sm text-gray-800">
        <p className="line-clamp-2">
          {props.data.content}
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-1 mt-4 pt-2 border-t border-gray-500/50">
        <Timer size="1rem" className="text-gray-700" />
        <div className="font-light text-xs sm:text-sm text-gray-700">
        {props.data.time}
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
