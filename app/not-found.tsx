import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <article>
      <h1 className="page-title">Page not found</h1>
      <p className="lede">That URL is not on this site.</p>
      <p>
        <Link href="/">Return to the home page</Link>
        {" · "}
        <Link href="/contact">Contact</Link>
      </p>
    </article>
  );
}
