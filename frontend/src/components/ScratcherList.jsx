import { useSelector } from "react-redux";
import Scratcher from "./Scratcher";

const ScratcherList = () => {
  // Use useSelector to retrieve the scratchers array from the Redux store
  const scratchers = useSelector((state) => state.scratcher.scratchers);

  // Create a new array with the sorted scratchers
  const sortedScratchers = [...scratchers].sort(
    (a, b) => a.scratcherID - b.scratcherID
  );

  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  };

  const scratcherStyle = {
    margin: "8px",
  };

  return (
    <div style={containerStyle}>
      {sortedScratchers && sortedScratchers.length > 0 ? (
        // Check if sortedScratchers is defined and not empty before mapping
        sortedScratchers.map((scratcher) => (
          <div style={scratcherStyle} key={scratcher.scratcherID}>
            <Scratcher scratcherData={scratcher} />
          </div>
        ))
      ) : (
        <p>No scratchers available</p>
      )}
    </div>
  );
};

export default ScratcherList;
