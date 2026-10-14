"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (isSending) return;

    const serviceId =
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId =
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey =
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus(
        "Email service is not configured. Please try again later."
      );
      return;
    }

    setIsSending(true);
    setStatus("Sending your message...");

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        { publicKey }
      );

      setStatus(
        "Message sent successfully! Thank you for contacting me."
      );

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus(
        "Unable to send your message. Please try again later."
      );
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section id="contact" className="section-padding bg-[#080d1b]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Get In Touch
          </p>

          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Let&apos;s Work{" "}
            <span className="text-cyan-400">Together</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Have a project idea or an opportunity? Feel free to contact me.
            I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 md:p-9"
          >
            <h3 className="mb-5 text-2xl font-bold text-white">
              Contact Information
            </h3>

            <p className="mb-8 leading-7 text-gray-400">
              I&apos;m interested in frontend development, full-stack
              applications, and opportunities to build useful products.
            </p>

            <a
              href="mailto:maisaraisa938@gmail.com"
              className="mb-6 flex items-center gap-4 text-gray-300 transition hover:text-cyan-400"
            >
              <span className="rounded-xl bg-cyan-400/10 p-4 text-xl text-cyan-400">
                <FaEnvelope />
              </span>

              <span>
                <span className="block text-sm text-gray-500">
                  Email
                </span>
                maisaraisa938@gmail.com
              </span>
            </a>

            <div className="mt-8 flex gap-4">
              <a
                href="https://github.com/Busra2456"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="rounded-xl border border-white/10 p-4 text-xl text-gray-300 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/hasna-hena-busra-586a69428"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="rounded-xl border border-white/10 p-4 text-xl text-gray-300 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5 rounded-2xl border border-white/10 bg-white/[0.03] p-7 md:p-9"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm text-gray-300"
              >
                Your Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full rounded-xl border border-white/10 bg-[#0b1224] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm text-gray-300"
              >
                Your Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full rounded-xl border border-white/10 bg-[#0b1224] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm text-gray-300"
              >
                Your Message
              </label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={5}
                required
                className="w-full resize-y rounded-xl border border-white/10 bg-[#0b1224] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400"
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-cyan-400 px-6 py-3 font-bold text-[#07111f] transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSending ? "Sending..." : "Send Message"}
              <FaPaperPlane />
            </button>

            {status && (
              <p role="status" className="text-sm text-cyan-300">
                {status}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}