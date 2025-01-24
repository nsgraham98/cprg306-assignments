"use client"
import {useState} from 'react';

export default function NewItems()
{
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        setQuantity(quantity + 1);
    }

    const decrement = () => {
        setQuantity(quantity - 1)
    }

return(
    <main className="w-80 bg-slate-900 m-5 flex">
        <p className="text-white text-2xl m-5">{quantity}</p>
        {quantity <= 1 ? (
            <>
                <button className="bg-gray-500 p-3 m-3 rounded-lg border-none hover:bg-gray-600">Decrement</button>
                <button onClick={increment} className="bg-green-800 p-3 m-3 rounded-lg border-none hover:bg-green-900 active:bg-green-950">Increment</button>
            </>
        ) : quantity >= 20 ? (
            <>
                <button onClick={decrement} className="bg-green-800 p-3 m-3 rounded-lg border-none hover:bg-green-900 active:bg-green-950">Decrement</button>
                <button className="bg-gray-500 p-3 m-3 rounded-lg border-none hover:bg-gray-600">Increment</button>
            </>
        ) : (
            <>
                <button onClick={decrement} className="bg-green-800 p-3 m-3 rounded-lg border-none hover:bg-green-900 active:bg-green-950">Decrement</button>
                <button onClick={increment} className="bg-green-800 p-3 m-3 rounded-lg border-none hover:bg-green-900 active:bg-green-950">Increment</button>
            </>
        )}
    </main>
)




    // if (quantity <= 1){
    //     return (
    //         <main className="w-64 bg-slate-900 m-5 flex">
    //             <p className="text-white text-2xl text-bold m-5" >{quantity}</p>      
    //             <button className="bg-gray-500 p-3 m-3 rounded-lg border-none hover:bg-gray-600" >Decrement</button>
    //             <button onClick={increment} className="bg-green-800 p-3 m-3 rounded-lg border-none hover:bg-green-900 active:bg-green-950" >Increment</button>
    //         </main>
    //     );
    // }
    // if (quantity >= 20){
    //     return (
    //         <main className="w-64 bg-slate-900 m-5 flex">
    //             <p className="text-white text-2xl text-bold m-5">{quantity}</p>      
    //             <button onClick={decrement} className="bg-green-800 p-3 m-3 rounded-lg border-none hover:bg-green-900 active:bg-green-950" >Decrement</button>
    //             <button className="bg-gray-500 p-3 m-3 rounded-lg border-none hover:bg-gray-600" >Increment</button>
    //         </main>
    //     );
    // }
    // else{
    //     return (
    //         <main className="w-64 bg-slate-900 m-5 flex">
    //             <p className="text-white text-2xl m-5">{quantity}</p>      
    //             <button onClick={decrement} className="bg-green-800 p-3 m-3 rounded-lg border-none hover:bg-green-900 active:bg-green-950" >Decrement</button>
    //             <button onClick={increment} className="bg-green-800 p-3 m-3 rounded-lg border-none hover:bg-green-900 active:bg-green-950" >Increment</button>
    //         </main>
    //     );
    // }
    
}