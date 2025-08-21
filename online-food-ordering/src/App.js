import React, { useState } from "react";
import FoodCard from "./components/FoodCard";
import Cart from "./components/Cart";

const menuItems = [
  { id: 1, name: "Pizza", price: 250, description: "Cheese burst pizza" },
  { id: 2, name: "Burger", price: 150, description: "Veg crispy burger" },
  { id: 3, name: "Pasta", price: 200, description: "Creamy white sauce pasta" }
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => {
      const found = prev.find((c) => c.id === item.id);
      if (found) {
        return prev.map((c) =>
          c.id === item.id ? { ...c, qty: c.qty + 1 } : c
        );
      } else {
        return [...prev, { ...item, qty: 1 }];
      }
    });
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>🍴 Online Food Ordering</h1>
      <div style={{ display: "flex", gap: 20 }}>
        <div>
          <h2>Menu</h2>
          {menuItems.map((item) => (
            <FoodCard key={item.id} item={item} addToCart={addToCart} />
          ))}
        </div>
        <Cart cart={cart} />
      </div>
    </div>
  );
}

export default App;
