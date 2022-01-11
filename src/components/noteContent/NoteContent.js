import React, { useState } from 'react'
import NoteHeader from './NoteHeader'
import "./noteContent.css"
import { useDispatch } from 'react-redux'
import { addText, deleteNote, saveNote } from '../../redux/notesSlice'

const NoteContent = ({ id, date, text }) => {
    const [isEdit, setIsEdit] = useState(false)
    const dispatch = useDispatch();
    const handleChange = (event) => {
        const text = event.target.value;
        dispatch(addText({ text, id, date }))

    }

    const handleClick = () => {

        dispatch(saveNote({ text, id, date }))

    }

    const noteDelete = (id) => {

        let answer = window.confirm("Are you sure you want to delete this note?")

        if (answer) {
            dispatch(deleteNote(id))
            console.log('Thing was saved to the database.');
        } else {
            // Do nothing!
            console.log('Thing was not saved to the database.');
        }

    }
    const handleFocusEdit = () => {
        setIsEdit(true)
    }

    const handleBlurEdit = () => {
        setIsEdit(false)
    }
    return (

        <div className="note" ng-repeat="note in notes | orderBy:'createdOn':true track by $index">
            <NoteHeader id={id} date={date} handleClickDelete={noteDelete} isEdit={isEdit} />
            <div className="markdown-body">
                <textarea cols="62"
                    className="textareaNotes"
                    value={text}
                    onChange={handleChange}
                    onFocus={handleFocusEdit}
                    onBlur={handleBlurEdit}
                ></textarea>
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
