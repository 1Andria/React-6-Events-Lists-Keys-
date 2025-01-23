import React, { useState } from "react";
import "./Container.css";
import Star from "../Images/Star.png";
import Payment from "../Images/payment.png";

function Container() {
  const [visible, setVisible] = useState(true);
  const btnClick = () => {
    setVisible(false);
  };
  const [buttons, setButtons] = useState([1, 2, 3, 4, 5]);
  const [cvladi, setCvladi] = useState(0);
  function change(btnValue) {
    setCvladi(btnValue);
  }

  return (
    <>
      {visible ? (
        <div className="container">
          <div className="star_div">
            <img src={Star} alt="Star" />
          </div>
          <h1 className="header">How did we do?</h1>
          <p className="info">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="btn_div">
            {buttons.map((btn, key) => {
              return (
                <button
                  onClick={() => change(btn)}
                  className="button"
                  key={key}
                >
                  {btn}
                </button>
              );
            })}
          </div>
          <button onClick={btnClick} className="submit">
            SUBMIT
          </button>
        </div>
      ) : (
        <div className="hidden_div">
          <img className="pay" src={Payment} alt="Payment" />
          <div className="out_of">You selected {cvladi} out of 5</div>
          <h2 className="thank">Thank you!</h2>
          <p className="text">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      )}
    </>
  );
}
export default Container;
