import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaEye,
  FaArrowRight,
} from "react-icons/fa";
import { personalInfo } from "../../data/constants";

const PARTICLE_COUNT = 42;

const generateParticles = () =>
  Array.from({ length: PARTICLE_COUNT }, (_, id) => ({
    id,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2.4 + 0.8,
    speedX: (Math.random() - 0.5) * 0.26,
    speedY: (Math.random() - 0.5) * 0.26,
    opacity: Math.random() * 0.55 + 0.18,
  }));

const TypingAnimation = ({ texts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const target = texts[currentIndex];
    let timeout;

    if (!isDeleting && charIndex < target.length) {
      timeout = setTimeout(() => setCharIndex((current) => current + 1), 70);
      setCurrentText(target.slice(0, charIndex + 1));
    } else if (!isDeleting && charIndex === target.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1400);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((current) => current - 1), 40);
      setCurrentText(target.slice(0, charIndex - 1));
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setCurrentIndex((current) => (current + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentIndex, texts]);

  return (
    <span className="gradient-text" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
      {currentText}
      <span className="typing-cursor" />
    </span>
  );
};

const Hero = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef(generateParticles());
  const frameRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const drawParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const { width, height } = canvas;
    ctx.clearRect(0, 0, width, height);

    const particles = particlesRef.current;
    particles.forEach((particle, index) => {
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      if (particle.x < 0) particle.x = 100;
      if (particle.x > 100) particle.x = 0;
      if (particle.y < 0) particle.y = 100;
      if (particle.y > 100) particle.y = 0;

      const px = (particle.x / 100) * width;
      const py = (particle.y / 100) * height;

      ctx.beginPath();
      ctx.arc(px, py, particle.size, 0, Math.PI * 2);
      ctx.fillStyle =
        index % 3 === 0
          ? `rgba(245, 158, 11, ${particle.opacity})`
          : index % 3 === 1
            ? `rgba(139, 92, 246, ${particle.opacity})`
            : `rgba(34, 211, 238, ${particle.opacity})`;
      ctx.fill();

      particles.slice(index + 1).forEach((other) => {
        const ox = (other.x / 100) * width;
        const oy = (other.y / 100) * height;
        const distance = Math.hypot(px - ox, py - oy);

        if (distance < 110) {
          ctx.beginPath();
          ctx.moveTo(px, py);
          ctx.lineTo(ox, oy);
          ctx.strokeStyle = `rgba(148, 163, 184, ${0.12 * (1 - distance / 110)})`;
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      });
    });

    frameRef.current = requestAnimationFrame(drawParticles);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);
    drawParticles();

    return () => {
      window.removeEventListener("resize", resize);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [drawParticles]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({
        x: (event.clientX / window.innerWidth - 0.5) * 24,
        y: (event.clientY / window.innerHeight - 0.5) * 24,
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const highlights = [
    { label: "Full Stack", value: "Java + React + Spring Boot" },
    { label: "Focus", value: "Production-ready interfaces" },
    { label: "Currently", value: "Building polished digital products" },
  ];

  const stats = [
    { label: "Projects", value: "3+" },
    { label: "Certs", value: "3" },
    { label: "Stack", value: "Java / React" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 md:pt-28"
    >
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" aria-hidden="true" />
      <div className="blob blob-1 -top-20 -left-24" aria-hidden="true" />
      <div className="blob blob-2 top-20 right-0" aria-hidden="true" />
      <div className="blob blob-3 bottom-0 left-1/2" aria-hidden="true" />
      <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-8 lg:px-16 xl:px-24 py-14 md:py-20">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-start">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className="inline-flex items-center gap-3 rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-sm text-amber-100 mb-6"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              Portfolio design system
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.18 }}
              className="text-sm uppercase tracking-[0.35em] text-slate-400 mb-4"
            >
              Hi, I am
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24, type: "spring", stiffness: 70 }}
              className="text-5xl md:text-7xl xl:text-8xl font-bold leading-[0.95] mb-5"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              <span className="gradient-text">Nathin A N</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32 }}
              className="text-2xl md:text-3xl xl:text-4xl font-semibold mb-5 min-h-[3rem]"
            >
              <TypingAnimation texts={personalInfo.typingTexts} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 mb-8"
            >
              {personalInfo.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.a
                href={personalInfo.resumeUrl}
                download
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary gap-2"
              >
                <FaDownload size={14} />
                Resume
              </motion.a>

              <motion.button
                onClick={() => scrollTo("projects")}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-secondary gap-2"
              >
                <FaEye size={14} />
                View Work
              </motion.button>

              <motion.button
                onClick={() => scrollTo("contact")}
                whileHover={{ x: 3 }}
                className="inline-flex items-center gap-2 px-2 py-3 font-medium text-slate-300 hover:text-white transition-colors"
              >
                Let&apos;s talk
                <FaArrowRight size={12} />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3"
            >
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl glass px-4 py-3 min-w-[180px]"
                >
                  <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500 mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm text-slate-200">{item.value}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.62 }}
              className="flex gap-4 justify-center lg:justify-start mt-8"
            >
              {[
                { icon: FaGithub, href: personalInfo.github, label: "GitHub" },
                { icon: FaLinkedin, href: personalInfo.linkedin, label: "LinkedIn" },
                { icon: FaEnvelope, href: `mailto:${personalInfo.email}`, label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={label === "Email" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, type: "spring", stiffness: 60 }}
            style={{
              transform: `translate(${mousePos.x * 0.35}px, ${mousePos.y * 0.35}px)`,
              transition: "transform 0.12s ease",
            }}
            className="relative w-full max-w-[620px] mx-auto xl:mx-0 xl:justify-self-end xl:pt-10"
          >
            <div className="glass-strong rounded-[2rem] p-4 md:p-5 overflow-hidden">
              <div className="relative rounded-[1.75rem] overflow-hidden border border-white/5">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 via-transparent to-violet-500/10" />
                <div className="grid 2xl:grid-cols-[1.08fr_0.92fr] gap-0">
                  <div className="relative min-h-[320px] md:min-h-[420px]">
                    <img
                      src="/profile.png"
                      alt="Nathin A N"
                      className="absolute inset-0 w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                    <div className="absolute left-5 top-5 rounded-full border border-amber-300/20 bg-slate-950/55 px-4 py-2 text-xs uppercase tracking-[0.3em] text-amber-100">
                      Portfolio atlas
                    </div>
                    <div className="absolute left-5 bottom-5 right-5">
                      <p className="text-xs uppercase tracking-[0.28em] text-slate-400 mb-2">
                        Identity
                      </p>
                      <h2
                        className="text-3xl md:text-4xl font-bold mb-3"
                        style={{ fontFamily: "Space Grotesk, sans-serif" }}
                      >
                        UI with a sharper edge
                      </h2>
                      <p className="text-sm text-slate-300 max-w-md">
                        A portfolio built like a curated product page, balancing clarity,
                        warmth, and motion.
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-950/50 p-5 md:p-6 flex flex-col gap-4">
                    <div className="rounded-3xl border border-white/6 bg-white/5 p-4">
                      <p className="text-[11px] uppercase tracking-[0.28em] text-slate-500 mb-3">
                        Snapshot
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 2xl:grid-cols-3 gap-3">
                        {stats.map((item) => (
                          <div key={item.label} className="min-w-0 rounded-2xl glass p-3 text-center">
                            <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-1">
                              {item.label}
                            </p>
                            <p className="text-sm font-semibold text-white break-words leading-snug">
                              {item.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-3xl border border-white/6 bg-white/5 p-4 flex-1">
                      <p className="text-[11px] uppercase tracking-[0.28em] text-slate-500 mb-3">
                        Current focus
                      </p>
                      <div className="space-y-3">
                        {[
                          "Turning complex backend logic into calm, readable UX.",
                          "Designing interfaces that feel tactile and memorable.",
                          "Making every section earn its place on the page.",
                        ].map((line) => (
                          <div
                            key={line}
                            className="flex items-start gap-3 rounded-2xl bg-slate-900/55 border border-white/5 p-3 text-sm text-slate-300"
                          >
                            <span className="mt-1.5 h-2 w-2 rounded-full bg-amber-300 flex-shrink-0" />
                            <span>{line}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-3xl border border-white/6 bg-slate-900/65 p-4 font-mono text-xs text-slate-400">
                      <p className="text-slate-500 mb-2">// tech stack signal</p>
                      <p className="text-amber-100">Java{" "}{`{`}</p>
                      <p className="pl-4">Spring Boot, MySQL</p>
                      <p className="text-amber-100 mt-1">React{" "}{`{`}</p>
                      <p className="pl-4">Tailwind, Framer Motion</p>
                      <p className="text-amber-100 mt-1">{"}"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
