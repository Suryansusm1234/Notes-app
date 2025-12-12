import Navbar from '../components/Navbar'
import { useState } from 'react';
import Addnote from '../components/Addnote';
import { useContext } from 'react';
import { RecentNotes } from '../context/Notes';
import Notecard from "../components/Notecard";
import Leftsidebar from '../components/Leftsidebar';
import Newnote from '../botton/Newnote';


const App = () => {
  const [addNote, setaddNote] = useState(false)
  const { notes } = useContext(RecentNotes)
  console.log(notes);



  return (
    <>

      <Navbar />
      <div className='flex '>
      <Leftsidebar />
      {addNote ?
        <Addnote setaddNote={setaddNote} /> : ""}
        <div className='bg-gray-200  p-3 rounded-xl  w-[90vw]'>
        <h1 className='text-2xl font-semibold pl-5'>Recent Notes</h1>
      <div className=' flex justify-center gap-7 items-center p-4'>
        <div className=' flex gap-2 overflow-hidden '>
          {notes.map((e ,index) => {
           {if(index<3){
            return (
              <Notecard data={e} key={e.id} />)
           }
          else{
            return;
          }}
          })}
        </div>
        <Newnote setaddNote={setaddNote} />
      </div>
      </div>
      </div>
    </>

  )
}

export default App