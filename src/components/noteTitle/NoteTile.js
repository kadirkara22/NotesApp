import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addDate, addNotes } from '../../redux/notesSlice';
import dateFormat, { masks } from "dateformat";
import "./noteTitle.css"
import { nanoid } from '@reduxjs/toolkit';

const NoteTile = () => {
    const dispatch = useDispatch();
    const handleCreateNewNote = () => {
        var now = new Date();
        dateFormat(now);
        var newNow = now.toString()
        var id = nanoid();
        var text = ""
        dispatch(addNotes({ id, newNow, text }))


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
