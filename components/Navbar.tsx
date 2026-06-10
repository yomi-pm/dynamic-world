import Link from "next/link";
import Container from "./Container";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <Container>
        <div className="h-20 flex items-center justify-between">
          <Link href="/">
            <h1 className="font-semibold text-xl tracking-tight">
              Research Desk
            </h1>
          </Link>

          <nav className="hidden md:flex gap-8 text-sm">
            <Link href="/project-topics">Research Topics</Link>

            <Link href="/resources">Resources</Link>

            <Link href="/learn">Learn</Link>

            <Link href="/tools">Tools</Link>

            <Link href="/services">Services</Link>

            <Link href="/about">About Us</Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}
