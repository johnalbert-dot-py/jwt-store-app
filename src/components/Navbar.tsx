import { ShoppingBag, User } from "lucide-solid";

export default function Navbar() {
  return (<nav class="flex flex-row justify-between align-bottom items-center font-inter gap-2">

    <h1 class='text-2xl font-bold text-primary'>Connect.</h1>

    <div class="text-gray-800 flex flex-row justify-center gap-9 text-base w-[43%]">
      <a class="link" href="#">Home</a>
      <a class="link" href="#">About Us</a>
      <a class="link" href="#">Gadgets</a>
      <a class="link wiggle relative" href="#">New Stocks <small class=" text-white rounded-lg ml-1 absolute -top-1 text-xs">🔥</small></a>
    </div>

    <div class="w-auto grow">
      <input type="text" class='border border-gray-200 rounded-md outline-none px-2 py-2 w-full text-sm' placeholder='Search your iPhone here...' />
    </div>

    <div class="flex flex-row items-center align-middle justify-end gap-5 w-[15%]">
      <span class="flex flex-row gap-1 group link">
        <User size={18} class="link" />
        <a href="#">Sign In</a>
      </span>

      <span class="flex flex-row gap-1 link">
        <ShoppingBag class="link group-hover:stroke-3" size={18} />
        <a href="#">Bag</a>
      </span>
    </div>
  </nav>)
}