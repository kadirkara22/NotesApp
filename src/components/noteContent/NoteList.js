import React from 'react'
import { useSelector } from 'react-redux'
import NoteContent from './NoteContent'

const NoteList = () => {
    const notesArray = useSelector(state => state.notes.notesArray)
    console.log(notesArray)
    return (
        <div className="noteContainer">
            {
                notesArray.map((item, index) => {
                    return <NoteContent key={index} id={item.id} />
                })
            }
        </div>
    )
}

export default NoteList
