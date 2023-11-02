import React from "react";
import { useDispatch } from "react-redux";
import { removeScratcher } from "../features/scratcherSlice";
import { updateScratcher } from "../features/scratcherSlice";

const style = {
  width: "300px",
  height: "200px",
  backgroundColor: "white",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  borderRadius: "12px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  margin: "10px",
};

const pStyle = {
  fontSize: "18px",
  margin: "5px",
};

const buttonStyle = {
  backgroundColor: "#0070c9",
  color: "white",
  border: "none",
  padding: "10px 20px",
  borderRadius: "6px",
  cursor: "pointer",
};

const Scratcher = ({ scratcherData }) => {
  const dispatch = useDispatch();

  const handleRemoveScratcher = () => {
    dispatch(removeScratcher(scratcherData.scratcherID));
  };

  const handleScratcherClick = () => {
    if (scratcherData.inventory > 0) {
      dispatch(
        updateScratcher({
          scratcherID: scratcherData.scratcherID,
          updatedData: {
            inventory: scratcherData.inventory - 1,
          },
        })
      );
    }
  };

  return (
    <div style={style} onClick={handleScratcherClick}>
      <p style={pStyle}>Scratcher ID: {scratcherData.scratcherID}</p>
      <p style={pStyle}>Name: {scratcherData.name}</p>
      <p style={pStyle}>Price: ${scratcherData.price}</p>
      <p style={pStyle}>Inventory: {scratcherData.inventory} left</p>
      <button style={buttonStyle} onClick={handleRemoveScratcher}>
        Remove Scratcher
      </button>
    </div>
  );
};

export default Scratcher;
