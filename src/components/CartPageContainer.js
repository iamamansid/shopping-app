import React from "react";
import { connect } from "react-redux";
import { increaseQuantity, decreaseQuantity } from "../actions";
import "./CartPageContainer.css"; // Import the CSS file

const CartPageContainer = ({
  cartItems,
  increaseQuantity,
  decreaseQuantity,
}) => {
  return (
    <div className="cart-container">
      <h1>Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <p>{item.name}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => increaseQuantity(item)}>+</button>
          <button onClick={() => decreaseQuantity(item)}>-</button>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});

export default connect(mapStateToProps, { increaseQuantity, decreaseQuantity })(
  CartPageContainer
);
