"use client";
import { useState } from 'react';
import HomeButton from "../components/HomeButton";
import ItemList from "./item-list";
import NewItems from "./newItems";
import itemsData from './items.json';
import MealIdeas from './meal-ideas';

export default function Page() 
{
    const [items, setItems] = useState([...itemsData]);
    const [selectedItemName, setSelectedItemName] = useState('');

    const handleAddItem = (item) => {
        setItems([...items, item]);
    };

    const cleanItemString = (name) => {
        name = name.split(",")[0];
        name = name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
        name = name.trim();
        return name;
    }
    
    const handleItemSelect = (name) => {  
        name = cleanItemString(name);    
        setSelectedItemName(name);
    };

    return (
        <main className="flex flex-row">
            <div>
                <NewItems 
                    onAddItem={handleAddItem}/>                
                <ItemList 
                    itemsState={items} 
                    onItemSelect={(name) => handleItemSelect(name)} 
                />    
            </div>    
            <div>
                <MealIdeas 
                    ingredient={selectedItemName}/> 
                <HomeButton/> 
            </div>                      
        </main>
    )
}