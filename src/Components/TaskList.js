import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../Store/cartSlice";
import CartItem from "./CartItem";
//import classes from "./TaskList.module.css";

const TaskList = () => {
  const descriptionref = useRef("");
  const amountref = useRef("");
  const dispatch = useDispatch();
  const SubmitHandler = (event) => {
    event.preventDefault();
    dispatch(
      cartActions.addItemToCart({
        description: descriptionref.current.value,
        amount: amountref.current.value,
      })
    );
    descriptionref.current.value='';
    amountref.current.value='';
  };
  
  const descriptionref1=()=>{
    return descriptionref.current.value;
  }
  const amountref1=()=>{
    return amountref.current.value;
  }
  //console.log(document.getElementById('name').value);
  return (
    <div>
      <form onSubmit={SubmitHandler}>
        <h4>Simple Task List App</h4>
        <div>
          <div>
            <label for="name">Description</label>
            <input
              required="required"
              type="text"
              className="form-control"
              id="name"
              ref={descriptionref}
            ></input>
          </div>

          <div>
            <label for="Amount">Amount</label>
            <input
              required="required"
              type="number"
              className="form-control"
              id="amount"
              ref={amountref}
            ></input>
          </div>
        </div>
        <div>
          <div>
            <button type="submit">ADD</button>
          </div>
        </div>
      </form>
      <CartItem description={descriptionref1}amount = {amountref1}/>
    </div>
  );
};

export default TaskList;
