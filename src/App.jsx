import Navbar from '../components/Navbar'
import { useState } from 'react';
import Addnote from '../components/Addnote';

const App = () => {
  const [addNote, setaddNote] = useState(false)
  return (
    <>
      <Navbar />
      {addNote?
      <Addnote setaddNote={setaddNote}/>
     
     
: ""}
      <button className='bg-gray-700 text-white cursor-pointer' onClick={() => {
        setaddNote(true)}}>Add Notes</button>
    </>
    
  )
}

export default App