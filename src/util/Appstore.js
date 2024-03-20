import { configureStore, createSlice, createSlice } from "@reduxjs/toolkit";
import cartReducer from "./Cartslice";
import grocereducer from "./grocerySlice"
const appStore=configureStore({
  reducer:{
    cart:cartReducer,
    grocery:grocereducer,
  },
});

export default appStore;
