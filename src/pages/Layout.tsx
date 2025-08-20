import React, { useState } from "react";
import { Link } from "react-router-dom";

type LayoutProps = {
  children: React.ReactNode;
};

const footerLinks = [
  { href: "/", label: "Privacy Policy" },
  { href: "/", label: "Terms of Service" },
];

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll handler for About and Projects
  const handleScroll = (id: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Timeout ensures menu closes before scroll
  };

  return (
    <>
      <header className="bg-blue-700 text-white shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <div className="text-2xl font-bold">
            <Link to="/">My React Sandbox</Link>
          </div>
          <nav
            className={`fixed top-0 left-0 h-full w-2/3 bg-blue-800 z-40 transform ${
              menuOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-200 ease-in-out md:static md:h-auto md:w-auto md:bg-transparent md:translate-x-0 flex flex-col md:flex-row md:items-center gap-6 md:gap-8 p-6 md:p-0`}
          >
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="block py-2 px-4 rounded hover:bg-blue-600 md:hover:bg-transparent md:hover:underline text-lg md:text-base"
            >
              Home
            </Link>
            <Link
              to="/#about"
              onClick={() => handleScroll("about")}
              className="block py-2 px-4 rounded hover:bg-blue-600 md:hover:bg-transparent md:hover:underline text-lg md:text-base"
            >
              About
            </Link>
            <Link
              to="/#projects"
              onClick={() => handleScroll("projects")}
              className="block py-2 px-4 rounded hover:bg-blue-600 md:hover:bg-transparent md:hover:underline text-lg md:text-base"
            >
              Projects
            </Link>
            <Link
              to="/#contact"
              onClick={() => handleScroll("contact")}
              className="block py-2 px-4 rounded hover:bg-blue-600 md:hover:bg-transparent md:hover:underline text-lg md:text-base"
            >
              Contact
            </Link>
          </nav>
          <button
            className="md:hidden flex flex-col gap-1.5 z-50"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="block w-7 h-1 bg-white rounded"></span>
            <span className="block w-7 h-1 bg-white rounded"></span>
            <span className="block w-7 h-1 bg-white rounded"></span>
          </button>
          {menuOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
              onClick={() => setMenuOpen(false)}
            />
          )}
        </div>
      </header>
      <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
      <footer className="bg-gray-100 text-gray-700 py-4 mt-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2 px-4">
          <div className="text-sm">
            &copy; {new Date().getFullYear()} My React Sandbox
          </div>
          <div className="flex gap-4">
            {footerLinks.map((link, key) => (
              <Link
                key={key}
                to={link.href}
                className="hover:underline text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
