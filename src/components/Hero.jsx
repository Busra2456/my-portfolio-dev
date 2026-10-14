
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaArrowDown,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen scroll-mt-20 items-center overflow-hidden bg-[#050816] px-6 pb-16 pt-28 text-white"
    >
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-[150px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-purple-600/20 blur-[150px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 text-xl font-medium text-cyan-400">
            Hello, I'm
          </p>

          <h1 className="mb-5 text-5xl font-extrabold md:text-7xl">
            Hasna Hena Busra
          </h1>

          <h2 className="mb-6 text-2xl font-bold text-cyan-400 md:text-4xl">
            <Typewriter
              words={[
                "Full Stack Developer",
                "Frontend Developer",
                "Backend Developer",
                "Next.js Developer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={65}
              deleteSpeed={40}
              delaySpeed={1200}
            />
          </h2>

          <p className="mb-9 max-w-xl text-lg leading-8 text-gray-400">
            I enjoy building modern, responsive, and user-friendly
            web applications. I work with React, Next.js, Node.js,
            Express.js, Prisma, and PostgreSQL to turn ideas into
            practical digital experiences.
          </p>

          <div className="mb-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3 font-semibold transition hover:scale-105"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              download="Hasna-Hena-Busra-Resume.pdf"
              className="rounded-xl border border-cyan-400 px-7 py-3 font-semibold transition hover:bg-cyan-500 hover:text-[#050816]"
            >
              Download Resume
            </a>
          </div>

          <div className="flex items-center gap-6 text-3xl">
            <a
              href="https://github.com/Busra2456"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition hover:scale-125 hover:text-cyan-400"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/hasna-hena-busra-586a69428"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition hover:scale-125 hover:text-cyan-400"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61560069376204"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="transition hover:scale-125 hover:text-cyan-400"
            >
              <FaFacebook />
            </a>

            <a
              href="mailto:maisaraisathuya@gmail.com"
              aria-label="Email"
              className="transition hover:scale-125 hover:text-cyan-400"
            >
              <HiOutlineMail />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-cyan-400/40 blur-3xl" />

            <Image
              src="/images/profiles.jpg"
              alt="Hasna Hena Busra - Full Stack Developer"
              width={420}
              height={420}
              priority
              className="relative h-72 w-72 rounded-full border-4 border-cyan-400 object-cover shadow-2xl shadow-cyan-500/20 sm:h-80 sm:w-80 md:h-[380px] md:w-[380px]"
            />
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-5 left-1/2 -translate-x-1/2 animate-bounce rounded-full border border-cyan-400 p-3 text-2xl text-cyan-400 transition hover:bg-cyan-400 hover:text-[#050816]"
      >
        <FaArrowDown />
      </a>
    </section>
  );
}
