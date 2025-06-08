import { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { BellIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { IoBookSharp } from "react-icons/io5";

export function AppShell() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="min-h-full bg-gray-50">
      <nav className="bg-gradient-to-r from-slate-900 to-slate-900 shadow-lg">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-1 flex-shrink-0">
              <IoBookSharp className="fill-white text-2xl" />
              <span className="text-white text-xl font-semibold whitespace-nowrap">
                KIRAN ARYAL
              </span>
            </div>

            <div className="hidden md:flex flex-1 justify-center items-center">
              <div className="text-sm italic text-white opacity-80 px-2">
                "Code today. Create tomorrow."
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-white hover:text-indigo-200 transition"
                >
                  {link.name}
                </Link>
              ))}

              <button className="relative p-1 rounded-full text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                <BellIcon className="h-6 w-6" />
              </button>

              <Menu as="div" className="relative">
                <MenuButton className="flex items-center rounded-full bg-indigo-600 text-sm text-white focus:ring-2 focus:ring-white px-3 py-1">
                  Account
                </MenuButton>
                <MenuItems className="absolute right-0 mt-2 w-48 bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-10 rounded-md py-1">
                  <MenuItem>
                    {({ active }) => (
                      <Link
                        to="/login"
                        className={`block px-4 py-2 text-sm ${
                          active ? "bg-gray-100" : ""
                        }`}
                      >
                        Login
                      </Link>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ active }) => (
                      <Link
                        to="/register"
                        className={`block px-4 py-2 text-sm ${
                          active ? "bg-gray-100" : ""
                        }`}
                      >
                        Register
                      </Link>
                    )}
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>

            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white p-2 rounded-lg focus:ring-2 focus:ring-white"
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

        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900 text-white px-6 py-8 space-y-6 flex flex-col items-center rounded-b-lg shadow-md transition-all duration-300 ease-in-out">
            <div className="w-full space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-center w-full text-white bg-indigo-600 hover:bg-blue-600 px-4 py-2 rounded-lg transition"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="w-full space-y-2">
              <Link
                to="/login"
                className="block w-full text-center text-white bg-indigo-600 hover:bg-blue-600 px-4 py-2 rounded-lg transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block w-full text-center text-white bg-indigo-600 hover:bg-blue-600 px-4 py-2 rounded-lg transition"
              >
                Register
              </Link>
            </div>
          </div>
        )}
      </nav>

      <main>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"></div>
        <Toaster />
      </main>
    </div>
  );
}

export default AppShell;
