import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

const socialLinks = [
  {
    name: "Github",
    icon: <AiFillGithub />,
    handle: "Kiran Aryal",
    link: "https://github.com/aryalkiran01",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn />,
    handle: "/in/kiranaryal",
    link: "https://www.linkedin.com/in/kiran-aryal-6662ab342/",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    handle: "@aryalkiran12345",
    link: "https://instagram.com/aryalkiran12345",
  },
];

export const DesignerSection = () => {
  return (
    <section className="relative group overflow-hidden">
      {/* Background Slide on Hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950 z-0 transition-all duration-700 group-hover:scale-105" />

      {/* Content */}
      <div className="relative z-10 text-white px-4 md:px-12 py-20">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2"
          >
            <h4 className="text-sm uppercase mb-3 text-gray-300">
              Meet the developer
            </h4>
            <p className="text-2xl md:text-3xl font-light mb-6 leading-relaxed mt-10 md:mt-20">
              "Helping businesses showcase their  
              <br />
              value to the world through
              <br />
              strategic and timeless design."
            </p>
            <Link to="/about" className="relative inline-block text-white mt-2">
              <span className="relative z-10">Learn more ↗</span>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </Link>
          </motion.div>

          {/* Image + Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <img
              src="/website.jpg"
              alt="Designer"
              className="w-60 h-72 object-cover rounded-lg shadow-lg mb-6"
            />

            {/* Social Links Centered Under Image */}
            <div className="space-y-4 w-full flex flex-col items-center">
              {socialLinks.map(({ icon, handle, link }, idx) => (
                <a
                  key={idx}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 hover:text-blue-400 transition"
                >
                  <span className="text-xl">{icon}</span>
                  <span className="text-xs text-gray-400">{handle}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <hr className="my-16 border-gray-700" />

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative group/contact py-10 px-4 md:px-12 border-y border-gray-700"
        >
          {/* Hover line animation */}
          <span className="absolute left-0 top-0 h-[2px] w-0 bg-yellow-400 group-hover/contact:w-full transition-all duration-500" />
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-yellow-400 group-hover/contact:w-full transition-all duration-500 delay-200" />

          <div className="space-y-4 z-10 relative">
            <h4 className="text-sm uppercase text-gray-400">Contact</h4>
            <p className="text-2xl font-light">I'd love to work together.</p>

            <div className="text-base space-y-1">
              <a
                href="mailto:aryalkiran21@gmail.com"
                className="block hover:underline underline-offset-4"
              >
                aryalkiran21@gmail.com ↗
              </a>
              <p>+977 982 75 142 82</p>
            </div>

            <div className="text-sm text-gray-400 pt-6 flex flex-col md:flex-row justify-between gap-2">
              <p>Kiran Aryal © 2025</p>
              <p>Kiran Aryal Web</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
