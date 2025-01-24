import Link from "next/link";

export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm">
        <h1 className="text-4xl font-bold mb-5">CPRG 306: Web Development 2 - Assignments</h1>
        <div className="text-lg">
          <ul>
            <li><Link href="/demos" className="hover:text-green-400 hover:underline">Demos</Link></li>
            <li><Link href="/week-2" className="hover:text-green-400 hover:underline">Week 2 Assignment</Link></li>
            <li><Link href="/week-3" className="hover:text-green-400 hover:underline">Week 3 Assignment</Link></li>
            <li><Link href="/week-4" className="hover:text-green-400 hover:underline">Week 4 Assignment</Link></li>
            <li><Link href="/week-5" className="hover:text-green-400 hover:underline">Week 5 Assignment</Link></li>
            <li><Link href="/week-6" className="hover:text-green-400 hover:underline">Week 6 Assignment</Link></li>
            <li><Link href="/week-7" className="hover:text-green-400 hover:underline">Week 7 Assignment</Link></li>
            <li><Link href="/week-8" className="hover:text-green-400 hover:underline">Week 8 Assignment</Link></li>
            <li><Link href="/week-9" className="hover:text-green-400 hover:underline">Week 9 Assignment</Link></li>
            <li><Link href="/week-10" className="hover:text-green-400 hover:underline">Week 10 Assignment</Link></li>
          </ul>
        </div>
      </div>
    </main>
  );
}

// cd c:\webdev2\cprg306-assignments 

// npx create-next-app@latest
// command to create new app

// npm install
// installs necessary npm files to project folder

// npm run dev
// command to start app in browser

