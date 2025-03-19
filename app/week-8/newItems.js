"use client"
import {useState} from 'react';

export default function NewItems({onAddItem})
{
    const [quantity, setQuantity] = useState(1);

    const increment = (event) => {
        event.preventDefault();
        setQuantity(quantity + 1); }
    const decrement = (event) => {
        event.preventDefault();
        setQuantity(quantity - 1); }

    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const id = () => Math.random().toString(36).substring(2, 18); 
        const item = {
            id,
            name,
            quantity,
            category
        };
                  
        console.log(item);
        onAddItem(item);
        setName("");
        setCategory("produce");
        setQuantity(1);
        return(item);
    }

    const handleChange = (event) => {
        const {name, value} = event.target;

        if (name === "name") setName(value);
        if (name === "category") setCategory(value.toLowerCase());
    };
       

    return(
        
        <main className="w-80 bg-slate-900 m-5 flex">

            <form 
                onSubmit={handleSubmit}
                className="p-4"
            >

                <input 
                    name="name" 
                    type="text" 
                    value={name} 
                    onChange={handleChange} 
                    placeholder="Item Name" 
                    required
                    className="w-full px-2 py-1 rounded-md mb-4 text-black"
                />

                <select 
                    name="category" 
                    value={category} 
                    onChange={handleChange}
                    className="w-full px-2 py-1 rounded-md mb-4 text-black"
                >
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen foods">Frozen Foods</option>
                    <option value="canned goods">Canned Goods</option>
                    <option value="dry goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>

                <div className="flex">
                    <div className="text-white text-2xl m-5">{quantity}</div>
                    <div className="flex">
                        <button
                            onClick={decrement}
                            disabled={quantity <= 1}
                            className={`p-3 m-3 rounded-lg border-none 
                            ${
                                quantity <= 1 ? 
                                    "bg-gray-500 hover:bg-gray-500"
                                    : "bg-green-800 hover:bg-green-900 active:bg-green-950"
                            }`}
                        >
                            Decrement
                        </button>
                        <button
                            onClick={increment}
                            disabled={quantity >= 20}
                            className={`p-3 m-3 rounded-lg border-none 
                            ${
                                quantity >= 20
                                    ? "bg-gray-500 hover:bg-gray-500"
                                    : "bg-green-800 hover:bg-green-900 active:bg-green-950"
                            }`}
                        >
                            Increment
                        </button>
                    </div>
                </div>

                <button 
                    type="submit" 
                    className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                >
                    Add to List
                </button>
            </form>
        </main>
    );
}