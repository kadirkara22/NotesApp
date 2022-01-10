import React, { useEffect, useState } from 'react'
import NoteHeader from './NoteHeader'
import "./noteContent.css"
import { useDispatch, useSelector } from 'react-redux'
import { saveNote } from '../../redux/notesSlice'

const NoteContent = ({ id, date }) => {
    const [textNote, setTextNote] = useState("")

    const notesArray = useSelector(state => state.notes.notesArray)
    const dispatch = useDispatch();
    const handleChange = (event) => {
        setTextNote(event.target.value)
    }

    const handleClick = () => {
        dispatch(saveNote({ textNote, id, date }))
    }
    return (

        <div className="note" ng-repeat="note in notes | orderBy:'createdOn':true track by $index">
            <NoteHeader id={id} date={date} />
            <div className="markdown-body">
                <textarea cols="62"
                    className="textareaNotes"
                    value={textNote}
                    onChange={handleChange}></textarea>
                <div>
                    <button className="btn" onClick={handleClick}>
                        Save
                    </button>
                </div>
            </div>
        </div>


    )
}

export default NoteContent
