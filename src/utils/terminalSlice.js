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
        emptyCommandHistory: (state, action) => {
            state.commandHistory = [];
            state.currentCommand = "";
            state.currentCursor = 0;
        },
        setCursor: (state, action) => {
            state.currentCursor = action.payload;
        }
    }
});

export const { setCommand, setCursor, updateCommandHistory, emptyCommandHistory } = terminalSlice.actions;
export default terminalSlice.reducer; 