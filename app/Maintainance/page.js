import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-md text-center">
      <h1 className="text-3xl font-semibold mb-4 text-gray-800">
        Med Magic is Under Maintenance
      </h1>
      <p className="text-gray-600 mb-4">We'll be back soon with magical improvements!</p>
      <center>
      <Image src={"/maintainance.png"} width={300} height={300} alt="image"/>
      </center>
      <p className="text-sm text-gray-500">Sorry for the inconvenience.</p>
    </div>
  </div>
  )
}

export default page
