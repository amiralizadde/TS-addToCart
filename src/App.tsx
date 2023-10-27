import React, { useState } from "react";
import Header from "./components/header/Header";

import "./App.css";

import { routes } from "./routes";
import { useRoutes } from "react-router-dom";
import CartContextProvider from "./context/CartContext";

function App() {
  const route = useRoutes(routes);
  return (
       <CartContextProvider>
         <Header />
         {route}
       </CartContextProvider>
  );
}

export default App;
