"use client";
import React, { useState } from 'react';
import Head from 'next/head';
export const generateMetaData = () => {
  return {
    title: "medMagic - store",
  };
};

const products = [
  { id: 1, name: 'Antiseptic Cream', image: '/antiseptic_cream.jpg', pricePKR: 300 },
  { id: 2, name: 'Baby Formula', image: '/baby_formula.jpg', pricePKR: 1200 },
  { id: 3, name: 'Baby Wipes', image: '/baby_wipes.jpg', pricePKR: 800 },
  { id: 4, name: 'Bandages', image: '/band-aids.jpg', pricePKR: 150 },
  { id: 5, name: 'BP Monitor', image: '/BP.jpg', pricePKR: 3500 },
  { id: 6, name: 'Cotton Roll', image: '/cotton_roll.jpg', pricePKR: 200 },
  { id: 7, name: 'Cough Syrup', image: '/cough_syrup.jpg', pricePKR: 400 },
  { id: 8, name: 'Electrolytes', image: '/electrolyte.jpg', pricePKR: 250 },
  { id: 9, name: 'Face Mask', image: '/face_mask.jpg', pricePKR: 50 },
  { id: 10, name: 'Gauze Pads', image: '/gauze_pads.jpg', pricePKR: 180 },
  { id: 11, name: 'Gloves', image: '/gloves.jpg', pricePKR: 300 },
  { id: 12, name: 'Glucose Meter', image: '/glucose.jpg', pricePKR: 4000 },
  { id: 13, name: 'Hot Water Bag', image: '/hot_bottle.jpg', pricePKR: 600 },
  { id: 14, name: 'Iron Syrup', image: '/iron_syrup.jpg', pricePKR: 500 },
  { id: 15, name: 'Lozenges', image: '/lozenges.jpg', pricePKR: 100 },
  { id: 16, name: 'Nebulizer', image: '/nebulizer.jpg', pricePKR: 5500 },
  { id: 17, name: 'Oximeter', image: '/oximeter.jpg', pricePKR: 2500 },
  { id: 18, name: 'Probiotic Capsules', image: '/probiotic.jpg', pricePKR: 700 },
  { id: 19, name: 'Sanitizer', image: '/sanitizer.jpg', pricePKR: 200 },
  { id: 20, name: 'Thermometer', image: '/thermometer.jpg', pricePKR: 800 },
];

const page = () => {
    <Head>
        <title>{generateMetaData().title}</title>
    </Head>
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, { ...product, cartId: cart.length + 1 }]);
  };

  const removeFromCart = (cartId) => {
    setCart(cart.filter(item => item.cartId !== cartId));
  };

  const calculateTotalBill = () => {
    return cart.reduce((total, item) => total + item.pricePKR, 0);
  };

  return (
    <div className="bg-[#1a1a1a] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8">
          Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover text-white"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  PKR {product.pricePKR}
                </p>
                <button
                  className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded w-full dark:bg-blue-700 dark:hover:bg-blue-800"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        {cart.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Your Cart</h2>
            <ul>
              {cart.map((item) => (
                <li key={item.cartId} className="flex items-center justify-between text-white">
                  <span>{item.name} - PKR {item.pricePKR}</span>
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded"
                    onClick={() => removeFromCart(item.cartId)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-white text-lg font-semibold">
              Total Bill: PKR {calculateTotalBill()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;