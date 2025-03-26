"use client";
import { useState } from 'react';
import HomeButton from "../../components/HomeButton";
import ItemList from "./item-list";
import NewItems from "./newItems";
import itemsData from './items.json';
import MealIdeas from './meal-ideas';
import { useUserAuth } from '../_utils/auth-context';

export default function Page() 
{
    const { user } = useUserAuth();
    
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
    
    const handleItemSelect = (item) => {  
        const name = cleanItemString(item.name);    
        setSelectedItemName(name);
    };

    if (!user) {
        return (
            <div>
                <p className="text-2xl font-bold m-2">
                    Your need to be signed in to view this page.
                </p> 
                <HomeButton />
            </div>
        )
    }
    return (
        <main className="flex flex-row">
            <div>
                <NewItems 
                    onAddItem={handleAddItem}/>                
                <ItemList 
                    items={itemsData} 
                    onItemSelect={(item) => handleItemSelect(item)} 
                />   
            </div>
            <div>
                <MealIdeas ingredient={selectedItemName} />
                <HomeButton />
            </div>
        </main>
    );
}