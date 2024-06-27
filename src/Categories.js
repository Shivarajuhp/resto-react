import React from "react"

function Categories(props) {
  return (
    <div className="text-center">
      {props.Categories.map((category) => {
        return (
          <button type="button" onClick={() => props.filterItems(category)} className="bg-gray-300 hover:bg-indigo-600 hover:text-white text-gray-800 font-bold py-2 px-4 rounded mr-2">
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default Categories
