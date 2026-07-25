import { motion } from "framer-motion";
import {
  FaBolt,
  FaPuzzlePiece,
  FaUsers,
  FaStar,
  FaClock,
  FaLightbulb,
  FaCode,
  FaGraduationCap,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { aboutHighlights, personalInfo } from "../../data/constants";

const iconMap = {
  FaBolt,
  FaPuzzlePiece,
  FaUsers,
  FaStar,
  FaClock,
  FaLightbulb,
};

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const About = () => {
  const stats = [
    { value: "3+", label: "Projects Completed", icon: FaCode, color: "#2563EB" },
    { value: "1+", label: "Internship", icon: FaGraduationCap, color: "#0EA5E9" },
    { value: "3+", label: "Certifications", icon: FaStar, color: "#64748B" },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 80% 20%, #2563EB 0%, transparent 50%)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div {...fadeInUp} className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Who I Am
          </span>
          <h2 className="section-title mt-2">
            About{" "}
            <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Card */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              {/* Card glow */}
              <div
                className="absolute -inset-px rounded-3xl opacity-50"
                style={{
                  background: "#E2E8F0",
                  filter: "blur(20px)",
                }}
              />
              <div className="relative glass rounded-3xl p-8">
                {/* Avatar */}
                <div className="flex items-center gap-5 mb-6">
                  <div
                    className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0"
                    style={{
                      border: "1px solid rgba(192,132,252,0.3)",
                    }}
                  >
                    <img
                      src="/profile.png"
                      alt="Nathin A N"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold" style={{ fontFamily: "Poppins, sans-serif" }}>
                      Nathin A N
                    </h3>
                    <p className="text-blue-600 text-sm font-medium">Software Developer</p>
                    <div className="flex items-center gap-1 text-gray-400 text-sm mt-1">
                      <FaMapMarkerAlt size={12} className="text-secondary" />
                      {personalInfo.location}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-6">
                  I am a Computer Science and Engineering student with a strong passion for full-stack
                  web development. I enjoy building modern applications using Java, Spring Boot,
                  React.js, and MySQL. I continuously improve my technical skills by working on
                  real-world projects and solving coding challenges.
                </p>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                  {stats.map(({ value, label, icon: Icon, color }) => (
                    <div key={label} className="text-center">
                      <Icon className="mx-auto mb-1" style={{ color }} size={18} />
                      <div
                        className="text-xl font-bold"
                        style={{ color }}
                      >
                        {value}
                      </div>
                      <div className="text-gray-400 text-xs">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Highlights */}
          <div>
            <motion.div {...fadeInUp} className="mb-8">
              <h3
                className="text-2xl font-bold mb-3"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                What makes me{" "}
                <span className="gradient-text">stand out</span>
              </h3>
              <p className="text-gray-400">
                A driven developer with a passion for learning and building impactful solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {aboutHighlights.map(({ label, icon }, i) => {
                const Icon = iconMap[icon];
                const colors = ["#2563EB", "#0EA5E9", "#64748B", "#2563EB", "#0EA5E9"];
                const color = colors[i % colors.length];
                return (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="glass rounded-2xl p-4 text-center cursor-default card-hover"
                    style={{ borderColor: `${color}25` }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                      style={{ background: `${color}15`, border: `1px solid ${color}35` }}
                    >
                      {Icon && <Icon size={18} style={{ color }} />}
                    </div>
                    <p className="text-sm font-medium text-gray-200">{label}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Tech Stack Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {["Java", "Spring Boot", "React.js", "MySQL", "JavaScript", "Node.js", "Git"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium text-primary"
                    style={{
                      background: "#EFF6FF",
                      border: "1px solid #BFDBFE",
                    }}
                  >
                    {tech}
                  </span>
                )
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
