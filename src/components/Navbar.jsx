
"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { title: "Home", path: "#home" },
  { title: "About", path: "#about" },
  { title: "Skills", path: "#skills" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050816]/90 text-white shadow-lg backdrop-blur-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="#home"
          className="text-2xl font-bold text-cyan-400"
          onClick={() => setMenuOpen(false)}
        >
          Busra<span className="text-white">.</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="font-medium transition hover:text-cyan-400"
            >
              {item.title}
            </Link>
          ))}
        </div>

        <a
          href="/resume.pdf"
          download="Hasna-Hena-Busra-Resume.pdf"
          className="hidden rounded-lg bg-cyan-500 px-5 py-2 font-semibold text-[#050816] transition hover:bg-cyan-400 md:inline-flex"
        >
          Resume
        </a>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-cyan-400 md:hidden"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#0B1120] px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setMenuOpen(false)}
                className="transition hover:text-cyan-400"
              >
                {item.title}
              </Link>
            ))}

            <a
              href="/resume.pdf"
              download="Hasna-Hena-Busra-Resume.pdf"
              className="inline-flex w-fit rounded-lg bg-cyan-500 px-5 py-2 font-semibold text-[#050816]"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
