
"use client";

import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "Prisma ORM",
  "PostgreSQL",
  "MongoDB",
  "Git",
  "GitHub",
  "REST API",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 bg-[#050816] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-center text-4xl font-bold md:text-5xl">
            My <span className="text-cyan-400">Skills</span>
          </h2>

          <p className="mb-14 text-center text-gray-400">
            Technologies and tools I use to build web applications.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              viewport={{ once: true }}
              className="rounded-xl border border-cyan-500/30 bg-[#111827] px-6 py-4 font-medium text-cyan-300 transition hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-500/10"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
