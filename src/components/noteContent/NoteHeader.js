import React from 'react'
import "./noteContent.css"
const NoteHeader = () => {
    return (

        <div className="noteHeader">
            <span className="date">{/* {{note.createdOn | date:"EEEE dd MMMM, yyyy 'at' h:mma"}} */}Sunday 05 April, 2015 at 3:38PM</span>
            <span className="icons">
                <i className="fa fa-check fa-lg" ng-if="note.edit == false"></i>
                <i className="fa fa-pencil fa-lg" ng-if="note.edit == true"></i>
                <i className="fa fa-trash-o fa-lg" ng-click="delete(notes.length - $index - 1)"></i></span>
        </div>

    )
}

export default NoteHeader
