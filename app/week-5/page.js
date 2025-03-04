"use client";
import HomeButton from "../components/HomeButton";
import NewItems from "./newItems";
import Toggle from "./toggle";
import Alert from "./alert";

export default function Page() 
{
    return (
        <main>
            <HomeButton/>
            <NewItems/>
            <Toggle/>
            <Alert type="success"/>
        </main>
    )
}