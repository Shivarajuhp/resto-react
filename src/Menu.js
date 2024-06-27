import React from "react"
import { IoCart } from "react-icons/io5"
import { FaSackDollar } from "react-icons/fa6"
import { GiCookingPot } from "react-icons/gi"

function Menu(props) {
  // console.log(props.items)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-10 mb-10">
      {props.items.map((menuItem) => {
        return (
          <article className="rounded-md overflow-hidden shadow-lg flex flex-col">
            <div className="h-52 overflow-hidden relative">
              <img src={menuItem.img} alt={menuItem.title} className="menu-item w-full object-fill"></img>
              <div class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              <a href="#!">
                <div class="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out justify-between flex">
                  <GiCookingPot size="1rem" className="mr-2" />
                  Cooking
                </div>
              </a>
            </div>

            <div className="bg-white-500 py-5 px-5">
              <h4 className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">{menuItem.title}</h4>
              <p className="text-gray-500 text-sm">{menuItem.desc}</p>
            </div>
            <div className="bottom-strip px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
              <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                <FaSackDollar size="0.8rem" className="mr-1" />

                {menuItem.price}
              </span>
              <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                <IoCart size="1rem" className="mr-1" />
                Add
              </span>
            </div>
          </article>
        )
      })}
    </div>
  )
}
export default Menu
