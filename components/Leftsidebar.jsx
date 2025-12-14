import { FolderPlus, Trash2, ArrowRight, ArrowLeft,Trash } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Addfolder from './Addfolder';
import { useContext } from 'react';
import { RecentNotes } from '../context/Notes';
import { deleteFolder } from '../utils/Deletehandler';

const Leftsidebar = () => {
  const { folder , setfolder , trash , settrash  } = useContext(RecentNotes)

  const [clicked, setclicked] = useState(false)
  const [Showfolder, setshowfolder] = useState(false)
  const [hover, sethover] = useState(null)
  // Function for handling the page change
  function clickedHandler() {
    if (!clicked) {
      setclicked(true);
    } else {
      setclicked(false);
    }

  }
//Function for showing the create folder section
  function toggleshowfolder() {
    if (Showfolder) {

      setshowfolder(false)
    } else {
      setshowfolder(true)
    }
  }
//Function for handaling the folder delete
  function folderdelete(prop){
    console.log(prop.id);
    
    const {newArray , removedItem} = deleteFolder({folder : folder, id : prop.id})
    setfolder(newArray)
    if(removedItem != null){
      settrash(prevTrash =>[removedItem,...prevTrash])
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
              {folder.map((e, index) => {
                const hoverd = hover === e.id;
                return (
                  <li className='relative' key={e.id}  onMouseEnter={()=>sethover(e.id)} onMouseLeave={()=>sethover(null)} >
                    <button className={`flex gap-2 ${e.colour} cursor-pointer   pl-2 pr-2 rounded-2xl`} >
                      <p >{e.title}</p>
                    </button>
                  {hoverd && (
                            <div 
                                className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer bg-red-200 rounded-2xl p-1" onClick={()=> folderdelete(e)}>
                                <Trash 
                                    color='red' 
                                    size={18}
                                    className=''
                                />
                            </div>
                        )}
                  </li>
                )
              })}
            </ul>
            <div className='flex items-center gap-3  mt-5 cursor-pointer hover:bg-red-200 rounded-2xl pl-3'>
              <Trash2 color='red' />
              <Link to="/trash">Trash</Link>
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