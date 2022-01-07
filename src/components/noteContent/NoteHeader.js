import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteNote } from '../../redux/notesSlice';

import "./noteContent.css"
const NoteHeader = ({ id, date }) => {
    const dispatch = useDispatch();
    const notesArray = useSelector(state => state.notes.notesArray)
    const handleClickDelete = (id) => {
        dispatch(deleteNote(id))
    }
    //var dateFormat = require('dateformat');


    return (

        <div className="noteHeader">

            <span className="date">{date}</span>
            <span className="icons">
                <i className="fa fa-check fa-lg" ng-if="note.edit == false"></i>
                <i className="fa fa-pencil fa-lg" ng-if="note.edit == true"></i>
                <i className="fa fa-trash-o fa-lg" onClick={() => handleClickDelete(id)}></i></span>
        </div>

    )
}

export default NoteHeader
