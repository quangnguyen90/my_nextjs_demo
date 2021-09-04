import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>Home page</p>
      <Link href="/about">Go to About Page</Link>
      <Link href="/profile">Go to Profile Page</Link>
    </div>
  );
}
