// export const cartReducer = (state,action)=>{
//     switch (action.type) {
//         case "ADD_TO_CART":
//           return { ...state, cart: [...state.cart, action.payload] };
//         default:
//           return state;
//       }
// }

import { useEffect, useState } from "react";

export const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const handleRemove = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container my-4">
      <h2 className="mb-4"> Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="row g-2">
            {cartItems.map((item) => (
              <div key={item.id} className="col-md-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="card-img-top"
                    style={{ height: "300px", objectFit: "contain" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">
                      {item.title.length > 30
                        ? item.title.slice(0, 30) + "..."
                        : item.title}
                    </h5>
                    <p className="card-text fw-bold mb-2">${item.price}</p>
                    <button
                      className="btn btn-outline-danger mb-2"
                      onClick={() => handleRemove(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-end">
            <h4>Total: ${totalAmount.toFixed(2)}</h4>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
