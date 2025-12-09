import Navbar from '../components/Navbar'
import { useState } from 'react';
import Addnote from '../components/Addnote';

const App = () => {
  const [addNote, setaddNote] = useState(false)
  return (
    <>
      <Navbar />
      {addNote?<Addnote/>:""}
      
      <button className='bg-gray-700 text-white cursor-pointer' onClick={() => {
        setaddNote(true)}}>Add Notes</button>
         <button className='bg-gray-700 text-white cursor-pointer ml-2' onClick={() => {
        setaddNote(false)}}>Remove</button>
    </>
    
  )
}

export default App