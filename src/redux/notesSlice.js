import { createSlice, nanoid } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
    name: "notes",
    initialState: {
        notesArray: [],

    },
    reducers: {
        addNotes: (state, action) => {
            const newNote = {
                id: nanoid(),
            }
            state.notesArray = [...state.notesArray, newNote]
        },
        deleteNote: (state, action) => {
            const id = action.payload
            state.notesArray = state.notesArray.filter(item => item.id !== id)
        }

    }
})
export const { addNotes, deleteNote } = notesSlice.actions

export default notesSlice.reducer