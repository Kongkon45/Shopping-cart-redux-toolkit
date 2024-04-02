import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const cart = useSelector((state) => state.carts.carts);
  return (
    <div>
      <nav className="bg-blue-500 flex justify-center items-center gap-10 h-12">
        <Link className="text-white text-md font-bold" to="/">
          Home
        </Link>
        <Link className="text-white text-md font-bold" to="/shop">
          Shop
        </Link>
        <Link className="text-white text-md font-bold flex items-center gap-1" to="/cart">
          <FaShoppingCart />
          <sup>{cart.length}</sup>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
