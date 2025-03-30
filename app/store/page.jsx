"use client"
import Head from 'next/head'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ProductsPage = () => {
  // Set page title in browser tab
  useEffect(() => {
    document.title = 'medMagic - Store'
  }, [])

  // Product data
  const productsData = [
    { id: 1, name: "Cough Syrup", price: 20.00, image: "/cough_syrup.jpg" },
    { id: 2, name: "Cotton Roll", price: 25.00, image: "/cotton_roll.jpg" },
    { id: 3, name: "Gauze Pads", price: 30.00, image: "/gauze_pads.jpg" },
    { id: 4, name: "Digital Thermometer", price: 15.00, image: "/thermometer.jpg" },
    { id: 5, name: "Band-Aids", price: 18.00, image: "/band-aids.jpg" },
    { id: 6, name: "Antiseptic Cream", price: 22.00, image: "/antiseptic_cream.jpg" },
    { id: 7, name: "Hand Sanitizer", price: 19.00, image: "/sanitizer.jpg" },
    { id: 8, name: "Face Masks", price: 28.00, image: "/face_mask.jpg" },
    { id: 9, name: "Disposable Gloves", price: 21.00, image: "/gloves.jpg" },
    { id: 10, name: "Infant Formula", price: 26.00, image: "/baby_formula.jpg" },
    { id: 11, name: "Nebulizer", price: 32.00, image: "/nebulizer.jpg" },
    { id: 12, name: "Electrolyte Sachets", price: 29.00, image: "/electrolyte.jpg" },
    { id: 13, name: "Throat Lozenges", price: 23.00, image: "/lozenges.jpg" },
    { id: 14, name: "Hot Water Bag", price: 24.00, image: "/hot_bottle.jpg" },
    { id: 15, name: "Baby Wipes", price: 17.00, image: "/baby_wipes.jpg" },
    { id: 16, name: "Pulse Oximeter", price: 27.00, image: "/oximeter.jpg" },
    { id: 17, name: "Blood Pressure Monitor", price: 34.00, image: "/BP.jpg" },
    { id: 18, name: "Blood Glucose Meter", price: 31.00, image: "/glucose.jpg" },
    { id: 19, name: "Iron Syrup", price: 20.00, image: "/iron_syrup.jpg" },
    { id: 20, name: "Probiotic Capsules", price: 30.00, image: "/probiotic.jpg" }
  ]

  // State to manage cart items and cart visibility
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  // Add item to cart
  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id)
      
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        return [...prevCart, { ...product, quantity: 1 }]
      }
    })
    toast.success(`${product.name} added to cart!`)
  }

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId))
    toast.error('Item removed from cart')
  }

  // Update item quantity
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId)
      return
    }

    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    )
  }

  // Calculate total price
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  return (
    <>
      <Head>
        <title>medMagic - Store</title>
        <meta name="description" content="Shop for medical supplies at medMagic" />
      </Head>

      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-800">medMagic Store</h1>
          <button 
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="relative bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Cart
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </button>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        {/* Products Section */}
        <section id="products" className="mb-12">
          <h2 className="text-2xl font-bold text-center text-blue-800 mb-8">Our Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productsData.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-40 object-cover"
                  width={150} 
                  height={150}
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-800">{product.name}</h3>
                  <p className="text-gray-600 mt-2">${product.price.toFixed(2)}</p>
                  <button 
                    onClick={() => addToCart(product)}
                    className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Cart Sidebar */}
      <div className={`fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl transform ${isCartOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
        <div className="flex flex-col h-full">
          <div className="p-4 border-b flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-800">Your Cart</h2>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {cart.length === 0 ? (
              <p className="text-gray-500 text-center py-8">Your cart is empty</p>
            ) : (
              <ul className="divide-y divide-gray-200">
                {cart.map(item => (
                  <li key={item.id} className="py-4">
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <Image 
                          src={item.image} 
                          alt={item.name} 
                          width={50} 
                          height={50}
                          className="rounded-md"
                        />
                        <div className="ml-3">
                          <h3 className="text-sm font-medium text-gray-800">{item.name}</h3>
                          <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="text-gray-500 hover:text-gray-700"
                        >
                          -
                        </button>
                        <span className="mx-2">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="text-gray-500 hover:text-gray-700"
                        >
                          +
                        </button>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="ml-4 text-red-500 hover:text-red-700"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="p-4 border-t">
            <div className="flex justify-between mb-4">
              <span className="font-bold">Total:</span>
              <span className="font-bold">${totalPrice.toFixed(2)}</span>
            </div>
            <button 
              className={`w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 ${cart.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={cart.length === 0}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>

      {/* Overlay when cart is open */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* Toast notifications */}
      <ToastContainer 
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

export default ProductsPage