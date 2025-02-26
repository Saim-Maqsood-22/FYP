import Head from 'next/head';
import React from 'react';
export const generateMetadata = () => {
    return {
      title:"medMagic - Cart"
    }
  }
const Cart = () => {
    return (
        <>
        <Head>
            <title>{generateMetadata().title}</title>
        </Head>
        <div className="min-h-screen bg-[#1a1a1a] text-white p-4">
            <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
            <div className="flex flex-col space-y-4">
                {/* Example cart item */}
                <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg shadow-md">
                    <div className="flex items-center space-x-4">
                        <img src="/path/to/image.jpg" alt="Product" className="w-16 h-16 object-cover rounded-lg" />
                        <div>
                            <h2 className="text-xl font-semibold">Product Name</h2>
                            <p className="text-gray-400">Product Description</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <span className="text-lg font-bold">$99.99</span>
                        <button className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700">Remove</button>
                    </div>
                </div>
                {/* Add more cart items here */}
            </div>
            <div className="mt-8 flex justify-between items-center">
                <span className="text-2xl font-bold">Total: $99.99</span>
                <button className="px-6 py-3 bg-green-600 rounded-lg hover:bg-green-700">Checkout</button>
            </div>
        </div>
        </>
    );
};

export default Cart;