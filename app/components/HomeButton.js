import Link from "next/link";

export default function HomeButton(){
    return(
        <Link href="/" className="bg-green-800 absolute right-0 top-0 p-5 m-5 rounded-lg border-none hover:bg-green-900 active:bg-green-950">
            <div className="text-lg">Go back to Home</div>
        </Link>
    );
}