import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    productsNumber:0
}

export const cartSlice =  createSlice({
    name:"cart",
    initialState,
    reducers: {
        addToCart:(state,action) => {
            // state.productsNumber = state.productsNumber +1;
        // check if in product array
        const addProductExits = state.products.find((product) => product.id === action.payload.id);
        if(addProductExits){
        addProductExits.quantity += parseInt(action.payload.quantity);

        }else{
            state.products.push({...action.payload,quantity: parseInt(action.payload.quantity)});

        }
        state.productsNumber = state.productsNumber + parseInt(action.payload.quantity);
        },
        removeFromcart:(state,action) => {}
    }

})
export const {addToCart,removeFromcart} = cartSlice.actions;
export default cartSlice.reducer;