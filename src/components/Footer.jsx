import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#050816] border-t border-cyan-500 text-white">

      <div className="px-6 py-12 mx-auto max-w-7xl">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Logo */}

          <div>
            <h2 className="text-3xl font-bold text-cyan-400">
              Busra
            </h2>

            <p className="mt-4 leading-7 text-gray-400">
              Passionate Full Stack Developer building modern,
              responsive and scalable web applications.
            </p>
          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-4 text-xl font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <a href="#home" className="hover:text-cyan-400">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-cyan-400">
                  About
                </a>
              </li>

              <li>
                <a href="#skills" className="hover:text-cyan-400">
                  Skills
                </a>
              </li>

              <li>
                <a href="#projects" className="hover:text-cyan-400">
                  Projects
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-cyan-400">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Social */}

          <div>

            <h3 className="mb-4 text-xl font-semibold">
              Connect With Me
            </h3>

            <div className="flex gap-5 text-2xl">

              <a
                href="https://github.com/Busra2456"
                target="_blank"
                className="duration-300 hover:text-cyan-400"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="duration-300 hover:text-cyan-400"
              >
                <FaLinkedin />
              </a>

              <a
                href="#"
                className="duration-300 hover:text-cyan-400"
              >
                <FaFacebook />
              </a>

              <a
                href="mailto:your@email.com"
                className="duration-300 hover:text-cyan-400"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-4 pt-6 mt-10 border-t border-gray-700 md:flex-row">

          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Busra. All Rights Reserved.
          </p>

          <a
            href="#home"
            className="p-3 duration-300 rounded-full bg-cyan-500 hover:bg-cyan-600"
          >
            <FaArrowUp />
          </a>

        </div>

      </div>

    </footer>
  );
}