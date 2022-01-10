import { createSlice, nanoid } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
    name: "notes",
    initialState: {
        notesArray: [],
        textNotesArray: []

    },
    reducers: {
        addNotes: (state, action) => {
            const notes = action.payload
            const newNote = {
                id: notes.id,
                date: notes.newNow.slice(0, 24),
                text: notes.text
            }
            state.notesArray = [...state.notesArray, newNote]
        },
        deleteNote: (state, action) => {
            const id = action.payload
            state.notesArray = state.notesArray.filter(item => item.id !== id)
        },
        saveNote: (state, action) => {
            const notes = action.payload
            state.textNotesArray.push(notes)

        }

    }
})
export const { addNotes, deleteNote, saveNote } = notesSlice.actions

export default notesSlice.reducer