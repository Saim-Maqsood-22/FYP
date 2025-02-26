import Head from 'next/head';
export const generateMetadata = () => {
  return {
    title:"medMagic - register"
  }
}
const page = () => {
  return (
    <>
    <Head>
      <title>{generateMetadata().title}</title>
    </Head>
      <main className="flex flex-col items-center px-6">
        <form className="w-full max-w-md bg-black/80 p-6 shadow-md rounded-md">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-white" htmlFor="email">Your Email
              <input className="w-full p-3 bg-gray-900 rounded-md focus:ring focus:ring-green-500 peer" id="email" type="email" placeholder="Your Email" />
              <p className="invisible peer-invalid:visible text-red-800">Please enter a valid email address</p>
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-white" htmlFor="Name">Name</label>
            <input className="w-full p-3 bg-gray-900 rounded-md focus:ring focus:ring-green-500" id="subject" type="text" placeholder="Your Name" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-white" htmlFor="age">Age</label>
            <input type="number" name="age" className="w-full p-3 bg-gray-900 rounded-md focus:ring focus:ring-green-500" placeholder="Your Age"/>
          </div>
          <button className=" bg-white px-2 py-2 rounded-md text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-black w-full">Submit</button>
        </form>
      </main>
    </>
  )
}


export default page
