import React, { useState } from "react";
import { FaTrash, FaShoppingCart, FaUser, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Cart = ({ cartItems, removeFromCart }) => {
  const [showForm, setShowForm] = useState(false);
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    email: "",
    address: "",
  });

  // Calculate total amount
  const totalAmount = cartItems.reduce(
    (total, item) => total + parseFloat(item.price.replace(/[^0-9.-]+/g, "")),
    0
  );

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-red-400 mt-4 mb-8">
          Cart
        </h1>
        {cartItems.length === 0 ? (
          <p className="text-center  text-gray-700">Your cart is empty.</p>
        ) : (
          <>
            <div className="bg-white rounded-lg shadow-lg p-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b border-gray-200 py-4"
                >
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-gray-600">{item.price}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors duration-300"
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}
              <div className="flex justify-between items-center mt-6">
                <h3 className="text-xl font-bold">Total Amount:</h3>
                <p className="text-xl font-bold text-green-600">
                  Rs {totalAmount.toFixed(2)}
                </p>
              </div>
              <button
                onClick={() => setShowForm(true)}
                className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300 mt-6"
              >
                Proceed to Purchase
              </button>
            </div>

            {/* Customer Details Form */}
            {showForm && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                  <h2 className="text-2xl font-bold text-purple-600 mb-6">
                    Customer Details
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="relative">
                      <FaUser className="absolute top-3 left-3 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Name"
                        value={customerDetails.name}
                        onChange={(e) =>
                          setCustomerDetails({
                            ...customerDetails,
                            name: e.target.value,
                          })
                        }
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                        required
                      />
                    </div>
                    <div className="relative">
                      <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
                      <input
                        type="email"
                        placeholder="Email"
                        value={customerDetails.email}
                        onChange={(e) =>
                          setCustomerDetails({
                            ...customerDetails,
                            email: e.target.value,
                          })
                        }
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                        required
                      />
                    </div>
                    <div className="relative">
                      <FaMapMarkerAlt className="absolute top-3 left-3 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Address"
                        value={customerDetails.address}
                        onChange={(e) =>
                          setCustomerDetails({
                            ...customerDetails,
                            address: e.target.value,
                          })
                        }
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300"
                    >
                      Place Order
                    </button>
                  </form>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;