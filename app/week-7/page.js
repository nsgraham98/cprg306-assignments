"use client";
import { useState } from 'react';
import HomeButton from "../components/HomeButton";
import ItemList from "./item-list";
import NewItems from "./newItems";
import itemsData from './items.json';

export default function Page() 
{
    const [items, setItems] = useState([...itemsData]);

    const handleAddItem = (item) => {
        setItems([...items, item]);
    };

    return (
        <main>
            <NewItems onAddItem={handleAddItem}/>
            <HomeButton/>
            <ItemList itemsState={items}/>            
        </main>
    )
}