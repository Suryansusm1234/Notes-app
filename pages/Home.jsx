import Newnote from '../botton/Newnote';
import { useContext } from 'react';
import { RecentNotes } from '../context/Notes';
import Notecard from "../components/Notecard";
import { useState } from 'react';
import Addnote from '../components/Addnote';
import Folder from '../components/Folder';
import hexgen from '../utils/folderpresent';
import Newfolder from '../botton/Newfolder';
import Addfolder from '../components/Addfolder';
const Home = () => {
  const { notes , folder } = useContext(RecentNotes)
  const [addNote, setaddNote] = useState(false)
   const [Showfolder, setshowfolder] = useState(false)
  return (
    <>
    {addNote ?<Addnote setaddNote={setaddNote} /> : ""}
     {Showfolder ? <Addfolder setshowfolder={setshowfolder} /> : ""}
      <h1 className='text-2xl font-medium '>Recent Notes</h1>
      <div className=' flex justify-evenly gap-7 items-center p-4'>
        <div className=' flex gap-2 overflow-x-auto '>
          {notes.map((e, index) => {
            {
              if (index < 3) {
                return (
                  <Notecard data={e} key={e.id} />)
              }
              else {
                return;
              }
            }
          })}
        </div>
        <div>
          <Newnote setaddNote={setaddNote} />
        </div>
      </div>
      <h1 className='text-2xl font-medium'>Recent Folder</h1>
       <div className=' flex justify-between gap-7 items-center p-4'>
        <div className=' flex gap-2 overflow-hidden '>
          {folder.map((e) => {
            const data = hexgen(e.colour)
            return (
                  <Folder name={e.title} key={e.id} folderColor={data.folderColor} accentColor={data.accentColor} />)
          })}
        </div>
        <div>
          <Newfolder setshowfolder={setshowfolder} />
        </div>
      </div>
    </>

  )
}

export default Home