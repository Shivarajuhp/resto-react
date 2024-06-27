import React, { useState } from "react"
import "./App.css"
import items from "./Data.js"
import Menu from "./Menu.js"
import Categories from "./Categories.js"

//getting each category name here. and Set method will ignore duplicate values
const Allcategories = ["all", ...new Set(items.map((item) => item.category))]

//Parent Component
function App() {
  const [menuitems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(Allcategories)
  //useState - will return an array with 2 values. 1- the value inside the state and 2- function

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items)
      return
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  return (
    <>
      <section className=" menu-heading">
        <h2 className="text-center font-semibold text-5xl text-indigo-600 my-24">Restaurant Menu</h2>
      </section>
      <div className="container">
        <Categories Categories={categories} filterItems={filterItems} />
        <Menu items={menuitems} />
      </div>
    </>
  )
}

export default App
