import { createSlice, nanoid } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
    name: "notes",
    initialState: {
        notesArray: [],


    },
    reducers: {
        addNotes: (state, action) => {
            const notes = action.payload
            const newNote = {
                id: notes.id,
                date: notes.newNow.slice(0, 24),
                text: notes.text
            }
            state.notesArray = [newNote, ...state.notesArray]
        },
        deleteNote: (state, action) => {
            const id = action.payload
            state.notesArray = state.notesArray.filter(item => item.id !== id)
        },
        saveNote: (state, action) => {
            const notes = action.payload
            state.notesArray = state.notesArray.find(item => item.id === notes.id)
                ? state.notesArray.map(item => item.id === notes.id ? {
                    ...item, text: notes.text
                } : item)
                : [...state.notesArray]

        },
        addText: (state, action) => {
            const notes = action.payload
            state.notesArray = state.notesArray.find(item => item.id === notes.id)
                ? state.notesArray.map(item => item.id === notes.id ? {
                    ...item, text: notes.text
                } : item)
                : [...state.notesArray]
        },
        showNote: (state, action) => {
            state.notesArray = action.payload
        }

    }
})
export const { addNotes, deleteNote, saveNote, addText, showNote } = notesSlice.actions

export default notesSlice.reducer