"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="About"
      className="bg-[#0B1120] text-white py-24 px-6"
    >
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-4xl font-bold text-center">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <p className="max-w-3xl mx-auto mb-16 text-center text-gray-400">
            Get to know more about me, my journey, and the technologies I enjoy working with.
          </p>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-3xl font-bold">
              Who am I?
            </h3>

            <p className="mb-6 leading-8 text-gray-400">
              I'm <span className="font-semibold text-cyan-400">Busra</span>, a passionate Full Stack Developer
              who enjoys building modern and scalable web applications.
            </p>

            <p className="mb-6 leading-8 text-gray-400">
              I have experience with React, Next.js, Node.js, Express.js,
              Prisma ORM, PostgreSQL, MongoDB and JWT Authentication.
            </p>

            <p className="leading-8 text-gray-400">
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