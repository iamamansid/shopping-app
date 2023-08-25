import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions";
import "./ProductsPageContainer.css"; // Import the CSS file

const ProductsPageContainer = ({ products, addToCart }) => {
  return (
    <div className="products-container">
      <h1>Products</h1>
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <p>{product.name}</p>
          <p>Price: ${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.cart.products,
});

export default connect(mapStateToProps, { addToCart })(ProductsPageContainer);
