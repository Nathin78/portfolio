import { motion } from "framer-motion";
import { FaCalendarAlt, FaCheckCircle } from "react-icons/fa";
import { experienceData } from "../../data/constants";

const Experience = () => {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 82% 50%, rgba(34, 211, 238, 0.12), transparent 34%), radial-gradient(circle at 18% 50%, rgba(245, 158, 11, 0.12), transparent 36%)",
        }}
      />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="section-kicker">Work history</p>
          <h2 className="section-title mt-2">
            Experience <span className="gradient-text">timeline</span>
          </h2>
          <p className="section-subtitle mt-5">
            One internship, but a strong signal of building real systems with measurable outcomes.
          </p>
        </motion.div>

        <div className="relative">
          <div
            className="hidden md:block absolute left-8 top-0 bottom-0 w-px"
            style={{
              background:
                "linear-gradient(to bottom, rgba(245, 158, 11, 0.8), rgba(139, 92, 246, 0.5), transparent)",
            }}
          />

          {experienceData.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.55 }}
              className="relative md:pl-24 mb-8"
            >
              <div
                className="hidden md:flex absolute left-0 top-5 w-16 h-16 rounded-3xl items-center justify-center text-2xl glass-strong"
                style={{
                  background: `linear-gradient(135deg, ${experience.color}18, rgba(8, 17, 31, 0.92))`,
                  borderColor: `${experience.color}3a`,
                }}
              >
                {experience.logo}
              </div>

              <motion.div
                whileHover={{ y: -4 }}
                className="glass-strong rounded-[1.75rem] p-6 md:p-8 card-hover"
                style={{ borderColor: `${experience.color}30` }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <span
                      className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em]"
                      style={{
                        background: `${experience.color}18`,
                        color: experience.color,
                        border: `1px solid ${experience.color}3a`,
                      }}
                    >
                      {experience.type}
                    </span>
                    <h3
                      className="text-2xl font-bold mt-3"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      {experience.role}
                    </h3>
                    <p className="text-amber-100 font-semibold text-lg">{experience.company}</p>
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-2xl glass px-4 py-2 text-sm text-slate-300 whitespace-nowrap">
                    <FaCalendarAlt size={12} style={{ color: experience.color }} />
                    {experience.duration}
                  </div>
                </div>

                <p className="text-slate-300 leading-relaxed mb-5">{experience.description}</p>

                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  {experience.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-2 text-sm text-slate-200">
                      <FaCheckCircle size={12} style={{ color: experience.color }} className="flex-shrink-0" />
                      {highlight}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {experience.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        background: `${experience.color}14`,
                        color: "#fff7cc",
                        border: `1px solid ${experience.color}24`,
                      }}
                    >
                      {tech}
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
