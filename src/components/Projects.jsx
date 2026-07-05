"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projects from "@/data/projects.json";

export default function Projects() {
      
  return (
    <section
      id="projects"
      className="bg-[#0B1120] text-white py-24 px-6"
    >
      <div className="mx-auto max-w-7xl">

        <h2 className="mb-4 text-5xl font-bold text-center">
          My <span className="text-cyan-400">Projects</span>
        </h2>

        <p className="mb-16 text-center text-gray-400">
          Some of my recent projects.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (

            <motion.div
              key={project.id}
              whileHover={{ y: -10 }}
              className="bg-[#111827] rounded-2xl overflow-hidden border border-cyan-500"
            >

     <Image
  src={project.image}
  alt={project.title}
  width={600}
  height={350}
  className="object-cover w-full h-56"
/>
              <div className="p-6">

                <h3 className="mb-3 text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mb-5 text-gray-400">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">

                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full bg-cyan-500/20 text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                <div className="flex gap-4">

                  <a
  href={project.github}
  target="_blank"
  rel="noopener noreferrer"
>
                    <FaGithub />
                    GitHub
                  </a>

     
  <a
  href={project.live}
  target="_blank"
  rel="noopener noreferrer"
>
                    <FaExternalLinkAlt />
                    Live
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}