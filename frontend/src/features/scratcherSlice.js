// scratcherSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

// Load initial data from localStorage if available
const initialData = JSON.parse(localStorage.getItem("scratchTestData"));

const scratcherSlice = createSlice({
  name: "scratchers",
  initialState: initialData || initialState,
  reducers: {
    addScratcher: (state, action) => {
      state.push(action.payload);
    },
    removeScratcher: (state, action) => {
      return state.filter(
        (scratcher) => scratcher.scratcherID !== action.payload
      );
    },
    updateScratcher: (state, action) => {
      const { scratcherID, updatedData } = action.payload;
      const scratcherIndex = state.findIndex(
        (scratcher) => scratcher.scratcherID === scratcherID
      );
      if (scratcherIndex !== -1) {
        state[scratcherIndex] = { ...state[scratcherIndex], ...updatedData };
      }
    },
    clearScratchers: (state) => {
      return [];
    },
  },
});

export const {
  addScratcher,
  removeScratcher,
  updateScratcher,
  clearScratchers,
} = scratcherSlice.actions;
export default scratcherSlice.reducer;
