import ItemList from "./item-list";
import HomeButton from "../components/HomeButton";

export default function Page() 
{

    return (
        <main>
            <HomeButton/>
            <h1 className="text-3xl font-bold m-2">Shopping List</h1>
            <ItemList/>
        </main>
    )
}