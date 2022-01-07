import React from 'react'
import NoteHeader from './NoteHeader'
import "./noteContent.css"

const NoteContent = ({ id, date }) => {


    return (

        <div className="note" ng-repeat="note in notes | orderBy:'createdOn':true track by $index">
            <NoteHeader id={id} date={date} />
            <div className="markdown-body">
                <textarea></textarea>
            </div>
        </div>


    )
}

export default NoteContent
