import { createContext, useState, useEffect } from "react";
import { products } from "../components/Products.types";

type cartContextProviderProps = {
  children: React.ReactNode;
};

type cartContextTypes = {
  UserCart: products[];
  shop: products[];
  addToCart: (id: string) => void;
};

export const cartContext = createContext({} as cartContextTypes);

const CartContextProvider = ({ children }: cartContextProviderProps) => {
  const [UserCart, setUserCart] = useState<products[]>([]);
  const [shop, setShop] = useState<products[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((result) => setShop(result));
  }, []);

  useEffect(() => {
    UserCart.map((item) => console.log(item.count));
  }, [UserCart]);

  const addToCart = (id: string) => {
    let productItem = shop.find(
      (productItem) => productItem.id === id
    ) as products;
    let hasProductItem = UserCart?.some((productItem) => productItem.id === id);

    if (hasProductItem) {
      setUserCart((prevState) => {
        return prevState.map((item) => {
          if (item.id === productItem.id) {
            return { ...item, count: item.count + 1 };
          } else {
            return item;
          }
        });
      });
    } else {
      productItem.count = 1;
      setUserCart((prevState) => [...prevState, productItem]);
    }
  };
  return (
    <cartContext.Provider value={{ UserCart, shop, addToCart }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
