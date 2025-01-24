import React, { useState } from "react";
import "./App.css";
import Container from "./Container/Container";
import HiddenContainer from "./HiddenContainer/HiddenContainer";

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
