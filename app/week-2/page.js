import Student_info from ".//student-info"
import HomeButton from "../components/HomeButton";

export default function Page() {

  // let a = 5;
  // let b = 10;

    return (
      <main>
        <HomeButton/>
        {/* <h1>Welcome to week 2</h1> */}
        <h1>Shopping List</h1>
        <Student_info href=".//student-info">Go to Student Info</Student_info>    
        {/* <p>{a} + {b} is {a+b}</p> */}
      </main>
    );
  }