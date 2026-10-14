
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

const links = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Skills", href: "#skills" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-cyan-500/30 bg-[#050816] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link
              href="#home"
              className="text-3xl font-bold text-cyan-400"
            >
              Busra.
            </Link>

            <p className="mt-4 max-w-sm leading-7 text-gray-400">
              Full Stack Developer passionate about building modern,
              responsive, and useful web applications.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold">Quick Links</h3>

            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 transition hover:text-cyan-400"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold">
              Connect With Me
            </h3>

            <div className="flex gap-5 text-2xl">
              <a
                href="https://github.com/Busra2456"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="transition hover:text-cyan-400"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/hasna-hena-busra-586a69428"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition hover:text-cyan-400"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61560069376204"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="transition hover:text-cyan-400"
              >
                <FaFacebook />
              </a>

              <a
                href="mailto:maisaraisathuya@gmail.com"
                aria-label="Email"
                className="transition hover:text-cyan-400"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Hasna Hena Busra. All Rights Reserved.
          </p>

          <a
            href="#home"
            aria-label="Back to top"
            className="rounded-full bg-cyan-500 p-3 text-[#050816] transition hover:bg-cyan-400"
          >
            <FaArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}
