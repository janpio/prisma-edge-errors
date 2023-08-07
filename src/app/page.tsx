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
          <li>
            <Link href="/misc001">Misc 1</Link>
          </li>
          <li>
            <Link href="/misc002">Misc 2</Link>
          </li>
          <li>
            <Link href="/misc003">Misc 3</Link>
          </li>
          <li>
            <Link href="/misc004">Misc 4</Link>
          </li>
          <li>
            <Link href="/misc005">Misc 5</Link>
          </li>
          <li>
            <Link href="/misc006">Misc 6</Link>
          </li>
          <li>
            <Link href="/misc007">Misc 7</Link>
          </li>
          <li>
            <Link href="/misc008">Misc 8</Link>
          </li>
          <li>
            <Link href="/api/auth/signout" prefetch={false}>
              Sign out
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
