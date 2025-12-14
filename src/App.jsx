import Navbar from '../components/Navbar'
import { useContext } from 'react';
import { RecentNotes } from '../context/Notes';
import Leftsidebar from '../components/Leftsidebar';
import { Routes, Route } from 'react-router-dom';
import Viewall from '../pages/Viewall';
import Home from '../pages/Home';
import Trash from '../components/Trash';


const App = () => {
  const { notes } = useContext(RecentNotes)

  return (
    <>

      <Navbar />
      <div className='flex '>
        <Leftsidebar />

        <div className='bg-gray-200  p-3 rounded-xl  w-[90vw]'>
          <Routes>
            <Route index element={<Home />} />
            <Route path='viewall' element={<Viewall />} />
            <Route path='trash' element={<Trash />} />
          </Routes>

        </div>
      </div>

    </>

  )
}

export default App