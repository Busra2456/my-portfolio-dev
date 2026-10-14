
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projects from "@/data/projects.json";

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 bg-[#0B1120] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-center text-4xl font-bold md:text-5xl">
            My <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="mb-14 text-center text-gray-400">
            A selection of projects I've worked on.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="overflow-hidden rounded-2xl border border-cyan-500/30 bg-[#111827] transition hover:border-cyan-400"
            >
              <Image
                src={project.image}
                alt={`${project.title} project preview`}
                width={600}
                height={350}
                className="h-52 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="mb-3 text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mb-5 leading-7 text-gray-400">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 transition hover:text-cyan-400"
                  >
                    <FaGithub /> GitHub
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 transition hover:text-cyan-400"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
