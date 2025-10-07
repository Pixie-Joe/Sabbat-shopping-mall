import React, { useState } from "react";
import { Outlet, useLocation, NavLink } from "react-router-dom";
import "./App.css";
import { RiShoppingCart2Line } from "@remixicon/react"; // ✅ import

function App() {
  const [cartItems, setCartItems] = useState([]);
  const location = useLocation(); // ✅ detect route

  const addToCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCartItems([]);

  return (
    <main>
      {/* ✅ Floating Cart Icon (hidden on /cart page) */}
      {location.pathname !== "/cart" && (
        <div className="absolute lg:mt-4 mr-[-30px] lg:mr-[220px] mt-[51px] top-4 right-6 z-50 flex flex-col items-center">
          <NavLink to="/cart" className="relative flex flex-col items-center">
          <RiShoppingCart2Line className="text-3xl text-red-900" />
          {cartItems.length > 0 ? (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              {cartItems.length}
            </span>
          ) : (
            <span className="text-xs text-gray-600 mt-1"></span>
          )}
        </NavLink>
       </div>
      )}

      {/* ✅ Share cart state with children */}
      <Outlet
        context={{
          cartItems,
          addToCart,
          removeFromCart,
          clearCart,
        }}
      />
    </main>
  );
}

export default App;
