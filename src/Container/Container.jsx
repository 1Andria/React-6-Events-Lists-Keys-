import React, { useState } from "react";
import "./Container.css";
import Star from "../assets/Images/Star.png";

function Container({ btnClick, setCvladi }) {
  const [visible, setVisible] = useState(true);
  const [buttons, setButtons] = useState([1, 2, 3, 4, 5]);
  function change(btnValue) {
    setCvladi(btnValue);
  }

  return (
    <>
      <div className="container">
        <div className="star_div">
          <img src={Star} alt="Star" />
        </div>
        <h1 className="header">How did we do?</h1>
        <p className="info">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="btn_div">
          {buttons.map((btn, key) => {
            return (
              <button onClick={() => change(btn)} className="button" key={key}>
                {btn}
              </button>
            );
          })}
        </div>
        <button onClick={btnClick} className="submit">
          SUBMIT
        </button>
      </div>
    </>
  );
}
export default Container;
