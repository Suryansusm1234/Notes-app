import { XCircle,Circle,FolderPlus } from "lucide-react"
import { useState } from "react"
import { useContext } from 'react';
import { RecentNotes } from '../context/Notes';
import { v4 as uuidv4 } from 'uuid';

const Addfolder = (props) => {
    const {folder , setfolder } = useContext(RecentNotes)
    function handlesubmit(e){
        props.setshowfolder(false);
        e.preventDefault()
        const data = {
            title : title,
            description: content,
            id : uuidv4(),
            colour : colour 
        }
        
         setfolder(prevFolder => [data,...prevFolder]);
    }
    const [colour, setcolour] = useState("bg-white")
  const [title, setitle] = useState("")
  const [content, setcontent] = useState("")
  return (
    <div className='z-10 fixed inset-0 flex justify-center items-center backdrop-brightness-50 '>
    <div className={`${colour}  p-5 rounded-2xl shadow-2xl `}>
      <form action="" onSubmit={(e)=>{
        handlesubmit(e)
      }}>
      <div className='flex justify-between mb-3'>
        <button className='flex justify-center items-center gap-1.5 bg-cyan-500 pl-2 pr-2 pt-1 pb-1 rounded-3xl cursor-pointer hover:bg-cyan-400' type='submit'>
        <FolderPlus  />
        Folder
        </button>
        <button className='cursor-pointer hover:bg-red-200 rounded-full pl-1 pr-1'onClick={()=>{
          props.setshowfolder(false)
        }}>
          <XCircle color='red' className=''/>
        </button>
      </div>
      <h2 className='mb-2 text-2xl underline'>Create A New Folder</h2>
       
        <div>
        <input type="text" placeholder='Folder Name' required  className='border pl-1 rounded' value={title} onChange={(e)=>{
          setitle(e.target.value)
          
        }} />
        </div>
        <div className='mt-2'>
          <h3 className='text-xl'>Description</h3>
          <input name="" id=""className='border rounded   pl-2 ' value={content} onChange={(e)=>{
            setcontent(e.target.value)
          }}/>
        </div>
        <div className="mt-2 flex gap-2">
            <Circle fill="red" stroke="none" className="cursor-pointer"onClick={()=>setcolour("bg-red-400")}/>
            <Circle fill="green" stroke="none" className="cursor-pointer"onClick={()=>setcolour("bg-green-400")}/>
            <Circle fill="yellow" stroke="none"className="cursor-pointer"onClick={()=>setcolour("bg-yellow-200")}/>
            <Circle fill="pink" stroke="none"className="cursor-pointer"onClick={()=>setcolour("bg-pink-400")}/>
        </div>
       </form>
    </div>
</div>
  )
}

export default Addfolder