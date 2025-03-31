"use client";
import { useState, useEffect } from 'react';
import HomeButton from "../../components/HomeButton";
import ItemList from "./item-list";
import NewItems from "./newItems";
import MealIdeas from './meal-ideas';
import { useUserAuth } from '../_utils/auth-context';
import { getItems, addItem } from '../_services/shopping-list-service';

export default function Page() 
{
    const userContext = useUserAuth();
    
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState(null);

    const handleAddItem = (item) => {
        const itemId = addItem(userContext.user.uid, item);
        item.id = itemId;
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

    async function loadItems() {
        debugger;
        const items = await getItems(userContext.user.uid);
        setItems(items);
    };

    useEffect(() => {
        loadItems();
    }, []);

    if (!userContext) {
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
                    items={items} 
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