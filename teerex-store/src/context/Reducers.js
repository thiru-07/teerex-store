export const cartReducer = (state, action) => {
  /**
   *Reducer function to perform actions in the product and cart page
   */
  switch (action.type) {
    case "ADD_PRODUCTS":
      return { ...state, products: action.payload }
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    case "CHANGE_CART_QTY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
    default:
      return state;
  }
};

export const productReducer = (state, action) => {
  /**
   *Reducer function to perform actions in the product page based on the filter selection
   */

  switch (action.type) {
    case "FILTER_BY_COLOR":
      return { ...state, byColor: state.byColor === action.payload ? "" : action.payload };
    case "FILTER_BY_GENDER":
      return { ...state, byGender: state.byGender === action.payload ? "" : action.payload };
    case "FILTER_BY_PRICE":
      return { ...state, byPrice: state.byPrice === action.payload ? "" : action.payload };
    case "FILTER_BY_TYPE":
      return { ...state, byType: state.byType === action.payload ? "" : action.payload };
    case "FILTER_BY_SEARCH":
      return { ...state, searchQuery: action.payload };
    case "CLEAR_FILTERS":
      return { byColor: "", byGender: "", byPrice: "", byType: "" };
    default:
      return state;
  }
};
