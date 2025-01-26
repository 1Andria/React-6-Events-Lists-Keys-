import React, { useState } from "react";
import "./App.css";
import Container from "./Components/Container/Container";
import HiddenContainer from "./Components/HiddenContainer/HiddenContainer";

function App() {
  const [visible, setVisible] = useState(true);
  const [cvladi, setCvladi] = useState(0);
  const btnClick = () => {
    setVisible(false);
  };
  return (
    <>
      {visible ? (
        <Container btnClick={btnClick} setCvladi={setCvladi} />
      ) : (
        <HiddenContainer cvladi={cvladi} />
      )}
    </>
  );
}

export default App;
