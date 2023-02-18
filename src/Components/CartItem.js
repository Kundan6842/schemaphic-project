import React from "react";
import CartList from "./CartList";
import { useSelector } from "react-redux";
import { useState } from "react";

const CartItem = (props) => {
  const { description, amount } = props;
  const[Filter,setFilter] = useState('all')
  const cartitems = useSelector((state) => state.cart.items);
  const FilterClick =()=>{
    setFilter('amount>100')
  }

  return (
    <div>
      <h2>Your List Item</h2>
     
      <ul>
        {cartitems.map((item) => (
          <CartList
            key={item.amount}
            item={{
              id: item.amount,
              title: item.description,
            }}
            description={description}
            amount={amount}
          />
        ))}
      </ul>
    </div>
  );
};

export default CartItem;
