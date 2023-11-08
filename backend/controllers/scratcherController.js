const Scratcher = require("../models/scratcherModel");

// Create a new scratcher ticket
async function createScratcher(req, res) {
  try {
    const { name, price, scratcherAmount } = req.body;

    // Find the highest existing scratcherID in the database
    const highestScratcher = await Scratcher.findOne().sort({
      scratcherID: -1,
    });
    const highestScratcherID = highestScratcher
      ? highestScratcher.scratcherID
      : 0;

    // Calculate the next scratcherID by incrementing the highest ID by 1
    const scratcherID = highestScratcherID + 1;

    const scratcher = new Scratcher({
      scratcherID,
      name,
      price,
      scratcherAmount,
    });

    await scratcher.save();
    res.status(201).json(scratcher);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to create a scratcher ticket" });
  }
}

// Get a list of all scratcher tickets
async function getAllScratchers(req, res) {
  try {
    const scratcher = await Scratcher.find();
    res.status(200).json(scratcher);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to fetch scratcher tickets" });
  }
}

// Get a single scratcher ticket by scratcherID
async function getScratcher(req, res) {
  try {
    const scratcherID = req.params.scratcherID;
    const scratcher = await Scratcher.findOne({ scratcherID });
    if (!scratcher) {
      res.status(404).json({ error: "Scratcher ticket not found" });
    } else {
      res.status(200).json(scratcher);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to get scratcher ticket" });
  }
}

// Update a scratcher ticket by scratcherID
async function updateScratcher(req, res) {
  try {
    const scratcherID = req.params.scratcherID;
    const updateData = req.body;
    const scratcher = await Scratcher.findOneAndUpdate(
      { scratcherID },
      updateData,
      { new: true }
    );
    if (!scratcher) {
      res.status(404).json({ error: "Scratcher ticket not found" });
    } else {
      res.status(200).json(scratcher);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to update scratcher ticket" });
  }
}

// Function to replace all scratcher data with new data
async function replaceScratcherData(req, res) {
  try {
    // Your new data, which should replace the existing data
    const newScratcherData = req.body;

    // Delete all existing scratcher documents
    await Scratcher.deleteMany({});

    // Insert the new data
    await Scratcher.insertMany(newScratcherData);

    res.status(200).json({ message: "Scratcher data replaced successfully" });
  } catch (error) {
    console.error("Error in replaceScratcherData:", error); // Log the error details
    res
      .status(500)
      .json({
        error: "Unable to replace scratcher data",
        details: error.message,
      });
  }
}

// Delete a scratcher ticket by scratcherID
async function deleteScratcher(req, res) {
  try {
    const scratcherID = req.params.scratcherID;
    const scratcher = await Scratcher.findOneAndDelete({ scratcherID });
    if (!scratcher) {
      res.status(404).json({ error: "Scratcher ticket not found" });
    } else {
      res.status(204).end();
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to delete scratcher ticket" });
  }
}

module.exports = {
  createScratcher,
  getAllScratchers,
  getScratcher,
  updateScratcher,
  deleteScratcher,
  replaceScratcherData,
};
