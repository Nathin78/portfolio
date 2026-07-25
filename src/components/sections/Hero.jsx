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

// Particle configuration
const PARTICLE_COUNT = 65;

const generateParticles = () =>
  Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    speedX: (Math.random() - 0.5) * 0.3,
    speedY: (Math.random() - 0.5) * 0.3,
    opacity: Math.random() * 0.6 + 0.15,
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
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 80);
      setCurrentText(target.slice(0, charIndex + 1));
    } else if (!isDeleting && charIndex === target.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 45);
      setCurrentText(target.slice(0, charIndex - 1));
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setCurrentIndex((i) => (i + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentIndex, texts]);

  return (
    <span className="gradient-text" style={{ fontFamily: "Poppins, sans-serif" }}>
      {currentText}
      <span className="typing-cursor" />
    </span>
  );
};

const Hero = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef(generateParticles());
  const animFrameRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const drawParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const { width, height } = canvas;
    ctx.clearRect(0, 0, width, height);

    const particles = particlesRef.current;
    particles.forEach((p, i) => {
      p.x += p.speedX;
      p.y += p.speedY;
      if (p.x < 0) p.x = 100;
      if (p.x > 100) p.x = 0;
      if (p.y < 0) p.y = 100;
      if (p.y > 100) p.y = 0;

      const px = (p.x / 100) * width;
      const py = (p.y / 100) * height;

      ctx.beginPath();
      ctx.arc(px, py, p.size, 0, Math.PI * 2);
      ctx.fillStyle = i % 2 === 0
        ? `rgba(37, 99, 235, ${p.opacity})`
        : `rgba(100, 116, 139, ${p.opacity})`;
      ctx.fill();

      // Connect nearby particles
      particles.slice(i + 1).forEach((p2) => {
        const p2x = (p2.x / 100) * width;
        const p2y = (p2.y / 100) * height;
        const dist = Math.hypot(px - p2x, py - p2y);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(px, py);
          ctx.lineTo(p2x, p2y);
          ctx.strokeStyle = `rgba(37, 99, 235, ${0.08 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      });
    });

    animFrameRef.current = requestAnimationFrame(drawParticles);
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
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [drawParticles]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      />

      {/* Gradient blobs */}
      <div className="blob blob-1" aria-hidden="true" />
      <div className="blob blob-2" aria-hidden="true" />
      <div className="blob blob-3" aria-hidden="true" />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 flex flex-col lg:flex-row items-center gap-16">
        {/* Text Column */}
        <div className="flex-1 text-center lg:text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-primary mb-6"
            style={{ border: "1px solid rgba(37, 99, 235, 0.2)" }}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse" />
            Software Developer Portfolio
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-xl mb-2"
          >
            Hi, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, type: "spring" }}
            className="text-5xl md:text-7xl font-black mb-4 leading-tight"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <span className="gradient-text text-glow">Nathin A N</span>
          </motion.h1>

          {/* Typing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-2xl md:text-3xl font-semibold mb-4 h-10"
          >
            <TypingAnimation texts={personalInfo.typingTexts} />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-slate-500 font-medium mb-6 text-lg"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-slate-500 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0"
          >
            {personalInfo.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
          >
            <motion.a
              href={personalInfo.resumeUrl}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center gap-2"
            >
              <FaDownload size={14} />
              Download Resume
            </motion.a>

            <motion.button
              onClick={() => scrollTo("projects")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center gap-2"
            >
              <FaEye size={14} />
              View Projects
            </motion.button>

            <motion.button
              onClick={() => scrollTo("contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors font-medium"
            >
              Contact Me
              <FaArrowRight size={12} />
            </motion.button>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex gap-4 justify-center lg:justify-start"
          >
            {[
              { icon: FaGithub, href: personalInfo.github, label: "GitHub", color: "#2563EB" },
              { icon: FaLinkedin, href: personalInfo.linkedin, label: "LinkedIn", color: "#0EA5E9" },
              { icon: FaEnvelope, href: `mailto:${personalInfo.email}`, label: "Email", color: "#64748B" },
            ].map(({ icon: Icon, href, label, color }) => (
              <motion.a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.2, y: -4 }}
                whileTap={{ scale: 0.9 }}
                className="w-11 h-11 glass rounded-xl flex items-center justify-center text-slate-500 transition-all duration-300"
                style={{ "--hover-color": color }}
                onMouseEnter={(e) => (e.currentTarget.style.color = color)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "")}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Avatar / Card Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, type: "spring" }}
          style={{
            transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`,
            transition: "transform 0.1s ease",
          }}
          className="flex-shrink-0"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Outer ring */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: "#E2E8F0",
                padding: "3px",
              }}
            >
              <div
                className="w-full h-full rounded-full"
                style={{ background: "#FFFFFF" }}
              />
            </div>

            {/* Avatar */}
            <div
              className="absolute inset-2 rounded-full overflow-hidden"
              style={{
                border: "3px solid #E2E8F0",
              }}
            >
              <img
                src="/profile.png"
                alt="Nathin A N"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Floating tech badges */}
            {[
              { label: "Java", pos: "-top-4 -left-4", color: "#2563EB" },
              { label: "React", pos: "-top-4 -right-4", color: "#0EA5E9" },
              { label: "Spring", pos: "-bottom-4 -left-4", color: "#64748B" },
              { label: "MySQL", pos: "-bottom-4 -right-4", color: "#2563EB" },
            ].map(({ label, pos, color }) => (
              <motion.div
                key={label}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: Math.random() * 2 }}
                className={`absolute ${pos} glass px-3.5 py-1.5 rounded-xl text-xs font-bold`}
                style={{ color, border: `1px solid ${color}40` }}
              >
                {label}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
