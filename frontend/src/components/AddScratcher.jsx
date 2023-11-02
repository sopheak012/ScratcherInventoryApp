import React from "react";
import { useDispatch } from "react-redux";
import { addScratcher } from "../features/scratcherSlice";

const availablePrices = [1, 2, 3, 5, 10, 20, 30];
const fixedInventory = 50; // Fixed inventory count

const AddScratcher = () => {
  const dispatch = useDispatch();

  const getRandomPrice = () => {
    const randomIndex = Math.floor(Math.random() * availablePrices.length);
    return availablePrices[randomIndex];
  };

  const handleAddScratcher = () => {
    const newScratcher = {
      scratcherID: Math.floor(Math.random() * 1000), // Generate a random ID
      name: `Lottery Ticket ${Math.floor(Math.random() * 1000)}`,
      price: getRandomPrice(),
      inventory: fixedInventory, // Fixed inventory count
    };

    dispatch(addScratcher(newScratcher));
  };

  return <button onClick={handleAddScratcher}>Add New Scratcher</button>;
};

export default AddScratcher;
