import { useDispatch, useSelector } from "react-redux";
import { clearScratchers, setScratchers } from "../features/scratcherSlice";
import axios from "axios";

const ScratchTestDataGenerator = () => {
  const dispatch = useDispatch();
  const scratchers = useSelector((state) => state.scratcher);

  const saveScratchers = async () => {
    try {
      // Store the current scratcher data in localStorage
      localStorage.setItem("scratchTestData", JSON.stringify(scratchers));

      // Make a POST request to save the data on the server
      await axios.post(
        "http://localhost:4000/api/scratchers/replace",
        scratchers
      );

      // Alert after the data is successfully saved on the server
      alert("Current scratcher data saved to the server.");
    } catch (error) {
      console.error("Error saving scratchers on the server", error);
      alert("Failed to save scratcher data.");
    }
  };

  const loadScratchers = async () => {
    try {
      // Make a GET request to fetch scratcher data from the server
      const response = await axios.get("http://localhost:4000/api/scratchers");

      // Dispatch the received data to Redux to update the state
      dispatch(setScratchers(response.data));

      // Alert after the data is successfully loaded from the server
      alert("Scratchers loaded from the server.");
    } catch (error) {
      console.error("Error loading scratchers from the server", error);
      alert("Failed to load scratcher data.");
    }
  };

  const clearScratchTestData = () => {
    // Clear the stored test scratcher data from Redux
    dispatch(clearScratchers());

    // Clear the stored test scratcher data from localStorage
    localStorage.removeItem("scratchTestData");

    // Alert after the data is cleared
    alert("Test scratcher data cleared.");
  };

  return (
    <div>
      <button onClick={saveScratchers}>Save Scratchers</button>
      <button onClick={loadScratchers}>Load Scratchers</button>
      <button onClick={clearScratchTestData}>Clear Test Scratchers</button>
    </div>
  );
};

export default ScratchTestDataGenerator;
