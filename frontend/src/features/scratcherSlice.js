// scratcherSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  scratchers: [],
  totalScratcherValue: 0,
  totalEarning: 0,
};

// Load initial data from localStorage if available
const initialData = JSON.parse(localStorage.getItem("scratchTestData"));

// Calculate the totalScratcherValue from scratchers
const getTotalScratcherValue = (scratchers) => {
  return scratchers.reduce((total, scratcher) => {
    return total + scratcher.price * scratcher.inventory;
  }, 0);
};

const scratcherSlice = createSlice({
  name: "scratchers",
  initialState: initialData || initialState,
  reducers: {
    addScratcher: (state, action) => {
      state.scratchers.push(action.payload);
      state.totalScratcherValue = getTotalScratcherValue(state.scratchers);
    },
    removeScratcher: (state, action) => {
      const removedScratcherIndex = state.scratchers.findIndex(
        (scratcher) => scratcher.scratcherID === action.payload
      );

      if (removedScratcherIndex !== -1) {
        state.scratchers.splice(removedScratcherIndex, 1); // Remove the scratcher from the array
        state.totalScratcherValue = getTotalScratcherValue(state.scratchers);
      }
    },

    updateScratcher: (state, action) => {
      const { scratcherID, updatedData } = action.payload;
      const scratcher = state.scratchers.find(
        (scratcher) => scratcher.scratcherID === scratcherID
      );
      if (scratcher) {
        // Calculate the totalEarning change based on the inventory change
        if (updatedData.inventory < scratcher.inventory) {
          scratcher.totalEarning +=
            (scratcher.inventory - updatedData.inventory) * scratcher.price;
          state.totalEarning +=
            (scratcher.inventory - updatedData.inventory) * scratcher.price;
        }

        // Update the scratcher data
        scratcher.inventory = updatedData.inventory;

        // Update the totalScratcherValue
        state.totalScratcherValue = getTotalScratcherValue(state.scratchers);
      }
    },
    clearScratchers: (state) => {
      state.scratchers = [];
      state.totalScratcherValue = 0;
      state.totalEarning = 0;
    },
    setScratchers: (state, action) => {
      state.scratchers = action.payload;
      state.totalScratcherValue = getTotalScratcherValue(action.payload);
    },
  },
});

export const {
  addScratcher,
  removeScratcher,
  updateScratcher,
  clearScratchers,
  setScratchers, // Add setScratchers to populate scratchers from the server
} = scratcherSlice.actions;

export default scratcherSlice.reducer;
