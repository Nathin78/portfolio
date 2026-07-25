import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaReact,
  FaServer,
  FaDatabase,
  FaTools,
} from "react-icons/fa";
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
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="mb-4"
    >
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-gray-300">{name}</span>
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
          transition={{ delay: delay + 0.2, duration: 1.2, ease: "easeOut" }}
          style={{ background: `linear-gradient(90deg, ${color}, ${color}99)` }}
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = ["all", ...skillsData.map((s) => s.category)];

  const filtered =
    activeCategory === "all"
      ? skillsData
      : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section
      id="skills"
      className="section-padding relative overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 80%, #00E8C8 0%, transparent 50%)",
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
            What I Know
          </span>
          <h2 className="section-title mt-2">
            Technical{" "}
            <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "text-white shadow-lg"
                  : "glass text-gray-400 hover:text-white"
              }`}
              style={
                activeCategory === cat
                  ? { background: "#2563EB", color: "#fff" }
                  : {}
              }
            >
              {cat === "all" ? "All Skills" : cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((category, ci) => {
            const Icon = iconMap[category.icon];
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass rounded-2xl p-6 card-hover"
                style={{ borderColor: `${category.color}30` }}
              >
                {/* Card Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{
                      background: `${category.color}18`,
                      border: `1px solid ${category.color}40`,
                    }}
                  >
                    {Icon && <Icon size={20} style={{ color: category.color }} />}
                  </div>
                  <h3
                    className="text-base font-semibold"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {category.category}
                  </h3>
                </div>

                {/* Skills */}
                {category.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={category.color}
                    delay={ci * 0.1 + si * 0.08}
                  />
                ))}
              </motion.div>
            );
          })}
        </div>

        {/* Floating Skill Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-6"
        >
          {[
            { name: "Java", emoji: "☕", color: "#2563EB" },
            { name: "React", emoji: "⚛️", color: "#0EA5E9" },
            { name: "Spring", emoji: "🍃", color: "#64748B" },
            { name: "MySQL", emoji: "🐬", color: "#2563EB" },
            { name: "Git", emoji: "📦", color: "#0EA5E9" },
            { name: "Node.js", emoji: "🟢", color: "#64748B" },
          ].map(({ name, emoji, color }, i) => (
            <motion.div
              key={name}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
              className="glass rounded-2xl px-5 py-3 flex items-center gap-3"
              style={{ borderColor: `${color}40` }}
            >
              <span className="text-xl">{emoji}</span>
              <span className="text-sm font-medium" style={{ color }}>
                {name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
