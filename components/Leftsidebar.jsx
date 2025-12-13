import { FolderPlus, Trash2, ArrowRight, ArrowLeft, Circle } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Addfolder from './Addfolder';
import { useContext } from 'react';
import { RecentNotes } from '../context/Notes';
import ListFolder from './ListFolder';

const Leftsidebar = () => {
  const { folder } = useContext(RecentNotes)
  console.log(folder);

  const [clicked, setclicked] = useState(false)
  const [Showfolder, setshowfolder] = useState(false)
  function clickedHandler() {
    if (!clicked) {
      setclicked(true);
    } else {
      setclicked(false);
    }

  }

  function toggleshowfolder() {
    if (Showfolder) {
      console.log(Showfolder);

      setshowfolder(false)
    } else {
      setshowfolder(true)
    }
  }
  return (
    <>
      {Showfolder ? <Addfolder setshowfolder={setshowfolder} /> : ""}
      <aside className="h-screen">
        <nav className="h-full flex flex-col bg-white   p-5 mr-3">
          <div className="flex-1 px-3">
            <button className='flex justify-center items-center gap-2 cursor-pointer' onClick={toggleshowfolder}>
              <FolderPlus size="1.5rem" />
              <p className='whitespace-nowrap'>Add New</p>
            </button>
            <ul className='mt-3 mb-2'>
              {folder.map((e) => {
                return (
                  <li>
                    <button className={`flex gap-2 ${e.colour} cursor-pointer   pl-2 pr-2 rounded-2xl`}>
                      <p >{e.title}</p>
                    </button>
                  </li>
                )
              })}
            </ul>
            <div className='flex items-center gap-3 m-2 mt-5'>
              <Trash2 color='grey' />
              <p>Trash</p>
            </div>
            {clicked ? <button className='flex gap-1 rounded-2xl p-1 items-center cursor-pointer hover:bg-gray-400' onClick={clickedHandler}>
              <ArrowLeft color='gray' />
              <Link to="/"><p className='whitespace-nowrap'>Home</p></Link>
            </button> :
              <button className='flex gap-1 rounded-2xl p-1 items-center cursor-pointer hover:bg-gray-400' onClick={clickedHandler}>
                <Link to="/viewall"><p className='whitespace-nowrap'>View all Notes</p></Link>
                <ArrowRight color='gray' />
              </button>
            }
          </div>

        </nav>
      </aside>
    </>
  )
}

export default Leftsidebar