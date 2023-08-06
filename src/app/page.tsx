import Link from "next/link";
import { signOut } from "next-auth/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Prisma at Edge errors
      <div>
        <ul>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li
            onClick={() => {
              signOut();
            }}
          >
            Sign out
          </li>
        </ul>
      </div>
    </main>
  );
}
