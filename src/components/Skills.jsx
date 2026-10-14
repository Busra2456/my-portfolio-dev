
"use client";

import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
  SiApifox,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", icon: FaNodeJs, color: "#5FA04E" },
  { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
  { name: "Prisma ORM", icon: SiPrisma, color: "#FFFFFF" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
  { name: "REST API", icon: SiApifox, color: "#00C4B3" },
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

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                viewport={{ once: true }}
                className="group flex flex-col items-center justify-center gap-4 rounded-2xl border border-cyan-500/30 bg-[#111827] px-4 py-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <Icon
                  size={42}
                  style={{ color: skill.color }}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:scale-110"
                />

                <span className="text-center text-sm font-semibold text-gray-200 transition group-hover:text-cyan-300 sm:text-base">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
