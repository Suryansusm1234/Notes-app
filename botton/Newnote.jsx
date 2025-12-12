import { Pencil } from 'lucide-react'
import React from 'react'
const Newnote = (props) => {
  return (
    <div className=''>
        <button className='border-dashed border-gray-600 border  p-2 rounded-2xl size-15 flex justify-center items-center  cursor-pointer'onClick={()=>{
            props.setaddNote(true)
        }}>
        <Pencil color='grey' size="1.5rem"  />
        </button>
      </div> 
  )
}

export default Newnote