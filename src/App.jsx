import "./App.css";
import Item from "./components/Item";
import Cart from "./components/Cart";
import React from "react";

function App() {
  return (
    <>
      <div className="flex justify-center ">
        <Item title="Macbook Pro" price={150000} />
        <Item title="Pendrive" price={250000} />
        <Item title="Mobile" price={35000} />
      </div>
      <Cart />
    </>
  );
}

export default App;
