import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showNote } from '../../redux/notesSlice'
import NoteContent from './NoteContent'

const NoteList = () => {
    const notesArray = useSelector(state => state.notes.notesArray)
    console.log(notesArray)
    const dispatch = useDispatch()
    useEffect(() => {
        const savedNotes = JSON.parse(
            localStorage.getItem('react-notes-app-data')
        )
        if (savedNotes) {
            dispatch(showNote(savedNotes))
        }
    }, [dispatch])


    useEffect(() => {
        localStorage.setItem(
            'react-notes-app-data',
            JSON.stringify(notesArray)
        )
    }, [notesArray]);

    return (
        <div className="noteContainer">
            {
                notesArray.map((item, index) => {
                    return <NoteContent key={index} id={item.id} date={item.date} text={item.text} />
                })
            }
        </div>
    )
}

export default NoteList
