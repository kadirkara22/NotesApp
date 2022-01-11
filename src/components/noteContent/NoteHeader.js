import React from 'react'

import "./noteContent.css"
const NoteHeader = ({ id, date, handleClickDelete, isEdit }) => {
    console.log(isEdit)
    return (

        <div className="noteHeader">

            <span className="date">{date}</span>
            <span className="icons">
                {
                    isEdit !== true ? <i className="fa fa-check fa-lg" ng-if="note.edit == false"></i>
                        : <i className="fa fa-pencil fa-lg" ng-if="note.edit == true"></i>
                }

                <i className="fa fa-trash-o fa-lg" onClick={() => handleClickDelete(id)}></i></span>
        </div>

    )
}

export default NoteHeader
