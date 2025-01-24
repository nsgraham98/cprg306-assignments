import Link from "next/link";
import Student_info from ".//student-info"
import Title from "./title"

export default function Page() {

  // let a = 5;
  // let b = 10;

    return (
      <main>
        <Link href="/" className="absolute right-2 top-2">Go back to Home</Link>
        {/* <h1>Welcome to week 2</h1> */}
        <h1>Shopping List</h1>
        <Student_info href=".//student-info">Go to Student Info</Student_info>    
        {/* <p>{a} + {b} is {a+b}</p> */}
      </main>
    );
  }