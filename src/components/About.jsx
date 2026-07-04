"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#0B1120] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
            Get to know more about me, my journey, and the technologies I enjoy working with.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">
              Who am I?
            </h3>

            <p className="text-gray-400 leading-8 mb-6">
              I'm <span className="text-cyan-400 font-semibold">Busra</span>, a passionate Full Stack Developer
              who enjoys building modern and scalable web applications.
            </p>

            <p className="text-gray-400 leading-8 mb-6">
              I have experience with React, Next.js, Node.js, Express.js,
              Prisma ORM, PostgreSQL, MongoDB and JWT Authentication.
            </p>

            <p className="text-gray-400 leading-8">
              My goal is to become a professional software engineer by
              continuously improving my skills and building impactful projects.
            </p>
          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >

            <div className="bg-[#111827] p-6 rounded-2xl border border-cyan-500">
              <h3 className="text-4xl font-bold text-cyan-400">
                10+
              </h3>
              <p className="mt-3 text-gray-400">
                Technologies Learned
              </p>
            </div>

            <div className="bg-[#111827] p-6 rounded-2xl border border-cyan-500">
              <h3 className="text-4xl font-bold text-cyan-400">
                5+
              </h3>
              <p className="mt-3 text-gray-400">
                Projects Completed
              </p>
            </div>

            <div className="bg-[#111827] p-6 rounded-2xl border border-cyan-500">
              <h3 className="text-4xl font-bold text-cyan-400">
                2+
              </h3>
              <p className="mt-3 text-gray-400">
                Years of Learning
              </p>
            </div>

            <div className="bg-[#111827] p-6 rounded-2xl border border-cyan-500">
              <h3 className="text-4xl font-bold text-cyan-400">
                100%
              </h3>
              <p className="mt-3 text-gray-400">
                Passion for Coding
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}