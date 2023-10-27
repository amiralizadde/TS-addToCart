import React ,{useContext}from "react";
import './productBox.css'
import { products } from "../Products.types";
import { AiFillStar } from "react-icons/ai";
import {cartContext}  from '../../context/CartContext'

export default function ProductBox({id , title, image, price }: products) {

  const context = useContext(cartContext)

  const addToBasket = () =>{
    context.addToCart(id)
    
  }

  return (
    <div className="productBox p-3">
      <div className="productBox__content border">
         <div className="">
          <img src={image} className="productBox__image" alt="" />
         </div>
         <div className="d-flex flex-column align-items-center justify-content-center">
          <p className="fs-6 my-3 ms-4">{title.slice(0,15)}</p>
          <div className="d-flex align-items-center justify-content-between w-100 px-4">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <span>{price}</span>
          </div>
          <button className="productBox__btn btn  border w-75 my-3  px-3 " onClick={addToBasket}>add to cart</button>
         </div>
      </div>
    </div>
  );
}
