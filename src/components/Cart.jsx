import React, { useEffect, useState } from "react";
import "../components/Cart.css";
const Cart = ({ cart, setCart }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + parseInt(curr.amt), 0));
  }, [cart]);
  return (
    <>
      <h1 className="cart-heading">Cart Products</h1>
      <div className="cart-container">
        {cart.map((product) => (
          <div className="cart-product" key={product.id}>
            <div className="imgg">
              <img src={product.pic} alt="imgage" />
            </div>
            <div className="cart-product-details">
              <h3>{product.name}</h3>
              <p>{product.amt}</p>
            </div>
          </div>
        ))}
      </div>
      <h2 className="cart-amt">Total Amount Rs:{total} </h2>
    </>
  );
};

export default Cart;