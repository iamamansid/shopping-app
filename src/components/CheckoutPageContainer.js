import React, { useState } from "react";
import "./CheckoutPageContainer.css"; // Import the CSS file

const CheckoutPageContainer = () => {
  const [purchaseMessage, setPurchaseMessage] = useState("");

  const handlePurchase = () => {
    // You can add logic here for the purchase process
    setPurchaseMessage("Purchase successful!");
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <button onClick={handlePurchase}>Purchase</button>
      <p className="purchase-message">{purchaseMessage}</p>
    </div>
  );
};

export default CheckoutPageContainer;
