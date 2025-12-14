import { CirclePlus,XCircle,Save } from 'lucide-react';
import { useState } from 'react';
import dayjs from 'dayjs';
import { useContext } from 'react';
import { RecentNotes } from '../context/Notes';
import { v4 as uuidv4 } from 'uuid';
  const Addnote = (props) => {
    console.log(props.edit);
    
  const {notes , setNotes } = useContext(RecentNotes)
  function handlesubmit(e) {
    e.preventDefault()
    const index = notes.findIndex((note)=>{
      return note.id === props.id
    })
    let NewNote = [...notes] 
    let id 
    if(index > -1){
       NewNote[index].title = title
       NewNote[index].content = content
       NewNote[index].date = dayjs().format('DD/MM/YYYY')
       NewNote[index].time = dayjs().format('HH:mm:ss dddd')
    }else{
      const data =
    {
      title : title,
      content : content,
      id: uuidv4(),
      date:dayjs().format('DD/MM/YYYY'),
      time:dayjs().format('HH:mm:ss dddd')
    }
     NewNote = [data, ...notes] 
    }
    
     setNotes(NewNote);
    
    props.setaddNote(false)
  }
  const [title, setitle] = useState(props.title)
  const [content, setcontent] = useState(props.content)
  return (
    <div className='fixed inset-0 flex justify-center items-center backdrop-brightness-50 z-10 '>
    <div className='bg-white  p-5 rounded-2xl shadow-2xl '>
      <form action="" onSubmit={(e)=>{
        handlesubmit(e)
      }}>
      <div className='flex justify-between mb-3'>
        {props.edit?<button className='flex justify-center items-center gap-1.5 bg-cyan-500 pl-2 pr-2 pt-1 pb-1 rounded-3xl cursor-pointer hover:bg-cyan-400' type='submit'>
        <Save  />
        Save
        </button>
        :
        <button className='flex justify-center items-center gap-1.5 bg-cyan-500 pl-2 pr-2 pt-1 pb-1 rounded-3xl cursor-pointer hover:bg-cyan-400' type='submit'>
        <CirclePlus  />
        Add
        </button>}
        <button className='cursor-pointer hover:bg-red-200 rounded-full pl-1 pr-1'onClick={()=>{
          props.setaddNote(false)
        }}>
          <XCircle color='red' className=''/>
        </button>
      </div>
      <h2 className='mb-2 text-2xl underline'>Create A New Note</h2>
       
        <div>
        <input type="text" placeholder='Enter the title' required className='border pl-1 rounded' value={title} onChange={(e)=>{
          setitle(e.target.value)
          
        }} />
        </div>
        <div className='mt-2'>
          <h3 className='text-xl'>Note</h3>
          <textarea name="" id=""className='border rounded  w-xl min-h-20 pl-2 ' value={content} onChange={(e)=>{
            setcontent(e.target.value)
            
          }}></textarea>
        </div>
       </form>
    </div>
</div>
  )
}

export default Addnote