import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Scratcher from "./Scratcher";

const ScratcherList = () => {
  // Use useSelector to retrieve the scratchers array from the Redux store
  const scratchers = useSelector((state) => state.scratcher);

  // Create a new array with the sorted scratchers
  const sortedScratchers = [...scratchers].sort(
    (a, b) => a.scratcherID - b.scratcherID
  );

  return (
    <div>
      {sortedScratchers && sortedScratchers.length > 0 ? (
        // Check if sortedScratchers is defined and not empty before mapping
        sortedScratchers.map((scratcher) => (
          <Scratcher key={scratcher.scratcherID} scratcherData={scratcher} />
        ))
      ) : (
        <p>No scratchers available</p>
      )}
    </div>
  );
};

export default ScratcherList;
