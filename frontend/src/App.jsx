import { useSelector } from "react-redux";
import ScratcherList from "./components/ScratcherList";
import AddScratcher from "./components/AddScratcher";
import ScratchTestDataGenerator from "./components/ScratchTestDataGenerator";
import NavBar from "./components/NavBar"; // Import the NavBar component

function App() {
  // Use the useSelector hook to access the total cost from the store
  const { totalScratcherValue, totalEarning } = useSelector(
    (state) => state.scratcher
  );

  return (
    <>
      <NavBar /> {/* Add the NavBar component */}
      <h1>Scratcher Examples</h1>
      <p>Total Scratcher Value: ${totalScratcherValue}</p>
      <p>Total Earning Cost: ${totalEarning}</p>
      {/* Display the total earning cost */}
      <AddScratcher />
      <ScratcherList />
      <ScratchTestDataGenerator />
    </>
  );
}

export default App;
