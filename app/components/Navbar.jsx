"use client"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className="w-full text-white">
      <Image src={"/Logo.jpg"} width={200} height={300} alt="Logo" className="m-auto w-5 h-5 sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 2xl:w-32 2xl:h-32 rounded-full" />
      <div className="flex justify-end">
      <Link href="/SignIn" className="p-2 text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">Sign In</Link>
      <Link href="/signup" className="p-2 text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">Sign Up</Link>
      </div>
      <div className="flex justify-center flex-wrap">
        <Link href="/" className="p-2 text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">Home</Link>
        <Link href="/store" className="p-2 text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">Store</Link>
        <Link href="/about" className="p-2 text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">About Us</Link>
        <Link href="/contact" className="p-2 text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">Contact Us</Link>
        <Link href="/FAQ" className="p-2 text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">FAQs</Link>
      </div>
    </div>
  )
}

export default Navbar