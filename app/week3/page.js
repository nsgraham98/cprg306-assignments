import Link from "next/link";
import ItemList from "./item-list";

export default function Page() 
{

    return (
        <main>
            <Link href="/" className="absolute right-2 top-2">Go back to Home</Link>
            <h1 className="text-3xl font-bold m-2">Shopping List</h1>
            <ItemList/>
        </main>
    )
}