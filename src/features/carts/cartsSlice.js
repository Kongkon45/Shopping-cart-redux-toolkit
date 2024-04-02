import { createSlice } from "@reduxjs/toolkit";

const cartsSlice = createSlice({
    name : "carts",
    initialState : {
        carts : []
    },
    reducers : {
        addCart : (state, action)=>{
            // const {id} = action.payload;
            const item = state.carts.find((cart)=>cart.id === action.payload.id);
            if(item){
                item.quantity++;
            }
            else {
                state.carts.push({...action.payload, quantity : 1})
            }
        },
        removeCart : (state, action)=>{
           state.carts =  state.carts.filter((cart)=>cart.id !== action.payload.id)
        },
        incrementQuantity : (state, action)=>{
            const item = state.carts.find((cart)=>cart.id === action.payload.id);
            if(item){
                item.quantity++
            }
        },
        decrementQuantity : (state, action)=>{
            const item = state.carts.find((cart)=>cart.id === action.payload.id);
            if(item && item.quantity > 1){
                item.quantity--
            }
        }
    }
})

export const {addCart, removeCart, incrementQuantity, decrementQuantity } = cartsSlice.actions;
export default cartsSlice.reducer;