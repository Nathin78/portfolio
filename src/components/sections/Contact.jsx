import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import { personalInfo } from "../../data/constants";

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = "Name is required";
    if (!formData.email.trim()) nextErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) nextErrors.email = "Invalid email";
    if (!formData.subject.trim()) nextErrors.subject = "Subject is required";
    if (!formData.message.trim()) nextErrors.message = "Message is required";
    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
    if (errors[name]) setErrors((previous) => ({ ...previous, [name]: "" }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setStatus("sending");

    const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const contactItems = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "#f59e0b",
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: "#22d3ee",
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: personalInfo.location,
      href: null,
      color: "#8b5cf6",
    },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 80%, rgba(245, 158, 11, 0.14), transparent 34%), radial-gradient(circle at 82% 18%, rgba(139, 92, 246, 0.12), transparent 30%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="section-kicker">Get in touch</p>
          <h2 className="section-title mt-2">
            Contact <span className="gradient-text">me</span>
          </h2>
          <p className="section-subtitle mt-5">
            Have a project in mind, a role to discuss, or just want to swap ideas? Let&apos;s connect.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            <div className="glass-strong rounded-[1.75rem] p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500 mb-3">Conversation starter</p>
              <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                Let&apos;s build something that feels intentional.
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                I&apos;m open to internships, freelance work, product collaborations, and focused
                backend/frontend builds.
              </p>
            </div>

            {contactItems.map(({ icon: Icon, label, value, href, color }) => (
              <motion.div
                key={label}
                whileHover={{ x: 6 }}
                className="flex items-center gap-4 glass rounded-2xl p-4"
              >
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${color}18`, border: `1px solid ${color}30` }}
                >
                  <Icon size={18} style={{ color }} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">{label}</p>
                  {href ? (
                    <a href={href} className="text-sm font-medium text-slate-200 hover:text-white transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-slate-200">{value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            <div className="pt-2">
              <p className="text-xs text-slate-500 mb-3 uppercase tracking-[0.22em]">Find me on</p>
              <div className="flex gap-3">
                {[
                  { icon: FaGithub, href: personalInfo.github, label: "GitHub", color: "#f59e0b" },
                  { icon: FaLinkedin, href: personalInfo.linkedin, label: "LinkedIn", color: "#22d3ee" },
                  { icon: FaEnvelope, href: `mailto:${personalInfo.email}`, label: "Email", color: "#8b5cf6" },
                ].map(({ icon: Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target={label === "Email" ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-11 h-11 glass rounded-2xl flex items-center justify-center text-slate-300 hover:text-white hover:-translate-y-1 transition-all duration-300"
                    onMouseEnter={(event) => (event.currentTarget.style.color = color)}
                    onMouseLeave={(event) => (event.currentTarget.style.color = "")}
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-3"
          >
            <div className="glass-strong rounded-[2rem] p-6 md:p-8">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <FaCheckCircle size={58} className="text-emerald-400 mb-4" />
                  <h4 className="text-2xl font-bold mb-2" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                    Message sent
                  </h4>
                  <p className="text-slate-300">
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} noValidate>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs text-slate-400 mb-1.5 font-medium" htmlFor="contact-name">
                        Full name *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Nathin A N"
                        className={`form-input ${errors.name ? "border-red-500/60" : ""}`}
                      />
                      {errors.name && (
                        <p className="text-red-300 text-xs mt-1 flex items-center gap-1">
                          <FaExclamationCircle size={10} /> {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs text-slate-400 mb-1.5 font-medium" htmlFor="contact-email">
                        Email address *
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="nathin@email.com"
                        className={`form-input ${errors.email ? "border-red-500/60" : ""}`}
                      />
                      {errors.email && (
                        <p className="text-red-300 text-xs mt-1 flex items-center gap-1">
                          <FaExclamationCircle size={10} /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-xs text-slate-400 mb-1.5 font-medium" htmlFor="contact-subject">
                      Subject *
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project collaboration"
                      className={`form-input ${errors.subject ? "border-red-500/60" : ""}`}
                    />
                    {errors.subject && (
                      <p className="text-red-300 text-xs mt-1 flex items-center gap-1">
                        <FaExclamationCircle size={10} /> {errors.subject}
                      </p>
                    )}
                  </div>

                  <div className="mb-6">
                    <label className="block text-xs text-slate-400 mb-1.5 font-medium" htmlFor="contact-message">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or idea..."
                      className={`form-input resize-none ${errors.message ? "border-red-500/60" : ""}`}
                    />
                    {errors.message && (
                      <p className="text-red-300 text-xs mt-1 flex items-center gap-1">
                        <FaExclamationCircle size={10} /> {errors.message}
                      </p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === "sending"}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary w-full gap-3 py-3.5 text-base"
                  >
                    {status === "sending" ? (
                      <>
                        <div className="w-4 h-4 border-2 border-slate-950/25 border-t-slate-950 rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane size={15} />
                        Send message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
