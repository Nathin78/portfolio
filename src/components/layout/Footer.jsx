import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";
import { personalInfo } from "../../data/constants";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4 border-t border-slate-200">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center text-white font-bold">
              N
            </div>
            <div>
              <h3 className="font-bold text-lg gradient-text" style={{ fontFamily: "Poppins, sans-serif" }}>
                Nathin A N
              </h3>
              <p className="text-gray-400 text-xs">Software Developer</p>
            </div>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-sky-500 hover:border-sky-200 transition-all duration-300 hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-10 h-10 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-slate-600 hover:border-slate-300 transition-all duration-300 hover:-translate-y-1"
              aria-label="Email"
            >
              <FaEnvelope size={18} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-200 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-400">
          <p>
            Designed & Developed with{" "}
            <FaHeart className="inline text-red-400 mx-1" size={12} />
            by{" "}
            <span className="gradient-text font-semibold">Nathin A N</span>
          </p>
          <p>© {year} All Rights Reserved</p>
          <p className="text-xs">
            Built with{" "}
            <span className="text-primary">React</span> •{" "}
            <span className="text-secondary">Tailwind CSS</span> •{" "}
            <span className="text-accent">Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
