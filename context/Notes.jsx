import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'

export const RecentNotes = createContext()
const recent = []
localStorage.setItem("recentnotes", JSON.stringify(recent))
const Notes = (props) => {
    const [change, setchange] = useState(recent)
  return (
    <div>
        <RecentNotes.Provider value={{recent , setchange}}>
            {props.children}
        </RecentNotes.Provider>
        
    </div>
  )
}

export default Notes