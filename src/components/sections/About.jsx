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
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.55 },
};

const About = () => {
  const stats = [
    { value: "3+", label: "Projects completed", icon: FaCode, color: "#f59e0b" },
    { value: "1+", label: "Internship", icon: FaGraduationCap, color: "#22d3ee" },
    { value: "3+", label: "Certifications", icon: FaStar, color: "#8b5cf6" },
  ];

  const techPills = ["Java", "Spring Boot", "React.js", "MySQL", "JavaScript", "Node.js", "Git"];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 80% 20%, rgba(245, 158, 11, 0.12), transparent 32%), radial-gradient(circle at 15% 80%, rgba(139, 92, 246, 0.1), transparent 30%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <motion.div {...fadeInUp} className="text-center mb-14">
          <p className="section-kicker">Who I am</p>
          <h2 className="section-title mt-2">
            About <span className="gradient-text">me</span>
          </h2>
          <p className="section-subtitle mt-5">
            I build with structure, polish, and enough curiosity to keep the work moving forward.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-strong rounded-[2rem] p-6 md:p-8">
              <div className="flex items-center gap-5 mb-6">
                <div
                  className="w-20 h-20 rounded-3xl overflow-hidden flex-shrink-0 border"
                  style={{ borderColor: "rgba(245, 158, 11, 0.22)" }}
                >
                  <img
                    src="/profile.png"
                    alt="Nathin A N"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                    Nathin A N
                  </h3>
                  <p className="text-amber-100 text-sm font-medium">Software Developer</p>
                  <div className="flex items-center gap-2 text-sm text-slate-400 mt-1">
                    <FaMapMarkerAlt size={12} style={{ color: "#22d3ee" }} />
                    {personalInfo.location}
                  </div>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed mb-6">
                I am a Computer Science and Engineering student with a strong passion for full-stack
                web development. I enjoy building modern applications using Java, Spring Boot,
                React.js, and MySQL. I continuously improve my technical skills by working on
                real-world projects and solving coding challenges.
              </p>

              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/10">
                {stats.map(({ value, label, icon: Icon, color }) => (
                  <div key={label} className="text-center">
                    <Icon className="mx-auto mb-2" style={{ color }} size={18} />
                    <div className="text-2xl font-bold" style={{ color }}>
                      {value}
                    </div>
                    <div className="text-slate-500 text-xs uppercase tracking-[0.18em] mt-1">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.div {...fadeInUp}>
              <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                What makes me <span className="gradient-text">stand out</span>
              </h3>
              <p className="text-slate-400 max-w-xl">
                A driven developer with a bias toward clean structure, practical problem solving,
                and interfaces that feel considered instead of generic.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {aboutHighlights.map(({ label, icon }, index) => {
                const Icon = iconMap[icon];
                const colors = ["#f59e0b", "#22d3ee", "#8b5cf6", "#f59e0b", "#22d3ee"];
                const color = colors[index % colors.length];

                return (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, scale: 0.86 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.4 }}
                    whileHover={{ scale: 1.04, y: -4 }}
                    className="glass rounded-2xl p-4 text-center card-hover"
                    style={{ borderColor: `${color}28` }}
                  >
                    <div
                      className="w-10 h-10 rounded-2xl flex items-center justify-center mx-auto mb-3"
                      style={{ background: `${color}16`, border: `1px solid ${color}34` }}
                    >
                      {Icon && <Icon size={18} style={{ color }} />}
                    </div>
                    <p className="text-sm font-medium text-slate-200">{label}</p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-2"
            >
              {techPills.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-full text-xs font-medium"
                  style={{
                    background: "rgba(148, 163, 184, 0.08)",
                    border: "1px solid rgba(148, 163, 184, 0.16)",
                    color: "#e5edf9",
                  }}
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
