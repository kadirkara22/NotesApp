import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteNote } from '../../redux/notesSlice';
import "./noteContent.css"
const NoteHeader = () => {
    const dispatch = useDispatch();
    const notesArray = useSelector(state => state.notes.notesArray)
    const handleClickDelete = () => {
        dispatch(deleteNote())
    }
    console.log(notesArray[0])
    return (

        <div className="noteHeader">
            <span className="date">{/* {{note.createdOn | date:"EEEE dd MMMM, yyyy 'at' h:mma"}} */}Sunday 05 April, 2015 at 3:38PM</span>
            <span className="icons">
                <i className="fa fa-check fa-lg" ng-if="note.edit == false"></i>
                <i className="fa fa-pencil fa-lg" ng-if="note.edit == true"></i>
                <i className="fa fa-trash-o fa-lg" onClick={() => handleClickDelete()}></i></span>
        </div>

    )
}

export default NoteHeader
