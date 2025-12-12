
import { useEffect } from 'react'
import { createContext } from 'react'
import { useState } from 'react'

export const RecentNotes = createContext()
const saved = JSON.parse(localStorage.getItem("recentnotes")) || [];
const Notes = (props) => {
  const [notes, setNotes] = useState(saved);
    useEffect(() => {
  localStorage.setItem("recentnotes", JSON.stringify(notes));
}, [notes]);

    
  return (
    <div>
        <RecentNotes.Provider value={{notes , setNotes}}>
            {props.children}
        </RecentNotes.Provider>
        
    </div>
  )
}

export default Notes