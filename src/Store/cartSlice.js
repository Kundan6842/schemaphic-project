import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    //totalQuantity: 0,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      state.items.push({
        amount: newItem.amount,
        description: newItem.description,
      });
    },
    removeItemFromCart(state, action) {
      const newItem = action.payload;

      state.items = state.items.filter((item) => item.amount !== newItem);
    },
    editCartItem(state, action) {
      const editItem = action.payload;
      state.items = state.items.map((item)=>{
        if(item.amount ===editItem.id){
         return {...item,description:'',amount:'',}
        }
        return item;
      });
  
    },

    
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
