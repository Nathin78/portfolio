import { motion } from "framer-motion";
import { educationData } from "../../data/constants";

const Education = () => {
  return (
    <section id="education" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 30%, #2563EB 0%, transparent 60%)",
        }}
      />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Academic Background
          </span>
          <h2 className="section-title mt-2">
            My{" "}
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line — desktop */}
          <div
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5"
            style={{ background: "linear-gradient(to bottom, #2563EB, #CBD5E1, transparent)" }}
          />

          {educationData.map((edu, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className={`relative flex items-center mb-10 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:gap-0 gap-4`}
              >
                {/* Card */}
                <div className="w-full md:w-[calc(50%-2.5rem)]">
                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="glass rounded-2xl p-6 card-hover"
                    style={{ borderColor: `${edu.color}35` }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                        style={{
                          background: `${edu.color}20`,
                          border: `1px solid ${edu.color}40`,
                        }}
                      >
                        {edu.icon}
                      </div>
                      <div>
                        <span
                          className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
                          style={{
                            background: `${edu.color}20`,
                            color: edu.color,
                          }}
                        >
                          {edu.type}
                        </span>
                        <p className="text-xs text-gray-400 mt-0.5">{edu.duration}</p>
                      </div>
                    </div>

                    <h3
                      className="text-base font-bold mb-1"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {edu.degree}
                    </h3>
                    <p className="text-blue-600 text-sm font-medium mb-1">{edu.institution}</p>
                    <p
                      className="text-sm font-bold"
                      style={{ color: edu.color }}
                    >
                      {edu.score}
                    </p>
                  </motion.div>
                </div>

                {/* Center Dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 + 0.3, type: "spring" }}
                    className="w-5 h-5 rounded-full"
                    style={{
                      background: `linear-gradient(135deg, ${edu.color}, #CBD5E1)`,
                      border: "3px solid #FFFFFF",
                      boxShadow: "none",
                    }}
                  />
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block w-[calc(50%-2.5rem)]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
