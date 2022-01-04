import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
    name: "notes",
    initialState: {
        notesCount: 1,
        notesArray: []

    },
    reducers: {
        addNotes: (state, action) => {
            state.notesArray = [...Array(state.notesCount).keys()];
            state.notesCount += 1;
        }

    }
})
export const { addNotes } = notesSlice.actions

export default notesSlice.reducer