import React from "react";
import { Provider } from "react-redux";
import store from "./store"; // Import the Redux store
import "./App.css";

// Import your containers
import ProductsPageContainer from "./components/ProductsPageContainer";
import CartPageContainer from "./components/CartPageContainer";
import CheckoutPageContainer from "./components/CheckoutPageContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>Shopping App</h1>
        </header>
        <div className="App-content">
          <ProductsPageContainer />
          <CartPageContainer />
          <CheckoutPageContainer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
