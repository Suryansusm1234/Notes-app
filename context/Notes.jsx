
import { useEffect } from 'react'
import { createContext } from 'react'
import { useState } from 'react'

export const RecentNotes = createContext()
const saved = JSON.parse(localStorage.getItem("recentnotes")) || [];
const savedfolder = JSON.parse(localStorage.getItem("folder")) || [];
const savedtrash = JSON.parse(localStorage.getItem("trash")) || [];
const Notes = (props) => {
  const [notes, setNotes] = useState(saved);
  const [folder, setfolder] = useState(savedfolder)
  const [trash, settrash] = useState(savedtrash)
  useEffect(() => {
    localStorage.setItem("recentnotes", JSON.stringify(notes));
  }, [notes]);
  
  useEffect(() => {
    localStorage.setItem("folder", JSON.stringify(folder));
  }, [folder]);

  useEffect(() => {
    localStorage.setItem("trash", JSON.stringify(trash));
  }, [trash]);


  return (
    <div>
      <RecentNotes.Provider value={{ notes, setNotes, folder, setfolder ,trash ,settrash }}>
        {props.children}
      </RecentNotes.Provider>

    </div>
  )
}

export default Notes