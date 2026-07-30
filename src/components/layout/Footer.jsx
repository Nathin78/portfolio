import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";
import { personalInfo } from "../../data/constants";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-8 border-t border-white/10">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-950/80 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24 py-12">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-slate-950 font-bold"
              style={{ background: "linear-gradient(135deg, #fbbf24, #8b5cf6)" }}
            >
              N
            </div>
            <div>
              <h3 className="text-xl font-bold" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                Nathin A N
              </h3>
              <p className="text-sm text-slate-400">Software Developer</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 md:justify-end">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-2xl glass flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 hover:-translate-y-1"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-2xl glass flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-11 h-11 rounded-2xl glass flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 hover:-translate-y-1"
              aria-label="Email"
            >
              <FaEnvelope size={18} />
            </a>
          </div>
        </div>

        <div className="section-divider my-8" />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm text-slate-400">
          <p className="flex items-center gap-2">
            Designed with
            <FaHeart className="text-rose-400" size={12} />
            by <span className="gradient-text font-semibold">Nathin A N</span>
          </p>
          <p>© {year} All Rights Reserved</p>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
            React / Tailwind / Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
