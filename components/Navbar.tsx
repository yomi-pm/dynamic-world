"use client";

import Link from "next/link";
import { useState } from "react";
import Container from "./Container";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b relative">
      <Container>
        <div className="h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Research Desk"
              width={180}
              height={50}
              priority
              className="h-30 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-sm">
            <Link href="/project-topics">Research Topics</Link>
            <Link href="/resources">Resources</Link>
            {/* <Link href="/learn">Learn</Link>*/}
            {/*<Link href="/tools">Tools</Link>*/}
            <Link href="/services">Services</Link>
            <Link href="/about">About Us</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-2xl"
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
          <div className="flex flex-col p-6 gap-5 text-sm">
            <Link
              href="/project-topics"
              onClick={() => setMobileMenuOpen(false)}
            >
              Research Topics
            </Link>

            <Link href="/resources" onClick={() => setMobileMenuOpen(false)}>
              Resources
            </Link>

            <Link href="/learn" onClick={() => setMobileMenuOpen(false)}>
              Learn
            </Link>

            <Link href="/tools" onClick={() => setMobileMenuOpen(false)}>
              Tools
            </Link>

            <Link href="/services" onClick={() => setMobileMenuOpen(false)}>
              Services
            </Link>

            <Link href="/about" onClick={() => setMobileMenuOpen(false)}>
              About Us
            </Link>

            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
