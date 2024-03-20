import { createSlice } from "@reduxjs/toolkit";

const groceryslice=createSlice({
    name:'grocery',
    initialState:{
        items:[],
    },
    reducers:{
        additemsgrocery:(state,action)=>{
            state.items.push(action.payload);
        },
        cleargroceryCart:(state)=>{
            state.items.length=0;
        }
    }
});
export const{additemsgrocery, cleargroceryCart}=groceryslice.actions;
export default groceryslice.reducer;