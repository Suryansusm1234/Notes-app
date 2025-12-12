import { FolderPlus, Trash2 } from 'lucide-react';
const Leftsidebar = () => {
  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white   p-5 mr-3">
        <div className="flex-1 px-3">

          <button className='flex justify-center items-center gap-2 cursor-pointer'>
            <FolderPlus size="1.5rem" />
            <p className='whitespace-nowrap'>Add New</p>
          </button>
          <ul className='mt-3 mb-2'>
            <li>
              <p>Folder 1</p>
            </li>
            <li>
              <p>Folder 1</p>
            </li>
            <li>
              <p>Folder 1</p>
            </li>
          </ul>
          <div className='flex items-center gap-3 m-2 mt-5'>
          <Trash2 color='grey'/>
          <p>Trash</p>
          </div>
          <p className='whitespace-nowrap mt-5'>View all Notes</p>
        </div>

      </nav>
    </aside>
  )
}

export default Leftsidebar