
import Head from "next/head"
import Image from "next/image"
export const generateMetadata = () => {
    return {
        title:"medMagic - Store"
    }
}
const page = () => {
  return (
    <>
    <Head>
        <title>{generateMetadata().title}</title>
    </Head>
    <section id="products" className="container mx-auto py-12 px-6">
  <h3 className="text-2xl font-bold text-center text-blue-800 mb-8">Our Products</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div className="bg-black rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
          <Image src="/cough_syrup.jpg" alt="Product" width={150} height={150} className="w-full h-40 object-cover"/>
          <div className="p-4">
              <h4 className="font-bold text-lg text-white">Cough Syrup</h4>
              <p className="text-white mt-2">$37</p>
              <button className="mt-4 bg-white text-black px-4 py-2 rounded">Add to Cart</button>
          </div>
      </div>
      <div className="bg-black rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
          <Image src="/cotton_roll.jpg" alt="Product" className="w-full h-40 object-cover" width={150} height={150}/>
          <div className="p-4">
              <h4 className="font-bold text-lg text-white">Cotton Roll</h4>
              <p className="text-white mt-2">$23</p>
              <button className="mt-4 bg-white text-black px-4 py-2 rounded">Add to Cart</button>
          </div>
      </div>
      <div className="bg-black rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
          <Image src="/gauze_pads.jpg" alt="Product" className="w-full h-40 object-cover" width={150} height={150}/>
          <div className="p-4">
              <h4 className="font-bold text-lg text-white">Gauze Pads</h4>
              <p className="text-white mt-2">$45</p>
              <button className="mt-4 bg-white text-black px-4 py-2 rounded">Add to Cart</button>
          </div>
      </div>
      <div className="bg-black rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
          <Image src="/thermometer.jpg" alt="Product" className="w-full h-40 object-cover" width={150} height={150}/>
          <div className="p-4">
              <h4 className="font-bold text-lg text-white">Thermometer</h4>
              <p className="text-white mt-2">$29</p>
              <button className="mt-4 bg-white text-black px-4 py-2 rounded">Add to Cart</button>
          </div>
      </div>
      <div className="bg-black rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
          <Image src="/band-aids.jpg" alt="Product" className="w-full h-40 object-cover" width={150} height={150}/>
          <div className="p-4">
              <h4 className="font-bold text-lg text-white">Band-aids</h4>
              <p className="text-white mt-2">$41</p>
              <button className="mt-4 bg-white text-black px-4 py-2 rounded">Add to Cart</button>
          </div>
      </div>
      <div className="bg-black rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
          <Image src="/antiseptic_cream.jpg" alt="Product" className="w-full h-40 object-cover" width={150} height={150}/>
          <div className="p-4">
              <h4 className="font-bold text-lg text-white">Antuseptic Cream</h4>
              <p className="text-white mt-2">$50</p>
              <button className="mt-4 bg-white text-black px-4 py-2 rounded">Add to Cart</button>
          </div>
      </div>
      <div className="bg-black rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
          <Image src="/sanitizer.jpg" alt="Product" className="w-full h-40 object-cover" width={150} height={150}/>
          <div className="p-4">
              <h4 className="font-bold text-lg text-white">sanitizer</h4>
              <p className="text-white mt-2">$24</p>
              <button className="mt-4 bg-white text-black px-4 py-2 rounded">Add to Cart</button>
          </div>
      </div>
      <div className="bg-black rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
          <Image src="/face_mask.jpg" alt="Product" className="w-full h-40 object-cover" width={150} height={150}/>
          <div className="p-4">
              <h4 className="font-bold text-lg text-white">Face Mask</h4>
              <p className="text-white mt-2">$33</p>
              <button className="mt-4 bg-white text-black px-4 py-2 rounded hover:bg-rose-950">Add to Cart</button>
          </div>
      </div>
      <div className="bg-black rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
          <Image src="/gloves.jpg" alt="Product" className="w-full h-40 object-cover" width={150} height={150}/>
          <div className="p-4">
              <h4 className="font-bold text-lg text-white">Gloves</h4>
              <p className="text-white mt-2">$48</p>
              <button className="mt-4 bg-white text-black px-4 py-2 rounded">Add to Cart</button>
          </div>
      </div>
      <div className="bg-black rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
          <Image src="/baby_formula.jpg" alt="Product" className="w-full h-40 object-cover" width={150} height={150}/>
          <div className="p-4">
              <h4 className="font-bold text-lg text-white">Infant Formula</h4>
              <p className="text-white mt-2">$21</p>
              <button className="mt-4 bg-white text-black px-4 py-2 rounded">Add to Cart</button>
          </div>
      </div>
      <div className="bg-black rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
          <Image src="/nebulizer.jpg" alt="Product" className="w-full h-40 object-cover" width={150} height={150}/>
          <div className="p-4">
              <h4 className="font-bold text-lg text-white">Nebulizer</h4>
              <p className="text-white mt-2">$39</p>
              <button className="mt-4 bg-white text-black px-4 py-2 rounded">Add to Cart</button>
          </div>
      </div>
      <div className="bg-black rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
          <Image src="/electrolyte.jpg" alt="Product" className="w-full h-40 object-cover" width={150} height={150}/>
          <div className="p-4">
              <h4 className="font-bold text-lg text-white">Electrolyte Sachets</h4>
              <p className="text-white mt-2">$26</p>
              <button className="mt-4 bg-white text-black px-4 py-2 rounded">Add to Cart</button>
          </div>
      </div>
      <div className="bg-black rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
          <Image src="/lozenges.jpg" alt="Product" className="w-full h-40 object-cover" width={150} height={150}/>
          <div className="p-4">
              <h4 className="font-bold text-lg text-white">Throat Lozenges</h4>
              <p className="text-white mt-2">$43</p>
              <button className="mt-4 bg-white text-black px-4 py-2 rounded">Add to Cart</button>
          </div>
      </div>
      <div className="bg-black rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
          <Image src="/hot_bottle.jpg" alt="Product" className="w-full h-40 object-cover" width={150} height={150}/>
          <div className="p-4">
              <h4 className="font-bold text-lg text-white">Hot Water Bag</h4>
              <p className="text-white mt-2">$31</p>
              <button className="mt-4 bg-white text-black px-4 py-2 rounded">Add to Cart</button>
          </div>
      </div>
      <div className="bg-black rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
          <Image src="/baby_wipes.jpg" alt="Product" className="w-full h-40 object-cover" width={150} height={150}/>
          <div className="p-4">
              <h4 className="font-bold text-lg text-white">Baby Wipes</h4>
              <p className="text-white mt-2">$28</p>
              <button className="mt-4 bg-white text-black px-4 py-2 rounded">Add to Cart</button>
          </div>
      </div>
      <div className="bg-black rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
          <Image src="/oximeter.jpg" alt="Product" className="w-full h-40 object-cover" width={150} height={150}/>
          <div className="p-4">
              <h4 className="font-bold text-lg text-white">Pulse Oximeter</h4>
              <p className="text-white mt-2">$46</p>
              <button className="mt-4 bg-white text-black px-4 py-2 rounded">Add to Cart</button>
          </div>
      </div>
      <div className="bg-black rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
          <Image src="/BP.jpg" alt="Product" className="w-full h-40 object-cover" width={150} height={150}/>
          <div className="p-4">
              <h4 className="font-bold text-lg text-white">BP Monitor</h4>
              <p className="text-white mt-2">$34</p>
              <button className="mt-4 bg-white text-black px-4 py-2 rounded">Add to Cart</button>
          </div>
      </div>
      <div className="bg-black rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
          <Image src="/glucose.jpg" alt="Product" className="w-full h-40 object-cover" width={150} height={150}/>
          <div className="p-4">
              <h4 className="font-bold text-lg text-white">Blood Glucose Meter</h4>
              <p className="text-white mt-2">$31</p>
              <button className="mt-4 bg-white text-black px-4 py-2 rounded">Add to Cart</button>
          </div>
      </div>
      <div className="bg-black rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
          <Image src="/iron_syrup.jpg" alt="Product" className="w-full h-40 object-cover" width={150} height={150}/>
          <div className="p-4">
              <h4 className="font-bold text-lg text-white">Iron Syrup</h4>
              <p className="text-white mt-2">$20</p>
              <button className="mt-4 bg-white text-black px-4 py-2 rounded">Add to Cart</button>
          </div>
      </div>
      <div className="bg-black rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
          <Image src="/probiotic.jpg" alt="Product" className="w-full h-40 object-cover" width={150} height={150}/>
          <div className="p-4">
              <h4 className="font-bold text-lg text-white">Probiotic Capsules</h4>
              <p className="text-white   mt-2">$30</p>
              <button className="mt-4 bg-white text-black px-4 py-2 rounded">Add to Cart</button>
          </div>
      </div>
  </div>
</section>
    </>
  )
}

export default page
