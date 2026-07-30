import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks } from "../../data/constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((link) => link.id);
      for (const id of [...sections].reverse()) {
        const element = document.getElementById(id);
        if (element && window.scrollY >= element.offsetTop - 140) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -90 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "pt-3" : "pt-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between h-16 md:h-20 px-4 md:px-5 rounded-3xl transition-all duration-300 ${
            scrolled ? "glass-strong" : "bg-transparent"
          }`}
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3"
            onClick={() => scrollTo("home")}
          >
            <div className="w-11 h-11 rounded-2xl flex items-center justify-center text-sm font-bold text-slate-950"
              style={{ background: "linear-gradient(135deg, #fbbf24, #8b5cf6)" }}
            >
              N
            </div>
            <div className="text-left hidden sm:block">
              <p className="text-white font-semibold leading-none">Nathin A N</p>
              <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400 mt-1">
                Portfolio Studio
              </p>
            </div>
          </motion.button>

          <div className="hidden lg:flex items-center gap-2 glass px-3 py-2 rounded-full">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive ? "nav-active bg-white/5" : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden md:inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-xs font-semibold text-amber-100">
              Available for collaboration
            </span>

            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen((prev) => !prev)}
              className="lg:hidden w-11 h-11 rounded-2xl glass flex items-center justify-center text-slate-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={18} /> : <FiMenu size={18} />}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden mt-3 mx-4 sm:mx-6 glass-strong rounded-3xl overflow-hidden"
          >
            <div className="p-3">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className={`w-full text-left px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-200 ${
                      isActive ? "bg-white/8 text-white" : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
