import { motion } from "framer-motion";
import { FaCalendarAlt, FaCheckCircle } from "react-icons/fa";
import { experienceData } from "../../data/constants";

const Experience = () => {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 80% 50%, #00E8C8 0%, transparent 60%)",
        }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Work History
          </span>
          <h2 className="section-title mt-2">
            My{" "}
            <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5"
            style={{ background: "linear-gradient(to bottom, #2563EB, #CBD5E1, transparent)" }}
          />

          {experienceData.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="relative md:pl-24 mb-8"
            >
              {/* Timeline Dot */}
              <div
                className="hidden md:flex absolute left-0 top-6 w-16 h-16 rounded-2xl items-center justify-center text-2xl"
                style={{
                  background: `linear-gradient(135deg, ${exp.color}25, ${exp.color}10)`,
                  border: `1px solid ${exp.color}40`,
                  boxShadow: "none",
                }}
              >
                {exp.logo}
              </div>

              {/* Card */}
              <motion.div
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-6 md:p-8 card-hover"
                style={{ borderColor: `${exp.color}30` }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-bold"
                        style={{
                          background: `${exp.color}20`,
                          color: exp.color,
                          border: `1px solid ${exp.color}40`,
                        }}
                      >
                        {exp.type}
                      </span>
                    </div>
                    <h3
                      className="text-xl font-bold mt-2"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {exp.role}
                    </h3>
                    <p className="gradient-text font-semibold text-lg">{exp.company}</p>
                  </div>

                  <div
                    className="flex items-center gap-2 glass px-4 py-2 rounded-xl text-sm text-gray-300 whitespace-nowrap"
                  >
                    <FaCalendarAlt size={12} style={{ color: exp.color }} />
                    {exp.duration}
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-5">{exp.description}</p>

                {/* Highlights */}
                <div className="grid sm:grid-cols-2 gap-2 mb-5">
                  {exp.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2 text-sm text-gray-300">
                      <FaCheckCircle size={12} style={{ color: exp.color }} className="flex-shrink-0" />
                      {h}
                    </div>
                  ))}
                </div>

                {/* Tech Used */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg text-xs font-medium"
                      style={{
                        background: `${exp.color}15`,
                        color: exp.color,
                        border: `1px solid ${exp.color}30`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
