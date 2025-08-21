import React from "react";

function FoodCard({ item, addToCart }) {
  return (
    <div style={{ border: "1px solid gray", padding: 10, marginBottom: 10 }}>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>₹{item.price}</p>
      <button onClick={() => addToCart(item)}>Add to Cart</button>
    </div>
  );
}

export default FoodCard;
