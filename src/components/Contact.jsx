"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#0B1120] text-white py-24 px-6"
    >
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-center">
            Contact <span className="text-cyan-400">Me</span>
          </h2>

          <p className="mt-4 mb-16 text-center text-gray-400">
            Feel free to contact me anytime.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Left Side */}

          <div className="space-y-8">

            <div className="flex items-center gap-5 bg-[#111827] p-5 rounded-xl">

              <FaEnvelope className="text-3xl text-cyan-400" />

              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-400">
                  maisaraisathuya@gmail.com
                </p>
              </div>

            </div>

            <div className="flex items-center gap-5 bg-[#111827] p-5 rounded-xl">

              <FaPhoneAlt className="text-3xl text-cyan-400" />

              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-400">
                  +8801XXXXXXXXX
                </p>
              </div>

            </div>

            <div className="flex items-center gap-5 bg-[#111827] p-5 rounded-xl">

              <FaMapMarkerAlt className="text-3xl text-cyan-400" />

              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-400">
                  Bangladesh
                </p>
              </div>

            </div>

            <div className="flex gap-5 mt-6 text-3xl">

              <a href="https://github.com/Busra2456" target="_blank">
                <FaGithub className="duration-300 hover:text-cyan-400" />
              </a>

              <a href="#">
                <FaLinkedin className="duration-300 hover:text-cyan-400" />
              </a>

            </div>

          </div>


          <form className="bg-[#111827] p-8 rounded-2xl space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-lg bg-[#1F2937] outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-lg bg-[#1F2937] outline-none"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full p-4 rounded-lg bg-[#1F2937] outline-none"
            ></textarea>

            <button
              className="w-full py-4 font-semibold duration-300 rounded-lg bg-cyan-500 hover:bg-cyan-600"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}