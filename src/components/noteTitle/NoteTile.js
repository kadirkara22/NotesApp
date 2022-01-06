import React from 'react'
import { useDispatch } from 'react-redux'
import { addNotes } from '../../redux/notesSlice';
import "./noteTitle.css"

const NoteTile = () => {

    const dispatch = useDispatch();
    const handleCreateNewNote = () => {

        dispatch(addNotes())
    }

    return (
        <div className="noteTitle">
            <h1 className="header">React Markdown Notes</h1>
            <span className="icons" onClick={handleCreateNewNote}>
                <i className="fa fa-plus-circle fa-2x"></i>
            </span>
        </div>
    )
}

export default NoteTile
