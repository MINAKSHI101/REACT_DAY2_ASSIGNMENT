import React from "react";

function Cart({ cart }) {
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div style={{ border: "1px solid gray", padding: 10 }}>
      <h2>🛒 Cart</h2>
      {cart.length === 0 ? <p>No items yet</p> : null}
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} x {item.qty} = ₹{item.price * item.qty}
          </li>
        ))}
      </ul>
      <h3>Total: ₹{total}</h3>
    </div>
  );
}

export default Cart;
