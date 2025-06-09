import { motion, AnimatePresence } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { useState } from "react";
import Appshell from "../components/navbar";

export const AboutPage = () => {
  const [showPreview, setShowPreview] = useState(false);

  const journeySteps = [
    "Started BCA at Crimoon College of Technology",
    "Built my first full-stack application",
    "Contributed to open-source and freelance projects",
    "Launched a personal portfolio and freelance services",
    "Interned as a MERN Stack Developer",
    "Completed 5+ projects and worked with real clients",
  ];

  return (
    <>
      <Appshell />
      <section className="bg-gradient-to-b from-slate-900 to-slate-950 text-white py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src="../../public/website.jpg"
              alt="Kiran Aryal"
              className="w-full max-w-sm aspect-[3/4] object-cover rounded-xl shadow-lg border border-gray-700"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm <span className="font-semibold text-white">Kiran Aryal</span>, a Full Stack Developer and Editor currently in my 6th semester of studying BCA at Crimoon College of Technology. I have a passion for creating dynamic web applications and an eye for detail in editing content. My journey in technology has equipped me with a diverse skill set, allowing me to work on both front-end and back-end development. I’m always eager to explore new technologies and grow.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-xl mb-2">What I Do</h4>
                <ul className="list-disc ml-5 space-y-1 text-gray-300">
                  {[
                    "Frontend with React, TailwindCSS, TypeScript",
                    "Backend using Node.js, Express, MongoDB",
                    "API Integration, JWT Auth, File uploads",
                    "Deploying to Vercel, Netlify, and Render",
                  ].map((item, i) => (
                    <li key={i} className="transition hover:text-sky-400">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-xl mb-2">Core Values</h4>
                <ul className="list-disc ml-5 space-y-1 text-gray-300">
                  {[
                    "Performance, Accessibility, and Precision",
                    "User-first design & scalable architecture",
                    "Continuous learning & innovation",
                  ].map((item, i) => (
                    <li key={i} className="transition hover:text-sky-400">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              <a
                href="/contact"
                className="inline-block bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:scale-105 transition"
              >
                Let's Work Together
              </a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="../../public/job done.pdf"
                download="Kiran-Aryal-CV.pdf"
                className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-full text-sm font-medium transition"
              >
                <FaDownload />
                Download CV
              </motion.a>

              <button
                onClick={() => setShowPreview((prev) => !prev)}
                className="px-6 py-3 rounded-full border border-white text-white hover:bg-white hover:text-black transition text-sm"
              >
                {showPreview ? "Hide CV Preview" : "Preview CV"}
              </button>
            </div>
          </motion.div>
        </div>

        {/* CV Preview */}
        <AnimatePresence>
          {showPreview && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="mt-12 flex justify-center"
            >
              <iframe
                src="../../public/job done.pdf"
                className="w-full max-w-5xl h-[600px] rounded-xl border border-gray-600 shadow-lg"
                title="Kiran Aryal CV"
              ></iframe>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tech Stack */}
        <div className="mt-20 max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-6">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["React", "TypeScript", "TailwindCSS", "Node.js", "Express", "MongoDB", "Prisma", "Vite"].map((tech, i) => (
              <span
                key={i}
                className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm hover:bg-sky-600 transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* My Journey */}
        <div className="mt-24 max-w-4xl mx-auto">
          <h3 className="text-3xl font-semibold text-center mb-12">My Journey</h3>
          <div className="relative border-l-2 border-sky-500 pl-6">
            {journeySteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="mb-10 pl-3 relative"
              >
                <span className="absolute left-[-0.65rem] top-1 w-3 h-3  bg-sky-500 rounded-full"></span>
                <p className="text-gray-300 leading-relaxed">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "5+", label: "Projects" },
            { number: "1.5+", label: "Years Experience" },
            { number: "2+", label: "Happy Clients" },
            { number: "10+", label: "Technologies Mastered" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="text-3xl font-bold"
            >
              <div>{stat.number}</div>
              <div className="text-sm text-gray-400 mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};
