import React from 'react'
import "./noteContent.css"
const NoteHeader = () => {
    return (

        <div className="noteHeader">
            <span class="date">{/* {{note.createdOn | date:"EEEE dd MMMM, yyyy 'at' h:mma"}} */}Sunday 05 April, 2015 at 3:38PM</span>
            <span class="icons">
                <i class="fa fa-check fa-lg" ng-if="note.edit == false"></i>
                <i class="fa fa-pencil fa-lg" ng-if="note.edit == true"></i>
                <i class="fa fa-trash-o fa-lg" ng-click="delete(notes.length - $index - 1)"></i></span>
        </div>

    )
}

export default NoteHeader
