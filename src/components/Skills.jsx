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
  FaCode,
  FaFigma,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiMongodb,
  SiPostman,

} from "react-icons/si";

export default function Skills() {
  const frontend = [
    {
      name: "HTML5",
      icon: <FaHtml5 className="text-5xl text-orange-500" />,
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt className="text-5xl text-blue-500" />,
    },
    {
      name: "JavaScript",
      icon: <FaJs className="text-5xl text-yellow-400" />,
    },
    {
      name: "React",
      icon: <FaReact className="text-5xl text-cyan-400" />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-5xl" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-5xl text-cyan-400" />,
    },
     {
    name: "Figma",
    icon: <FaFigma className="text-5xl text-pink-500" />,
  },
  {
    name: "DaisyUI",
    icon: <SiTailwindcss className="text-5xl text-cyan-400" />,
  }
  ];

  const backend = [
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-5xl text-green-500" />,
    },
    {
      name: "Express.js",
      icon: <SiExpress className="text-5xl" />,
    },
    {
      name: "Prisma",
      icon: <SiPrisma className="text-5xl" />,
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="text-5xl text-blue-500" />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-5xl text-green-500" />,
    },
  ];

  const tools = [
    {
      name: "Git",
      icon: <FaGitAlt className="text-5xl text-orange-500" />,
    },
    {
      name: "GitHub",
      icon: <FaGithub className="text-5xl" />,
    },
    {
      name: "Postman",
      icon: <SiPostman className="text-5xl text-orange-500" />,
    },
    {
      name: "VS Code",
      icon: <FaCode className="text-5xl text-blue-500" />,
    },
  ];

  const SkillCard = ({ title, data }) => (
    <div>
      <h3 className="mb-8 text-3xl font-bold text-cyan-400">{title}</h3>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {data.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.08 }}
            className="bg-[#111827] border border-cyan-500 rounded-2xl p-6 flex flex-col items-center gap-4 hover:shadow-[0_0_20px_#06b6d4] duration-300"
          >
            {skill.icon}

            <h4 className="font-semibold">{skill.name}</h4>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="Skills"
      className="bg-[#050816] text-white py-24 px-6"
    >
      <div className="mx-auto max-w-7xl ">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-center">
            My <span className="text-cyan-400">Skills</span>
          </h2>

          <p className="mt-4 mb-20 text-center text-gray-400">
            Technologies and tools I use for building modern web applications.
          </p>
        </motion.div>

        <div className="mx-6 space-y-16 text-center">

          <SkillCard title="Frontend" data={frontend} />

          <SkillCard title="Backend" data={backend} />

          <SkillCard title="Tools" data={tools} />

        </div>

      </div>
    </section>
  );
}