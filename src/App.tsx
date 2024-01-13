// import { createSignal } from 'solid-js'

import Navbar from "./components/Navbar"
import iphone from "./assets/iphone-15-pro.png";

function StoreSection() {
  return (<section class="mt-4 bg-green-100 bg-opacity-50 w-full h-auto min-h-44 rounded-lg p-12 relative">
    <h1 class="text-3xl text-green-600 font-semibold">
      Grab your iPhone now with 20% off!
    </h1>

    <p class="text-xl text-green-600 mt-1">
      We can guarantee you the best price in the market for your iPhone. ✨
    </p>

    <button class="text-green-100 bg-green-700 w-[15%] text-base px-2 py-1 rounded-lg mt-16 hover:bg-green-800 transition-all ease-in-out duration-100">
      Shop Now
    </button>

    <img src={iphone} alt="" class="md:h-56 absolute right-[7%] bottom-2" />
    {/* add shadow to transpa image using div with absolute */}
    <div class="absolute right-[7%] bottom-2 h-2 w-56 bg-black rounded-lg blur-lg" />
  </section >)
}

function App() {

  return (
    <div class='p-5 h-screen w-[90%] max-w-[1220px] mx-auto text-gray-900'>
      <Navbar />
      <StoreSection />
    </div>
  )
}

export default App
