import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaInfoCircle,
  FaTimes,
  FaCheck,
} from "react-icons/fa";
import { projectsData } from "../../data/constants";

const ProjectModal = ({ project, onClose }) => (
  <AnimatePresence>
    {project && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="modal-overlay"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          className="modal-content"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <div className="text-5xl mb-3">{project.icon}</div>
              <h3 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-2xl glass flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <FaTimes size={16} />
            </button>
          </div>

          <p className="text-slate-300 mb-6 leading-relaxed">{project.longDescription}</p>

          <div className="mb-6">
            <h4 className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-3">
              Key Features
            </h4>
            <div className="grid sm:grid-cols-2 gap-2">
              {project.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm text-slate-200">
                  <FaCheck size={10} className="text-emerald-400 flex-shrink-0" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-3">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-full text-xs font-medium text-slate-900"
                  style={{ background: "linear-gradient(135deg, #fbbf24, #8b5cf6)" }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex-1 gap-2"
            >
              <FaGithub size={14} />
              GitHub
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex-1 gap-2"
            >
              <FaExternalLinkAlt size={12} />
              Live Demo
            </a>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const allTechs = ["all", ...new Set(projectsData.flatMap((project) => project.category))];

  const filtered = projectsData.filter((project) => {
    const matchesFilter = activeFilter === "all" || project.category.includes(activeFilter);
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      !query ||
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.tech.some((tech) => tech.toLowerCase().includes(query));

    return matchesFilter && matchesSearch;
  });

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, rgba(245, 158, 11, 0.14), transparent 30%), radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.15), transparent 28%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="section-kicker">Selected output</p>
          <h2 className="section-title mt-2">
            Featured <span className="gradient-text">projects</span>
          </h2>
          <p className="section-subtitle mt-5">
            A curated set of applications that blend backend reliability with interface polish.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-4 mb-10"
        >
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              className="form-input pl-12 pr-4 w-full"
              id="project-search"
            />
            <FaInfoCircle className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
          </div>

          <div className="flex flex-wrap gap-2">
            {allTechs.map((tech) => (
              <motion.button
                key={tech}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setActiveFilter(tech)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                  activeFilter === tech ? "text-slate-950" : "glass text-slate-300 hover:text-white"
                }`}
                style={
                  activeFilter === tech
                    ? { background: "linear-gradient(135deg, #fbbf24, #8b5cf6)" }
                    : undefined
                }
              >
                {tech === "all" ? "All" : tech}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 28, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.96 }}
                transition={{ delay: index * 0.06 }}
                whileHover={{ y: -8 }}
                className="glass-strong rounded-[1.75rem] overflow-hidden group card-hover"
              >
                <div className={`project-img-placeholder bg-gradient-to-br ${project.gradient}`}>
                  <div className="text-6xl md:text-7xl opacity-40">{project.icon}</div>
                  <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/30 transition-colors duration-300" />
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                      onClick={(event) => event.stopPropagation()}
                      aria-label="GitHub"
                    >
                      <FaGithub size={15} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                      onClick={(event) => event.stopPropagation()}
                      aria-label="Live Demo"
                    >
                      <FaExternalLinkAlt size={13} />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3
                    className="text-xl font-bold mb-2 group-hover:text-amber-200 transition-colors"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-full text-[11px] font-medium border"
                        style={{
                          background: "rgba(148, 163, 184, 0.08)",
                          color: "#e5edf9",
                          borderColor: "rgba(148, 163, 184, 0.16)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-2xl py-2 flex items-center justify-center gap-1.5 text-xs font-medium glass text-slate-200 hover:text-white transition-colors"
                    >
                      <FaGithub size={12} />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-2xl py-2 flex items-center justify-center gap-1.5 text-xs font-medium glass text-slate-200 hover:text-white transition-colors"
                    >
                      <FaExternalLinkAlt size={10} />
                      Demo
                    </a>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="rounded-2xl py-2 flex items-center justify-center gap-1.5 text-xs font-medium"
                      style={{
                        background: "linear-gradient(135deg, rgba(251, 191, 36, 0.12), rgba(139, 92, 246, 0.12))",
                        border: "1px solid rgba(245, 158, 11, 0.18)",
                        color: "#fff7cc",
                      }}
                    >
                      <FaInfoCircle size={12} />
                      Details
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 text-slate-400"
          >
            <div className="text-5xl mb-4">🔍</div>
            <p>No projects match your search.</p>
          </motion.div>
        )}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

export default Projects;
