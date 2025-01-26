import React from "react";
import "./HiddenContainer.css";
import Payment from "../../assets/Images/payment.png";

function HiddenContainer({ cvladi }) {
  return (
    <div className="hidden_div">
      <img className="pay" src={Payment} alt="Payment" />
      <div className="out_of">You selected {cvladi} out of 5</div>
      <h2 className="thank">Thank you!</h2>
      <p className="text">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
export default HiddenContainer;
