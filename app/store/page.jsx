import Image from 'next/image'
import React from 'react'
const page = () => {
  return (
    <>
    <section id="products" className="container mx-auto py-12 px-6">
  <h3 className="text-2xl font-bold text-center text-blue-800 mb-8">Our Products</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
          <Image src="/cough_syrup.jpg" alt="Product" className="w-full h-40 object-cover"width={150} height={150}/>
          <div className="p-4">
              <h4 className="font-bold text-lg text-gray-800">Cough Syrup</h4>
              <p className="text-gray-600 mt-2">$20.00</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add to Cart</button>
          </div>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
      <Image src="/cotton_roll.jpg" alt="Product" className="w-full h-40 object-cover"width={150} height={150}/>
          <div className="p-4">
              <h4 className="font-bold text-lg text-gray-800">Cotton Roll</h4>
              <p className="text-gray-600 mt-2">$25.00</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add to Cart</button>
          </div>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
      <Image src="/gauze_pads.jpg" alt="Product" className="w-full h-40 object-cover"width={150} height={150}/>
          <div className="p-4">
              <h4 className="font-bold text-lg text-gray-800">Gauze Pads</h4>
              <p className="text-gray-600 mt-2">$30.00</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add to Cart</button>
          </div>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
      <Image src="/thermometer.jpg" alt="Product" className="w-full h-40 object-cover"width={150} height={150}/>
          <div className="p-4">
              <h4 className="font-bold text-lg text-gray-800">Digital Thermometer</h4>
              <p className="text-gray-600 mt-2">$15.00</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add to Cart</button>
          </div>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
      <Image src="/band-aids.jpg" alt="Product" className="w-full h-40 object-cover"width={150} height={150}/>
          <div className="p-4">
              <h4 className="font-bold text-lg text-gray-800">Band-Aids</h4>
              <p className="text-gray-600 mt-2">$18.00</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add to Cart</button>
          </div>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
      <Image src="/antiseptic_cream.jpg" alt="Product" className="w-full h-40 object-cover"width={150} height={150}/>
          <div className="p-4">
              <h4 className="font-bold text-lg text-gray-800">Antiseptic Cream</h4>
              <p className="text-gray-600 mt-2">$22.00</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add to Cart</button>
          </div>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
      <Image src="/sanitizer.jpg" alt="Product" className="w-full h-40 object-cover"width={150} height={150}/>
          <div className="p-4">
              <h4 className="font-bold text-lg text-gray-800">Hand Sanitizer</h4>
              <p className="text-gray-600 mt-2">$19.00</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add to Cart</button>
          </div>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
      <Image src="/face_mask.jpg" alt="Product" className="w-full h-40 object-cover"width={150} height={150}/>
          <div className="p-4">
              <h4 className="font-bold text-lg text-gray-800">Face Masks</h4>
              <p className="text-gray-600 mt-2">$28.00</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add to Cart</button>
          </div>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
      <Image src="/gloves.jpg" alt="Product" className="w-full h-40 object-cover"width={150} height={150}/>
          <div className="p-4">
              <h4 className="font-bold text-lg text-gray-800">Disposable Gloves</h4>
              <p className="text-gray-600 mt-2">$21.00</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add to Cart</button>
          </div>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
      <Image src="/baby_formula.jpg" alt="Product" className="w-full h-40 object-cover"width={150} height={150}/>
          <div className="p-4">
              <h4 className="font-bold text-lg text-gray-800">Infant Formula</h4>
              <p className="text-gray-600 mt-2">$26.00</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add to Cart</button>
          </div>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
      <Image src="/nebulizer.jpg" alt="Product" className="w-full h-40 object-cover"width={150} height={150}/>
          <div className="p-4">
              <h4 className="font-bold text-lg text-gray-800">Nebulizer</h4>
              <p className="text-gray-600 mt-2">$32.00</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add to Cart</button>
          </div>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
      <Image src="/electrolyte.jpg" alt="Product" className="w-full h-40 object-cover"width={150} height={150}/>
          <div className="p-4">
              <h4 className="font-bold text-lg text-gray-800">Electrolyte Sachets</h4>
              <p className="text-gray-600 mt-2">$29.00</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add to Cart</button>
          </div>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
      <Image src="/lozenges.jpg" alt="Product" className="w-full h-40 object-cover"width={150} height={150}/>
          <div className="p-4">
              <h4 className="font-bold text-lg text-gray-800">Throat Lozenges</h4>
              <p className="text-gray-600 mt-2">$23.00</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add to Cart</button>
          </div>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
      <Image src="/hot_bottle.jpg" alt="Product" className="w-full h-40 object-cover"width={150} height={150}/>
          <div className="p-4">
              <h4 className="font-bold text-lg text-gray-800">Hot Water Bag</h4>
              <p className="text-gray-600 mt-2">$24.00</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add to Cart</button>
          </div>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
      <Image src="/baby_wipes.jpg" alt="Product" className="w-full h-40 object-cover"width={150} height={150}/>
          <div className="p-4">
              <h4 className="font-bold text-lg text-gray-800">Baby Wipes</h4>
              <p className="text-gray-600 mt-2">$17.00</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add to Cart</button>
          </div>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
      <Image src="/oximeter.jpg" alt="Product" className="w-full h-40 object-cover"width={150} height={150}/>
          <div className="p-4">
              <h4 className="font-bold text-lg text-gray-800">Pulse Oximeter</h4>
              <p className="text-gray-600 mt-2">$27.00</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add to Cart</button>
          </div>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
      <Image src="/BP.jpg" alt="Product" className="w-full h-40 object-cover"width={150} height={150}/>
          <div className="p-4">
              <h4 className="font-bold text-lg text-gray-800">Blood Pressure Monitor</h4>
              <p className="text-gray-600 mt-2">$34.00</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add to Cart</button>
          </div>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
      <Image src="/glucose.jpg" alt="Product" className="w-full h-40 object-cover"width={150} height={150}/>
          <div className="p-4">
              <h4 className="font-bold text-lg text-gray-800">Blood Glucose Meter</h4>
              <p className="text-gray-600 mt-2">$31.00</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add to Cart</button>
          </div>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
      <Image src="/iron_syrup.jpg" alt="Product" className="w-full h-40 object-cover"width={150} height={150}/>
          <div className="p-4">
              <h4 className="font-bold text-lg text-gray-800">Iron Syrup</h4>
              <p className="text-gray-600 mt-2">$20.00</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add to Cart</button>
          </div>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
      <Image src="/probiotic.jpg" alt="Product" className="w-full h-40 object-cover"width={150} height={150}/>
          <div className="p-4">
              <h4 className="font-bold text-lg text-gray-800">Probiotic Capsules</h4>
              <p className="text-gray-600 mt-2">$30.00</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add to Cart</button>
          </div>
      </div>
  </div>
</section>
    </>
  )
}

export default page
