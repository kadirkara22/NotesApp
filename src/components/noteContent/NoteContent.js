import React from 'react'
import NoteHeader from './NoteHeader'
import "./noteContent.css"

const NoteContent = ({ id }) => {


    return (

        <div className="note" ng-repeat="note in notes | orderBy:'createdOn':true track by $index">
            <NoteHeader id={id} />
            <div className="markdown-body" ng-model="note.text"
                ng-change="update(notes.length - $index - 1,note.text)"
                ng-focus="note.edit = true" ng-blur="note.edit = false"
                /* markdown-editable contenteditable="true" */>{/* {{ note.text }} */}</div>
        </div>


    )
}

export default NoteContent
