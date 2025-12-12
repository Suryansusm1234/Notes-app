import Navbar from '../components/Navbar'
import { useState } from 'react';
import Addnote from '../components/Addnote';
import { useContext } from 'react';
import { RecentNotes } from '../context/Notes';
import  Notecard  from "../components/Notecard";
import Leftsidebar from '../components/Leftsidebar';
import Rightsidebar from '../components/Rightsidebar';

const App = () => {
  const [addNote, setaddNote] = useState(false)
  const {notes} = useContext(RecentNotes)
  console.log(notes);
  
 
  
  return (
    <>
    
      <Navbar />
      <Leftsidebar />
      {addNote?
      <Addnote setaddNote={setaddNote}/>: ""}
      <button className='bg-gray-700 text-white cursor-pointer' onClick={() => {
        setaddNote(true)}}>Add Notes</button>
        {notes.map((e)=>{
         return (
        <Notecard data={e} key={e.id}/>)
        })}
       
       <Rightsidebar/>
    </>
    
  )
}

export default App