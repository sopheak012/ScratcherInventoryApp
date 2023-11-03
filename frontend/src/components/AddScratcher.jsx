import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addScratcher } from "../features/scratcherSlice";

const AddScratcher = () => {
  const dispatch = useDispatch();
  const scratchers = useSelector((state) => state.scratcher.scratchers); // Assuming 'scratchers' is your state variable

  const [scratcher, setScratcher] = useState({
    name: "",
    price: "",
    inventory: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setScratcher({
      ...scratcher,
      [name]: value,
    });
  };

  const handleAddScratcher = () => {
    // Ensure that the input fields are not empty
    if (
      scratcher.name.trim() === "" ||
      scratcher.price.trim() === "" ||
      scratcher.inventory.trim() === ""
    ) {
      alert("Please fill in all fields");
      return;
    }

    // Generate a unique scratcherID between 1 and 50
    const existingIDs = scratchers.map((s) => s.scratcherID);
    let newScratcherID;
    for (let i = 1; i <= 50; i++) {
      if (!existingIDs.includes(i)) {
        newScratcherID = i;
        break;
      }
    }

    if (!newScratcherID) {
      alert("Cannot add more scratchers. All IDs are used.");
      return;
    }

    const newScratcher = {
      scratcherID: newScratcherID,
      name: scratcher.name,
      price: parseFloat(scratcher.price), // Convert price to a number
      inventory: parseInt(scratcher.inventory), // Convert inventory to an integer
    };

    dispatch(addScratcher(newScratcher));
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Scratcher Name"
        value={scratcher.name}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={scratcher.price}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="inventory"
        placeholder="Inventory"
        value={scratcher.inventory}
        onChange={handleInputChange}
      />
      <button onClick={handleAddScratcher}>Add New Scratcher</button>
    </div>
  );
};

export default AddScratcher;
