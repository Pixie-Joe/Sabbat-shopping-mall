import { Search } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const CartPage = () => {
  const { cartItems, addToCart, removeFromCart, updateQuantity } = useOutletContext();

  const [allProducts, setAllProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Fetch mainly fashion items with higher limits
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const categories = [
          "mens-shirts",
          "womens-dresses",
          "tops",
          "womens-shoes",
          "mens-shoes",
          "womens-bags",
          "sunglasses",
          "womens-jewellery"
        ];

        let products = [];
        for (const cat of categories) {
          const res = await fetch(`https://dummyjson.com/products/category/${cat}?limit=20`);
          const data = await res.json();
          products = [...products, ...data.products];
        }

        setAllProducts(products);
        setFilteredProducts(products);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, []);

  // Filter search
  useEffect(() => {
    const term = searchTerm.trim().toLowerCase();
    if (term === "") {
      setFilteredProducts(allProducts);
    } else {
      setFilteredProducts(
        allProducts.filter((p) => p.title.toLowerCase().includes(term))
      );
    }
  }, [searchTerm, allProducts]);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="p-6 font-serif min-h-screen bg-cover bg-center" style={{ backgroundColor: "gray" }}>
      <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-8">🛍️ Sabbat Shop</h1>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Products */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Products</h2>
            <div className="flex items-center bg-white rounded-lg px-3 py-2 mb-4 shadow w-full max-w-md">
              <Search className="text-gray-600" />
              <input
                type="text"
                placeholder="Search products..."
                className="ml-2 w-full border-0 outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white p-4 rounded shadow hover:scale-105 transition"
                  >
                    <img
                      src={product.thumbnail || product.images?.[0]}
                      alt={product.title}
                      className="w-full h-40 object-cover rounded mb-3"
                    />
                    <h3 className="text-lg font-semibold">{product.title}</h3>
                    <p className="text-gray-700">${product.price}</p>
                    <button
                      onClick={() =>
                        addToCart({
                          id: product.id,
                          name: product.title,
                          price: product.price,
                          image: product.thumbnail || product.images?.[0],
                          quantity: 1,
                        })
                      }
                      className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                      Add to Cart
                    </button>
                  </div>
                ))
              ) : (
                <p>No products found.</p>
              )}
            </div>
          </div>

          {/* Cart */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Cart</h2>
            {cartItems.length === 0 ? (
              <p className="text-gray-600">Your cart is empty.</p>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 bg-white p-3 rounded shadow"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold">{item.name}</h4>
                      <p>
                        ${item.price} × {item.quantity}
                      </p>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.id, parseInt(e.target.value) || 1)
                        }
                        className="w-16 mt-1 border px-2 py-1"
                      />
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                ))}

                <div className="text-xl font-bold text-right mt-4">
                  Total: ${total.toFixed(2)}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CartPage;
