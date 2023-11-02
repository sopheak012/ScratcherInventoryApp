import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearScratchers } from "../features/scratcherSlice"; // Import your Redux actions

const ScratchTestDataGenerator = () => {
  const dispatch = useDispatch();
  const scratchers = useSelector((state) => state.scratcher);

  const saveScratchers = () => {
    // Store the current scratcher data in localStorage
    localStorage.setItem("scratchTestData", JSON.stringify(scratchers));

    alert("Current scratcher data saved to localStorage.");
  };

  const clearScratchTestData = () => {
    // Clear the stored test scratcher data from Redux
    dispatch(clearScratchers());

    // Clear the stored test scratcher data from localStorage
    localStorage.removeItem("scratchTestData");

    alert("Test scratcher data cleared.");
  };

  return (
    <div>
      <button onClick={saveScratchers}>Save Scratchers</button>
      <button onClick={clearScratchTestData}>Clear Test Scratchers</button>
    </div>
  );
};

export default ScratchTestDataGenerator;
