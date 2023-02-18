import { useDispatch } from "react-redux";
import { cartActions } from "../Store/cartSlice";


const CartList = (props) => {
 
  const dispatch = useDispatch();
  const {description,amount} = props;
  const { id, title} = props.item;

  const removeItemHandler = () => {
  
    dispatch(cartActions.removeItemFromCart(id));
  };

  const editItemHandler = () => {
    // descriptionref.current.value=title;
    //  amountref.current.value=id;

    dispatch(
      cartActions.editCartItem({
        id,
        title,
      })
    );
    console.log(id,title);
  };

  return (
    <>
      <div>
        <>{title}</> 
        <>{id}</>
        <button onClick={removeItemHandler}>Delete</button>
       <button onClick={editItemHandler}>edit</button>
      </div>
    </>
  );
};

export default CartList;
