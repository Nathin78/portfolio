import { useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaReact, FaServer, FaDatabase, FaTools } from "react-icons/fa";
import { skillsData } from "../../data/constants";

const iconMap = {
  FaCode,
  FaReact,
  FaServer,
  FaDatabase,
  FaTools,
};

const SkillBar = ({ name, level, color, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.45 }}
      className="mb-4"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-slate-200">{name}</span>
        <span className="text-xs font-bold" style={{ color }}>
          {level}%
        </span>
      </div>
      <div className="progress-bar">
        <motion.div
          className="progress-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.15, duration: 1.1, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = ["all", ...skillsData.map((skill) => skill.category)];
  const filtered =
    activeCategory === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 15% 20%, rgba(139, 92, 246, 0.16), transparent 34%), radial-gradient(circle at 85% 80%, rgba(245, 158, 11, 0.12), transparent 32%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="section-kicker">What I know</p>
          <h2 className="section-title mt-2">
            Technical <span className="gradient-text">skills</span>
          </h2>
          <p className="section-subtitle mt-5">
            A focused set of tools and technologies I use to build sturdy backend systems
            and polished interfaces.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "text-slate-950"
                  : "glass text-slate-300 hover:text-white"
              }`}
              style={
                activeCategory === category
                  ? { background: "linear-gradient(135deg, #fbbf24, #8b5cf6)" }
                  : undefined
              }
            >
              {category === "all" ? "All Skills" : category}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((category, index) => {
            const Icon = iconMap[category.icon];

            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="glass-strong rounded-[1.75rem] p-6 card-hover"
                style={{ borderColor: `${category.color}2a` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{
                      background: `${category.color}18`,
                      border: `1px solid ${category.color}3a`,
                    }}
                  >
                    {Icon && <Icon size={20} style={{ color: category.color }} />}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                      {category.category}
                    </h3>
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                      Capability cluster
                    </p>
                  </div>
                </div>

                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={category.color}
                    delay={index * 0.08 + skillIndex * 0.06}
                  />
                ))}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4"
        >
          {[
            { name: "Java", badge: "Backend", color: "#f59e0b" },
            { name: "React", badge: "Frontend", color: "#22d3ee" },
            { name: "Spring", badge: "API", color: "#8b5cf6" },
            { name: "MySQL", badge: "Database", color: "#f59e0b" },
            { name: "Git", badge: "Versioning", color: "#22d3ee" },
            { name: "Tailwind", badge: "UI", color: "#8b5cf6" },
          ].map((item, index) => (
            <motion.div
              key={item.name}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: index * 0.25 }}
              className="glass rounded-2xl px-4 py-4 text-center"
            >
              <p className="text-sm font-semibold text-white">{item.name}</p>
              <p className="text-[11px] uppercase tracking-[0.24em] mt-1" style={{ color: item.color }}>
                {item.badge}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
