import { motion } from "framer-motion";
import Appshell from "../components/navbar"
export const AboutPage = () => {
  return (
    <>
    <Appshell/>
    <section className="bg-white bg-gradient-to-r from-slate-900 to-black shadow-lg text-gray-800 dark:text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="../../public/website.jpg"
            alt="Kiran Aryal"
            className="w-full max-w-sm h-auto aspect-[3/4] object-cover rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"


          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            I'm <span className="font-semibold text-black dark:text-white">Kiran Aryal</span>, a Full-Stack Web Developer
            based in Nepal. I specialize in crafting beautiful and efficient digital
            experiences using modern technologies.
          </p>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-xl mb-2">What I Do</h4>
              <ul className="list-disc ml-5 space-y-1">
                {[
                  "Frontend with React, TailwindCSS, TypeScript",
                  "Backend using Node.js, Express, MongoDB",
                  "API Integration, JWT Auth, File uploads",
                  "Deploying to Vercel, Netlify, and Render",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="transition hover:text-black dark:hover:text-yellow-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-xl mb-2">Core Values</h4>
              <p>
                Performance. Accessibility. Precision. I build web solutions that are
                reliable, scalable, and user-first.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-block bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full text-sm font-medium hover:scale-105 transition"
            >
              Let's Work Together
            </a>
          </div>
        </motion.div>
      </div>

      {/* Tech Stack Badges */}
      <div className="mt-16 max-w-6xl mx-auto text-center">
        <h3 className="text-2xl font-semibold mb-6">Tech Stack</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {["React", "TypeScript", "TailwindCSS", "Node.js", "Express", "MongoDB", "Prisma", "Vite"]
            .map((tech, i) => (
              <span
                key={i}
                className="bg-gray-200 dark:bg-gray-800 px-4 py-2 rounded-full text-sm hover:scale-105 transition"
              >
                {tech}
              </span>
            ))}
        </div>
      </div>

      {/* Stats Section */}
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
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
    </>
  );
};
