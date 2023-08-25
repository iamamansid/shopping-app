import { ADD_TO_CART, INCREASE_QUANTITY, DECREASE_QUANTITY } from "../actions";

const initialProducts = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 15 },
  // Add more test products if needed
];

const initialState = {
  items: [],
  products: initialProducts,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === existingItem.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        const productToAdd = state.products.find(
          (product) => product.id === action.payload.id
        );

        if (productToAdd) {
          return {
            ...state,
            items: [...state.items, { ...productToAdd, quantity: 1 }],
          };
        } else {
          return state; // If the product isn't found, return the current state
        }
      }
    case INCREASE_QUANTITY:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case DECREASE_QUANTITY:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
            : item
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
