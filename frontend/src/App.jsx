import React from "react";
import ScratcherList from "./components/ScratcherList";
import AddScratcher from "./components/AddScratcher";
import ScratchTestDataGenerator from "./components/ScratchTestDataGenerator";

function App() {
  return (
    <>
      <h1>Scratcher Examples</h1>
      <AddScratcher />
      <ScratcherList />
      <ScratchTestDataGenerator />
    </>
  );
}

export default App;
