// src/pages/Projects.tsx
import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { useState } from "react";
import AppShell from "../components/navbar"
const allProjects = [
  {
    title: "Book Review App",
    description:
      "A full-stack MERN app with Elasticsearch, JWT, role-based access",
    tech: ["React", "Express", "MongoDB", "Elasticsearch", "JWT"],
    github: "https://github.com/aryalkiran01/Book-store-App.git",
    live: "https://books-backend-ruby.vercel.app/",
    image: "/book-store.png",
    category: "Bookstore",
  },
  {
    title: "LMS (Learning Management System)",
    description:
      "An interactive LMS platform with quizzes, progress tracking, role-based dashboards, and course enrollment.",
    tech: ["React", "Node.js", "MongoDB", "JWT", "NX", "TS-Rest",],
    github: "https://github.com/aryalkiran01/skillprompt-lms.git",
    live: "https://notdeployed",
    image: "/lms.png",
    category: "LMS",
  },
{
    title: "Amazon",
    description:
      "Amazon's technology stack includes React and JavaScript on the front end, Java, Python, and Scala on the backend, with AWS serving as both the backbone of its own operations and a leading cloud provider to others.",
    tech: [	"React", "JS	Java", "Python", "Scala	AWS",  "DynamoDB"],
    live: "https://www.amazon.com",
    image: "/amazon.png",
    category: "Ecommerce",
  },

{
    title: "Spotify",
    description:
      "Music player system to listen and watch the music",
    tech: ["React.js", "GraphQl","Python","Apache" ],
    github: "https://github.com/aryalkiran01/Zoho-mail.git",
    live: "https://spotify.com",
    image: "/spotify.png",
    category: "Music player",
  },
 
  
 {
    title: "Netflix",
    description:
      "Netflix’s tech stack includes React and Node.js on the front end, Java, Python, and Spring Boot on the back end, and a massive microservices architecture deployed on Amazon Web Services (AWS).",
    tech: ["React", "Node.js", "Python"],
    github: "https://github.com/aryalkiran01/Zoho-mail.git",
    live: "https://www.netflix.com/np",
    image: "/netflix.png",
    category: "Netflix",
  },

  {
    title: "Zoho Mail Integration",
    description:
      "Custom contact and schedule system using Zoho Mail API for transactional email delivery.",
    tech: ["Express", "Zoho Mail API", "Node.js"],
    github: "https://github.com/aryalkiran01/Zoho-mail.git",
    live: "https://notintegrated",
    image: "/zoho.png",
    category: "Zoho",
  },
  {
    title: "E-commerce Platform",
    description:
      "A scalable e-commerce solution with admin panel, cart, and product dashboard.",
    tech: ["React", "Tailwind"],
    github: "https://github.com/aryalkiran01/E-coomerce.git",
    live: "https://ecom.kiranaryal.com",
    image: "/ecom.png",
    category: "Ecommerce",
  },
  {
    title: "IPO Portfolio Tracker (Coming Soon)",
    description:
      "Track IPO investments, view results, and manage portfolio. Built with Prisma, React, Express, Nodes Js.",
    tech: ["React", "MongoDB", "Prisma"],
    github: "https://github.com/aryalkiran01/ipo-tracker",
    live: "#",
    image: "/ipo-mangement-system.png",
    category: "IPO",
  },
];

const categories = ["All", "Bookstore", "LMS", "Zoho", "Ecommerce", "IPO"];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === filter);

  return (
    <>
    <AppShell />
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-white px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-8"
      >
        Projects
      </motion.h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm border transition-all duration-300 hover:bg-blue-700 hover:text-black ${
              filter === cat ? "bg-blue-700 text-black" : "border-white text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="bg-slate-800 rounded-2xl shadow-lg overflow-hidden flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-72 w-full object-cover"
            />

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 text-xs text-yellow-300">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-slate-700 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-4 text-xl">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-300 transition"
                >
                  <AiFillGithub />
                </a>
                {project.live && project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-300 transition"
                  >
                    <FiExternalLink />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    </>
  );
}
