import React,{useContext , useEffect , useState} from "react";
import "./header.css";
import { BsFillCartPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/CartContext";


function Header() {
  let context =useContext(cartContext)
  
  return (
    <div className="container my-4">
      <header className="header d-flex align-items-center justify-content-between">
        <Link to="/" className="header__left ">
          <span className="header__title">Sahand Shop</span>
        </Link>
        <Link to="/cart" className="header__right text-dark  ">
          <BsFillCartPlusFill className="shop-icon fs-3" />
          <span className="header-right__cartNumber">{context.UserCart.length}</span>
        </Link>
      </header>
    </div>
  );
}

export default Header;
