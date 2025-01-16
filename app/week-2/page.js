import Link from "next/link";
import Student_info from ".//student-info"

export default function Page() {
    return (
      <main>
        <h1>Welcome to week 2</h1>
        <Student_info href=".//student-info">Go to Student Info</Student_info>
        <Link href="/">Go back to Home</Link>
      </main>
    );
  }