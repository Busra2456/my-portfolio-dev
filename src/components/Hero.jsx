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
import Link from "next/link";

export default function Hero() {
  return (
    <section id="Home" className="relative overflow-hidden min-h-screen bg-[#050816] text-white flex items-center"
    >
   

      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 blur-[180px] rounded-full"></div>

      <div className="w-full px-6 py-24 mx-auto max-w-7xl">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="mb-4 text-xl font-medium text-cyan-400">
               Hello, I'm
            </p>

            <h1 className="mb-5 text-5xl font-extrabold md:text-7xl">
              Busra
            </h1>

            <h2 className="mb-6 text-2xl font-bold md:text-4xl text-cyan-400">
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "Next.js Developer",
                  "Backend Developer",
                  "React Developer",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={90}
                deleteSpeed={60}
                delaySpeed={1500}
              />
            </h2>

            <p className="max-w-xl mb-10 text-lg leading-8 text-gray-400">
              Passionate Full Stack Developer with experience in React,
              Next.js, Node.js, Express.js, Prisma and PostgreSQL.
              I enjoy building clean, scalable and modern web applications.
            </p>

          

            <div className="flex flex-wrap gap-5 mb-10">

              <button className="py-3 font-semibold duration-300 bg-gradient-to-r from-cyan-500 to-blue-600 px-7 rounded-xl hover:scale-105">
                View Projects
              </button>

              <button className="py-3 font-semibold duration-300 border border-cyan-500 px-7 rounded-xl hover:bg-cyan-500 hover:scale-105">
                Download Resume
              </button>

            </div>

           
          <div className="flex gap-6 text-3xl">
  <a
    href="https://github.com/Busra2456"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaGithub className="duration-300 hover:text-cyan-400 hover:scale-125" />
  </a>

  <a
    href="YOUR_LINKEDIN_URL"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedin className="duration-300 hover:text-cyan-400 hover:scale-125" />
  </a>

  <a
    href="https://www.facebook.com/profile.php?id=61560069376204"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaFacebook className="duration-300 hover:text-cyan-400 hover:scale-125" />
  </a>

  <a href="mailto:maisaraisa938@gmail.com">
    <HiOutlineMail className="duration-300 hover:text-cyan-400 hover:scale-125" />
  </a>
</div>

          </motion.div>

         

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-cyan-400 blur-3xl opacity-40 animate-pulse"></div>

              <Image
                src="/images/profiles.jpg"
                alt="Busra"
                width={420}
                height={420}
                className="relative rounded-full border-8 border-cyan-400 object-cover w-80 h-80 md:w-[350px] md:h-[350px]"
              />

            </div>

          </motion.div>

        </div>

      </div>

<Link href="#About">
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full border border-cyan-400 text-cyan-400 text-3xl cursor-pointer transition-all duration-300 hover:bg-cyan-400 hover:text-[#050816] hover:scale-110 animate-bounce"
>
    <FaArrowDown />
  </div>
</Link>
    
    </section>
  );
}