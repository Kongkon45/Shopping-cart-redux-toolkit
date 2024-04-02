import React from "react";
import { useParams } from "react-router-dom";
import Products from "../Products.json";
import { useDispatch } from "react-redux";
import { addCart } from "../features/carts/cartsSlice";
const ProductDetails = () => {
    const dispatch = useDispatch();
  const { id } = useParams();
  const singleProduct = Products?.filter((product) => product.id == id);
  //   console.log(singleProduct);
  return (
    <>
      {/* <h2 className="text-center text-2xl font-bold my-3">
        Product Details Page
      </h2> */}
      <div className="py-10">
        {singleProduct?.map((product) => {
          return (
            <div
              className="flex justify-center items-center gap-10 mx-10"
              key={product.id}
            >
              <div className="w-1/2">
                <img
                  className="w-[450px] mx-auto hover:scale-110 transition duration-300 ease-in-out cursor-pointer"
                  src={product.image}
                  alt="product image"
                />
              </div>
              <div className="w-1/2">
                <h3 className="text-3xl font-bold ">{product.name}</h3>
                <p className="text-2xl font-bold my-3">
                  Price : ${product.price}
                </p>
                <p className="text-sm text-justify">{product.description}</p>
                <button
                  className="bg-blue-500 text-white py-1 px-4 rounded-lg font-bold text-md mt-4"
                  onClick={()=>dispatch(addCart(product))}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductDetails;
