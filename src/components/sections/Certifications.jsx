import { motion } from "framer-motion";
import { certificationsData } from "../../data/constants";

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 70% 60%, rgba(245, 158, 11, 0.12), transparent 32%), radial-gradient(circle at 20% 20%, rgba(34, 211, 238, 0.1), transparent 30%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="section-kicker">Credentials</p>
          <h2 className="section-title mt-2">
            Certifications & <span className="gradient-text">wins</span>
          </h2>
          <p className="section-subtitle mt-5">
            Proof points from structured learning, internships, and hands-on technical growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {certificationsData.map((certification, index) => (
            <motion.div
              key={certification.id}
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="cert-card glass-strong rounded-[1.75rem] overflow-hidden card-hover"
            >
              <div className={`h-1.5 bg-gradient-to-r ${certification.gradient}`} />

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
                    style={{
                      background: `${certification.color}16`,
                      border: `1px solid ${certification.color}30`,
                    }}
                  >
                    {certification.icon}
                  </div>
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{
                      background: `${certification.color}16`,
                      color: certification.color,
                    }}
                  >
                    {certification.year}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                  {certification.title}
                </h3>
                <p className="text-sm font-semibold mb-3" style={{ color: certification.color }}>
                  {certification.issuer}
                </p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {certification.description}
                </p>

                <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ background: certification.color }} />
                  <span className="text-xs text-slate-500">Verified certificate</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Achievements <span className="gradient-text">&amp; highlights</span>
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { emoji: "💻", title: "Coding Enthusiast", desc: "Active on competitive platforms", color: "#f59e0b" },
              { emoji: "🌐", title: "Full Stack Developer", desc: "End-to-end application builder", color: "#22d3ee" },
              { emoji: "☕", title: "Java Developer", desc: "90%+ Java proficiency", color: "#8b5cf6" },
              { emoji: "📚", title: "Continuous Learner", desc: "Always upskilling", color: "#f59e0b" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="glass rounded-2xl p-5 text-center card-hover"
                style={{ borderColor: `${item.color}2e` }}
              >
                <div className="text-4xl mb-3">{item.emoji}</div>
                <h4 className="font-bold text-sm mb-1" style={{ color: item.color }}>
                  {item.title}
                </h4>
                <p className="text-slate-400 text-xs">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
