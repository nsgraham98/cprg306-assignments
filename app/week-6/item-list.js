"use client";
import Item from './item';
import itemsArr from './items.json';
import { useState } from 'react';

export default function ItemList()
{

  const [ sortBy, setSortBy ] = useState('name');

  const sortedArr = [...itemsArr].sort((a, b) => 
    sortBy === 'name'
    ? a.name.localeCompare(b.name)
    : a.category.localeCompare(b.category)
  );

  function handleSortChange(sortType) {
      if (sortType === 'name') {
          setSortBy('name');            
      } 
      else if (sortType === 'category') {
          setSortBy('category');
      }
      else if (sortType === 'groupedCategory') {
          setSortBy('groupedCategory');
      }
  };

  return(
    <section>
      <h1 className="text-3xl font-bold m-2">Shopping List</h1>
            <div className={"flex justify-normal items-center m-5 space-x-4"}>
                <p>Sort by:</p>
                <button 
                    onClick={() => handleSortChange("name")}
                    type="submit" 
                    className={`w-half py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75
                    ${
                        sortBy === 'name' ? 'bg-blue-700' : 'bg-blue-500'
                    }
                    `}>
                        Name
                </button>
                <button 
                    onClick={() => handleSortChange("category")}

                    type="submit" 
                    className={`w-half py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75
                    ${
                        sortBy === 'category' ? 'bg-blue-700' : 'bg-blue-500'
                    }
                    `}>
                        Category
                </button> 
                {/* <button 
                    onClick={() => handleSortChange("groupedCategory")}

                    type="submit" 
                    className={`w-half py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75
                    ${
                        sortBy === 'groupedCategory' ? 'bg-blue-700' : 'bg-blue-500'
                    }
                    `}>
                        Grouped Category
                </button>   */}
            </div>
      
      <div>
        {sortedArr.map((item) => (
          <Item
            name = {item.name}
            quantity = {item.quantity}
            category = {item.category} 
            key = {item.id}           
          />
        ))}
    </div>
  </section>
  );
}