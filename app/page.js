import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div class="z-10 max-w-5xl w-full items-center justify-between text-sm">
        <h1 class="text-4xl font-bold mb-5">CPRG 306: Web Development 2 - Assignments</h1>
        <div class="text-lg">
          <ul>
            <li><Link href="/week-2" className="hover:text-green-400 hover:underline">Week 2 Assignment</Link></li>
            <li><Link href="/week3" className="hover:text-green-400 hover:underline">Week 3 Assignment</Link></li>
          </ul>
        </div>
      </div>
    </main>
  );
}

// npx create-next-app@latest
// command to create new app

// npm run dev
// command to start app in browser
