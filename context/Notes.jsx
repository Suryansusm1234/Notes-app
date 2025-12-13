
import { useEffect } from 'react'
import { createContext } from 'react'
import { useState } from 'react'

export const RecentNotes = createContext()
const saved = JSON.parse(localStorage.getItem("recentnotes")) || [];
const savedfolder = JSON.parse(localStorage.getItem("folder")) || [];
const Notes = (props) => {
  const [notes, setNotes] = useState(saved);
  const [folder, setfolder] = useState(savedfolder)
  useEffect(() => {
    localStorage.setItem("recentnotes", JSON.stringify(notes));
  }, [notes]);
  
  useEffect(() => {
    localStorage.setItem("folder", JSON.stringify(folder));
  }, [folder]);


  return (
    <div>
      <RecentNotes.Provider value={{ notes, setNotes, folder, setfolder }}>
        {props.children}
      </RecentNotes.Provider>

    </div>
  )
}

export default Notes