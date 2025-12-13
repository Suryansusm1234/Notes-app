import React from 'react'
import { useContext } from 'react';
import { RecentNotes } from '../context/Notes';
import Notecard from "../components/Notecard";
const Viewall = () => {
    const { notes } = useContext(RecentNotes)
  return (
    <>
     <h1 className='text-2xl font-semibold pl-5'>All Notes</h1>
     <div className='  flex flex-wrap gap-2  '>
          {notes.map((e) => {
          return (
              <Notecard data={e} key={e.id} />)
          })}
        </div>
        </>
  )
}

export default Viewall