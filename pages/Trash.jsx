import { useContext } from 'react';
import { RecentNotes } from '../context/Notes';
import hexgen from '../utils/folderpresent';
import Notecard from '../components/Notecard';
import Folder from '../components/Folder';
const Trash = () => {
  const { trash , settrash } = useContext(RecentNotes)
  return (
    <>
     <h1 className='text-2xl font-semibold pl-5'>Trash</h1>
     <div className='  flex flex-wrap gap-2  '>
          {trash.map((e) => {
            if(e.type === "note"){
               return (<Notecard data={e} key={e.id} />)
            }
            else{
              const data = hexgen(e.colour)
            return (<Folder name={e.title} key={e.id} folderColor={data.folderColor} accentColor={data.accentColor} />)
            }
         
          })}
        </div>
        </>
  )
}

export default Trash