import { createContext, useContext, useReducer, useEffect } from "react";
import { cartReducer, productReducer } from "./Reducers";
import axios from 'axios';

const Cart = createContext();
const API = "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json";
const Context = ({ children }) => {

  const fetchProducts = async () => {
    const { data } = await axios.get(API);
    dispatch({
      type: "ADD_PRODUCTS",
      payload: data,
    });
  };

  useEffect(() => {
    fetchProducts();
  }, [])

  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byColor: "",
    byGender: "",
    byPrice: "",
    byType: ""
  });



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
