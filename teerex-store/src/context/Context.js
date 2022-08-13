import { createContext, useContext, useReducer, useEffect } from "react";
import { cartReducer, productReducer } from "./Reducers";
import axios from 'axios';

const Cart = createContext();
const API = "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json";
const Context = ({ children }) => {
  /**
   * Context Comp that stores the products and shares it with all the other components
  */

  const fetchProducts = async () => {
    /**
     * Utility async method to fetch the product details from the API;
     */
    const { data } = await axios.get(API);
    dispatch({
      type: "ADD_PRODUCTS",
      payload: data,
    });
  };

  useEffect(() => {
    /**
     *Hook that runs when the component is mounted .
     *Performing the fetch API action here as it is called only once whenever component is mounted.
     */
    fetchProducts();
  }, [])

  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  }); // Initialising the default values of the store required by products and cart page

  const [productState, productDispatch] = useReducer(productReducer, {
    byColor: "",
    byGender: "",
    byPrice: "",
    byType: ""
  }); // Initialising the default values of the filter options



  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
