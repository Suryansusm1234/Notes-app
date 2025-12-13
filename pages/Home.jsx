import Newnote from '../botton/Newnote';
import { useContext } from 'react';
import { RecentNotes } from '../context/Notes';
import Notecard from "../components/Notecard";
import { useState } from 'react';
import Addnote from '../components/Addnote';
const Home = () => {
  const { notes } = useContext(RecentNotes)
  const [addNote, setaddNote] = useState(false)
  return (
    <>
    {addNote ?
        <Addnote setaddNote={setaddNote} /> : ""}
      <h1 className='text-2xl font-medium '>Recent Notes</h1>
      <div className=' flex justify-evenly gap-7 items-center p-4'>
        <div className=' flex gap-2 overflow-hidden '>
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
    </>

  )
}

export default Home