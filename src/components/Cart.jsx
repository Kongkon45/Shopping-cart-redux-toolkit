import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementQuantity, incrementQuantity, removeCart } from "../features/carts/cartsSlice";

const Cart = () => {
  const productItem = useSelector((state) => state.carts.carts);
  // console.log(productItem)
  const dispatch = useDispatch();
  const handleRemoveToCart = (item)=>{
    dispatch(removeCart(item))
  }
  const handleIncrementCart = (item)=>{
    dispatch(incrementQuantity(item))
  }

  const totalPrice = productItem.reduce((total, item) => total + (item.price * item.quantity), 0)
  return (
    <div className="w-2/3 mx-auto">
        <h2 className="text-center text-2xl font-bold">Cart Item</h2>
      <ul>
        {productItem &&
          productItem?.map((item) => (
            <li key={item.id} className="flex justify-around items-center gap-4 border-2 rounded-md my-2 p-2 mx-2">
              <img className="w-12" src={item.image} alt="cart image" />
              <h3>{item.name}</h3>
              <button
                className="bg-blue-500 text-white py-1 px-4 rounded-lg font-bold text-md"
                onClick={()=>handleIncrementCart(item)}
              >
                +
              </button>
              <p>{item.quantity}</p>
              <button
                className="bg-blue-500 text-white py-1 px-4 rounded-lg font-bold text-md"
                onClick={()=>dispatch(decrementQuantity(item))}
              >
                -
              </button>
              <button
                className="bg-red-500 text-white py-1 px-4 rounded-lg font-bold text-md"
                onClick={()=>handleRemoveToCart(item)}
              >
                Remove
              </button>
              <p>Price : ${item.price}</p>
            </li>
          ))}
      </ul>
      <h3 className="text-right mr-[35px] font-bold text-md">Total Price : ${totalPrice}</h3>
    </div>
  );
};

export default Cart;
