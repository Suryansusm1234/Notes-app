import { CirclePlus,XCircle } from 'lucide-react';
import { useState } from 'react';
import dayjs from 'dayjs';
import { useContext } from 'react';
import { RecentNotes } from '../context/Notes';
  const Addnote = (props) => {
  const {recent , setchange } = useContext(RecentNotes)
  function handlesubmit(e) {
    e.preventDefault()
    const time =dayjs().format('DD/MM/YYYY HH:mm:ss')
    recent.push({
      title : title,
      content : content,
      created : time
    })
    localStorage.setItem("recentnotes", JSON.stringify(data))
    console.log(data);
    
    props.setaddNote(false)
  }
  const [title, setitle] = useState("")
  const [content, setcontent] = useState("")
  return (
    <div className='fixed inset-0 flex justify-center items-center backdrop-brightness-50 '>
    <div className='bg-white  p-5 rounded-2xl shadow-2xl '>
      <form action="" onSubmit={handlesubmit}>
      <div className='flex justify-between mb-3'>
        <button className='flex justify-center items-center gap-1.5 bg-cyan-500 pl-2 pr-2 pt-1 pb-1 rounded-3xl cursor-pointer hover:bg-cyan-400' type='submit'>
        <CirclePlus  />
        Add
        </button>
        <button className='cursor-pointer hover:bg-red-200 rounded-full pl-1 pr-1'onClick={()=>{
          props.setaddNote(false)
        }}>
          <XCircle color='red' className=''/>
        </button>
      </div>
      <h2 className='mb-2 text-2xl underline'>Create A New Note</h2>
       
        <div>
        <input type="text" placeholder='Enter the title' className='border pl-1 rounded' value={title} onChange={(e)=>{
          setitle(e.target.value)
          
        }}/>
        </div>
        <div className='mt-2'>
          <h3 className='text-xl'>Note</h3>
          <textarea name="" id=""className='border rounded  w-xl min-h-20 ' value={content} onChange={(e)=>{
            setcontent(e.target.value)
            
          }}></textarea>
        </div>
       </form>
    </div>
</div>
  )
}

export default Addnote