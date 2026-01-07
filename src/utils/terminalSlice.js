import { createSlice, current } from "@reduxjs/toolkit";

const terminalSlice = createSlice({
    name: "terminal",
    initialState: {
        currentCommand: "",
        currentCursor: 0,
        commandHistory: [],
    },
    reducers: {
        setCommand: (state, action) => {
            state.currentCommand = action.payload;
        },
        updateCommandHistory: (state, action) => {
            state.commandHistory.push(action.payload);
        },
        setCursor: (state, action) => {
            state.currentCursor = action.payload;
        }
    }
});

export const { setCommand, setCursor, updateCommandHistory } = terminalSlice.actions;
export default terminalSlice.reducer; 