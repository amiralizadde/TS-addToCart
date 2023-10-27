import React from "react";
import "./header.css";
import { BsFillCartPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container my-4">
      <header className="header d-flex align-items-center justify-content-between">
        <Link to="/" className="header__left ">
          <span className="header__title">Sahand Shop</span>
        </Link>
        <Link to="/cart" className="header__right text-dark ">
          <BsFillCartPlusFill className="shop-icon " />
          <span className="">2</span>
        </Link>
      </header>
    </div>
  );
}

export default Header;
