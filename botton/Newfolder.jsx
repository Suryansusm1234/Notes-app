import { FolderPlus } from 'lucide-react';
const Newfolder = (prop) => {
  return (
  
       <div className=''>
        <button className='border-dashed border-gray-600 border  p-2 rounded-2xl size-15 flex justify-center items-center  cursor-pointer'onClick={()=>{
          prop.setshowfolder(true)
        }}>
        <FolderPlus color='grey' size="1.5rem" />
        </button>
      </div> 
  )
}

export default Newfolder