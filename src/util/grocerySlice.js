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
    }
});
export const{additemsgrocery}=groceryslice.actions;
export default groceryslice.reducer;