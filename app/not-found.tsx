import Link from "next/link";

export default function NotFound() {
  return (
    <section className="block"><div className="wrap text-center">
      <div className="eyebrow">404</div>
      <h1 className="h2">We couldn’t find that page.</h1>
      <Link href="/" className="btn mt-4">Back to home</Link>
    </div></section>
  );
}
