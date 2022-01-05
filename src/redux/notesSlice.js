import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
    name: "notes",
    initialState: {
        notesCount: 1,
        notesArray: [

        ]

    },
    reducers: {
        addNotes: (state, action) => {
            state.notesArray = [...Array(state.notesCount).keys()];
            state.notesCount += 1;


        },
        deleteNote: (state, action) => {
            const note = action.payload

        }

    }
})
export const { addNotes, deleteNote } = notesSlice.actions

export default notesSlice.reducer