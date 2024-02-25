import { configureStore, createSlice, createSlice } from "@reduxjs/toolkit";
import cartReducer from "./Cartslice";
const appStore=configureStore({
  reducer:{
    cart:cartReducer,
  },
});

export default appStore;
