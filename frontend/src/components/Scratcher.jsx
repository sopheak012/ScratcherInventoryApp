import { useDispatch } from "react-redux";
import { removeScratcher } from "../features/scratcherSlice";
import { updateScratcher } from "../features/scratcherSlice";
import styled from "styled-components";
import { useState, useRef } from "react"; // Import React, useState, and useRef

const Container = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  background: #f0f0f0;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  font-family: "Verdana", Arial, sans-serif;
  cursor: pointer;
  user-select: none;
  transition: transform 0.2s;
`;

const TopBar = styled.div`
  background: linear-gradient(to bottom, #0070c9, #005aa6);
  color: white;
  padding: 10px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Content = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Button = styled.button`
  background-color: #0070c9;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-family: "Helvetica Neue", Arial, sans-serif;
`;

const Heading = styled.h1`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  font-family: "Helvetica Neue", Arial, sans-serif;
`;

const Scratcher = ({ scratcherData }) => {
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false);
  const containerRef = useRef(null); // Use useRef to access the container element

  const handleRemoveScratcher = () => {
    dispatch(removeScratcher(scratcherData.scratcherID));
  };

  const handleScratcherClick = () => {
    if (!clicked) {
      // Only allow the click if the animation is not in progress
      setClicked(true);
      containerRef.current.style.transform = "scale(0.95)";
      // Reset the animation when it's done
      containerRef.current.addEventListener("transitionend", () => {
        setClicked(false);
        containerRef.current.style.transform = "scale(1)";
      });
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
    }
  };

  return (
    <Container onClick={handleScratcherClick} ref={containerRef}>
      <TopBar>
        <Heading>Scratcher ID: {scratcherData.scratcherID}</Heading>
      </TopBar>
      <Content>
        <p>Name: {scratcherData.name}</p>
        <p>Price: ${scratcherData.price}</p>
        <p>Inventory: {scratcherData.inventory} left</p>
        <Button onClick={handleRemoveScratcher}>Remove Scratcher</Button>
      </Content>
    </Container>
  );
};

export default Scratcher;
