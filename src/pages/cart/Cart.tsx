import React, { useContext } from "react";
import "./cart.css";
import { AiFillStar } from "react-icons/ai";
import { cartContext } from "../../context/CartContext";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  let context = useContext(cartContext);
  const navigate = useNavigate();

  const removeFromBasket = (id: string) => {
    swal({
      title: "Are you sure!!!!!",
      text: "remove from your basket",
      icon: "warning",
      buttons: ["No", "Yes"],
    }).then((result) => {
      if (result) {
        context.removeFromCart(id);
      }
    });
  };

  const removeAllProducts = () => {
    swal({
      title: "Are you sure delete all products",
      icon: "error",
      buttons: ["No", "Yes"],
    }).then((result) => {
      if (result) {
        context.removeAllCart();
      }
    });
   
  };

  return (
    <>
      {context.UserCart.length ? (
        <>
          <div className="container border">
            <div className="d-flex align-items-center justify-content-between">
              <span className="fs-2 ">All Products in Basket</span>
              <button
                className="cartItem__btn btn  border  text-success"
                onClick={removeAllProducts}
              >
                Remove all products
              </button>
            </div>
            <div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4 p-2">
              {context.UserCart?.map((product) => (
                <div key={product.id} className="p-2">
                  <div className="col cartItem border p-2">
                    <div className="cartItem__img-content">
                      <img
                        src={product.image}
                        className="cartItem__img"
                        alt=""
                      />
                    </div>
                    <div className="cartItem__description d-flex flex-column align-items-center justify-content-center">
                      <p className="my-3 fs-6">{product.title.slice(0, 15)}</p>
                      <div className="cartItem-description__rating d-flex justify-content-between px-4 w-100 ">
                        <div>
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                        </div>
                        <span> {product.price}</span>
                      </div>
                      <div className="cartItem__count text-center border w-100 p-2 my-2 bg-light">
                        count: {product.count}
                      </div>
                      <button
                        className="cartItem__btn btn  border w-100 text-success border-dark"
                        onClick={() => removeFromBasket(product.id)}
                      >
                        remove from basket
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="container d-flex flex-column align-items-center justify-content-center">
          <img
            src="../../../public/images/3081840.png"
            className="emptyCart__img"
            alt=""
          />
          <div className="fs-2">your basket is empty</div>
        </div>
      )}
    </>
  );
}
