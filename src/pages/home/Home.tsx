import React, { useContext } from "react";
import { cartContext } from "../../context/CartContext";
import ProductBox from "../../components/productBox/ProductBox";

export default function home() {
  const context = useContext(cartContext);

  return (
    <div className="container">
      <header>
        <p className="h2 mt-5 text-center">All Products</p>
      </header>
      <main>
        <div className="container">
          <div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
            {context.shop.map((product) => (
              <ProductBox key={product.id} {...product} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
