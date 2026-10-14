
"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 bg-[#0B1120] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-center text-4xl font-bold md:text-5xl">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <p className="mx-auto mb-14 max-w-2xl text-center leading-7 text-gray-400">
            Learn about my journey, interests, and passion for web development.
          </p>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-5 text-3xl font-bold">Who am I?</h3>

            <p className="mb-5 leading-8 text-gray-400">
              I'm <span className="font-semibold text-cyan-400">Busra</span>,
              a web developer passionate about creating clean,
              accessible, and responsive digital experiences.
            </p>

            <p className="mb-5 leading-8 text-gray-400">
              I work with React, Next.js, JavaScript, TypeScript,
              Node.js, Express.js, Prisma ORM, and databases to build
              full-stack web applications.
            </p>

            <p className="leading-8 text-gray-400">
              I believe in continuous learning, writing maintainable
              code, and solving real-world problems through technology.
              My goal is to grow as a professional software engineer
              by building useful projects and improving my skills.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2"
          >
            {[
              {
                title: "Frontend",
                description: "Responsive interfaces and user experiences",
              },
              {
                title: "Backend",
                description: "APIs, authentication, and server-side logic",
              },
              {
                title: "Database",
                description: "Data modeling and database integration",
              },
              {
                title: "Growth",
                description: "Learning, building, and solving problems",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-cyan-500/30 bg-[#111827] p-6 transition hover:-translate-y-1 hover:border-cyan-400"
              >
                <h3 className="mb-3 text-xl font-bold text-cyan-400">
                  {item.title}
                </h3>
                <p className="leading-7 text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
