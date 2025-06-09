import { useEffect, useState } from "react";
import {
  BellIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { IoCodeSlash } from "react-icons/io5";

export function AppShell() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-full bg-gray-50 dark:bg-gray-900">
      <nav
        className={`sticky top-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-slate-800 shadow-md" : "bg-slate-900"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between relative">
            {/* Left: Logo */}
            <div className="flex flex-col items-start gap-1 z-20">
              <div className="flex items-center gap-2">
                <IoCodeSlash className="text-sky-500 text-2xl" />
                <span className="text-white text-xl font-bold whitespace-nowrap">
                  KIRAN ARYAL
                </span>
              </div>
              {/* Quote below logo for mobile */}
              <div className="lg:hidden">
                <motion.span
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-white text-sm"
                >
                  "Building beautiful web experiences"
                </motion.span>
              </div>
            </div>

            {/* Desktop Quote */}
            <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:block">
              <motion.span
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-white font-medium text-base text-center"
              >
                "Building beautiful web experiences"
              </motion.span>
            </div>

            {/* Right: Desktop nav */}
            <div className="hidden lg:flex items-center space-x-6 z-20">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-white hover:text-indigo-200 transition"
                >
                  {link.name}
                </Link>
              ))}
              <button
                className="p-1 rounded-full text-indigo-200 hover:text-white"
                title="Notifications"
              >
                <BellIcon className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden flex items-center z-20">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white hover:text-indigo-300 transition"
              >
                {mobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-slate-900 text-white px-6 py-8 space-y-6 flex flex-col items-center rounded-b-lg shadow-md"
            >
              <div className="w-full space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-center w-full text-white bg-indigo-600 hover:bg-blue-600 px-4 py-2 rounded-lg transition"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Main content goes here */}
        </div>
        <Toaster />
      </main>
    </div>
  );
}

export default AppShell;
