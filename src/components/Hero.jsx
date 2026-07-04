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
    <section id="home" className="relative overflow-hidden min-h-screen bg-[#050816] text-white flex items-center"
    >
   

      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 blur-[180px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 py-24 w-full">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-cyan-400 text-xl mb-4 font-medium">
               Hello, I'm
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-5">
              Busra
            </h1>

            <h2 className="text-2xl md:text-4xl font-bold text-cyan-400 mb-6">
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

            <p className="text-gray-400 text-lg leading-8 max-w-xl mb-10">
              Passionate Full Stack Developer with experience in React,
              Next.js, Node.js, Express.js, Prisma and PostgreSQL.
              I enjoy building clean, scalable and modern web applications.
            </p>

          

            <div className="flex flex-wrap gap-5 mb-10">

              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3 rounded-xl font-semibold hover:scale-105 duration-300">
                View Projects
              </button>

              <button className="border border-cyan-500 px-7 py-3 rounded-xl font-semibold hover:bg-cyan-500 hover:scale-105 duration-300">
                Download Resume
              </button>

            </div>

           
          <div className="flex gap-6 text-3xl">
  <a
    href="https://github.com/Busra2456"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaGithub className="hover:text-cyan-400 hover:scale-125 duration-300" />
  </a>

  <a
    href="YOUR_LINKEDIN_URL"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedin className="hover:text-cyan-400 hover:scale-125 duration-300" />
  </a>

  <a
    href="https://www.facebook.com/profile.php?id=61560069376204"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaFacebook className="hover:text-cyan-400 hover:scale-125 duration-300" />
  </a>

  <a href="mailto:maisaraisa938@gmail.com">
    <HiOutlineMail className="hover:text-cyan-400 hover:scale-125 duration-300" />
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

    

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-cyan-400 text-3xl">
        <FaArrowDown />
      </div>
    </section>
  );
}