import { CirclePlus,XCircle } from 'lucide-react';
const Addnote = (props) => {
  
  
  return (
    <div className='fixed inset-0 flex justify-center items-center backdrop-brightness-50 '>
    <div className='bg-white  p-5 rounded-2xl shadow-2xl '>
      <div className='flex justify-between mb-3'>
        <button className='flex justify-center items-center gap-1.5 bg-cyan-500 pl-2 pr-2 pt-1 pb-1 rounded-3xl cursor-pointer '>
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
       <form action="">
        <div>
        <input type="text" placeholder='Enter the title' className='border pl-1 rounded' />
        </div>
        <div className='mt-2'>
          <h3 className='text-xl'>Note</h3>
          <textarea name="" id=""className='border rounded  w-xl min-h-20 '></textarea>
        </div>
       </form>
    </div>
</div>
  )
}

export default Addnote