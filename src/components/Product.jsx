import React from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../features/carts/cartsSlice";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { id, name, image, price } = product;
  const dispatch = useDispatch();


  const handleAddToCart = ()=>{
        dispatch(addCart(product))
  }
  return (
    <>
      <div className="border-2 shadow-lg rounded-md p-5 text-center my-10">
        <img className="w-48" src={image} alt="product image" />
        <Link to={`/shop/${name}/${id}`}><h3>{name}</h3></Link>
        <p>Price : ${price}</p>
        <button className="bg-blue-500 text-white py-1 px-4 rounded-lg font-bold text-md" onClick={handleAddToCart}>
          Add To Cart
        </button>
      </div>
    </>
  );
};

export default Product;
