import { motion } from "framer-motion";
import { educationData } from "../../data/constants";

const Education = () => {
  return (
    <section id="education" className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 18% 30%, rgba(139, 92, 246, 0.14), transparent 34%), radial-gradient(circle at 82% 70%, rgba(245, 158, 11, 0.1), transparent 36%)",
        }}
      />

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="section-kicker">Academic path</p>
          <h2 className="section-title mt-2">
            Education <span className="gradient-text">trail</span>
          </h2>
          <p className="section-subtitle mt-5">
            A progression from diploma to degree, with each stage reinforcing the same core:
            build, learn, repeat.
          </p>
        </motion.div>

        <div className="relative">
          <div
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px"
            style={{
              background:
                "linear-gradient(to bottom, rgba(245, 158, 11, 0.8), rgba(139, 92, 246, 0.45), transparent)",
            }}
          />

          {educationData.map((education, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={education.id}
                initial={{ opacity: 0, x: isLeft ? -48 : 48 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.55 }}
                className={`relative flex items-center mb-10 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:gap-0 gap-4`}
              >
                <div className="w-full md:w-[calc(50%-2.5rem)]">
                  <motion.div
                    whileHover={{ y: -6, scale: 1.01 }}
                    className="glass-strong rounded-[1.75rem] p-6 card-hover"
                    style={{ borderColor: `${education.color}30` }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                        style={{
                          background: `${education.color}18`,
                          border: `1px solid ${education.color}3a`,
                        }}
                      >
                        {education.icon}
                      </div>
                      <div>
                        <span
                          className="inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.22em]"
                          style={{
                            background: `${education.color}16`,
                            color: education.color,
                          }}
                        >
                          {education.type}
                        </span>
                        <p className="text-xs text-slate-500 mt-1">{education.duration}</p>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold mb-1" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                      {education.degree}
                    </h3>
                    <p className="text-slate-200 text-sm font-medium mb-1">{education.institution}</p>
                    <p className="text-sm font-semibold" style={{ color: education.color }}>
                      {education.score}
                    </p>
                  </motion.div>
                </div>

                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.12 + 0.2, type: "spring" }}
                    className="w-5 h-5 rounded-full"
                    style={{
                      background: `linear-gradient(135deg, ${education.color}, #f59e0b)`,
                      border: "3px solid rgba(8, 17, 31, 0.95)",
                    }}
                  />
                </div>

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
