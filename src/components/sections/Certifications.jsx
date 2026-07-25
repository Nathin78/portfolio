import { motion } from "framer-motion";
import { certificationsData } from "../../data/constants";

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 70% 60%, #2563EB 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Credentials
          </span>
          <h2 className="section-title mt-2">
            My{" "}
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="cert-card glass rounded-2xl overflow-hidden card-hover"
            >
              {/* Top gradient bar */}
              <div
                className={`h-1.5 bg-gradient-to-r ${cert.gradient}`}
              />

              <div className="p-6">
                {/* Icon + Year */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
                    style={{
                      background: `${cert.color}20`,
                      border: `1px solid ${cert.color}40`,
                    }}
                  >
                    {cert.icon}
                  </div>
                  <span
                    className="text-sm font-bold px-3 py-1 rounded-full"
                    style={{ background: `${cert.color}20`, color: cert.color }}
                  >
                    {cert.year}
                  </span>
                </div>

                {/* Info */}
                <h3
                  className="text-lg font-bold mb-1"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {cert.title}
                </h3>
                <p
                  className="text-sm font-semibold mb-3"
                  style={{ color: cert.color }}
                >
                  {cert.issuer}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {cert.description}
                </p>

                {/* Bottom */}
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: cert.color }}
                  />
                  <span className="text-xs text-gray-400">Verified Certificate</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Sub-section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20"
        >
          <h3
            className="text-2xl font-bold text-center mb-10"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            🏆 Achievements &amp;{" "}
            <span className="gradient-text">Highlights</span>
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { emoji: "💻", title: "Coding Enthusiast", desc: "Active on competitive platforms", color: "#2563EB" },
              { emoji: "🌐", title: "Full Stack Developer", desc: "End-to-end application builder", color: "#0EA5E9" },
              { emoji: "☕", title: "Java Developer", desc: "90%+ Java proficiency", color: "#64748B" },
              { emoji: "📚", title: "Continuous Learner", desc: "Always upskilling", color: "#2563EB" },
            ].map(({ emoji, title, desc, color }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="glass rounded-2xl p-5 text-center card-hover"
                style={{ borderColor: `${color}30` }}
              >
                <div className="text-4xl mb-3">{emoji}</div>
                <h4
                  className="font-bold text-sm mb-1"
                  style={{ color }}
                >
                  {title}
                </h4>
                <p className="text-gray-400 text-xs">{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
