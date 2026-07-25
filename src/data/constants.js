// ============================================================
// PORTFOLIO CONSTANTS — Nathin A N (Volcanic Aurora Theme)
// ============================================================

export const personalInfo = {
  name: "Nathin A N",
  title: "Software Developer",
  typingTexts: [
    "Software Developer",
    "Java Developer",
    "Full Stack Developer",
    "Spring Boot Engineer",
    "React.js Developer",
  ],
  tagline: "Java | Spring Boot | React.js | MySQL",
  description:
    "Computer Science and Engineering student passionate about building scalable web applications and solving real-world problems using Java, Spring Boot, React.js, and MySQL.",
  email: "nathinan30115@gmail.com",
  phone: "+91 9345849139",
  location: "Tamil Nadu, India",
  github: "https://github.com/Nathin78",
  linkedin: "https://www.linkedin.com/in/nathin-a-n-51b2852a5/",
  resumeUrl: "/resume.pdf",
};

export const aboutHighlights = [
  { label: "Quick Learner", icon: "FaBolt" },
  { label: "Problem Solver", icon: "FaPuzzlePiece" },
  { label: "Leadership", icon: "FaStar" },
  { label: "Time Management", icon: "FaClock" },
  { label: "Innovation", icon: "FaLightbulb" },
];

export const skillsData = [
  {
    category: "Programming Languages",
    icon: "FaCode",
    color: "#C084FC", // Electric Lavender
    skills: [
      { name: "Java", level: 90 },
      { name: "SQL", level: 85 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 88 },
      { name: "JavaScript", level: 82 },
    ],
  },
  {
    category: "Frontend",
    icon: "FaReact",
    color: "#FFB86C", // Neon Amber-Peach
    skills: [
      { name: "React.js", level: 85 },
      { name: "Tailwind CSS", level: 88 },
    ],
  },
  {
    category: "Backend",
    icon: "FaServer",
    color: "#A78BFA", // Violet
    skills: [
      { name: "Spring Boot", level: 88 },
      { name: "Node.js", level: 70 },
    ],
  },
  {
    category: "Database",
    icon: "FaDatabase",
    color: "#C084FC", // Electric Lavender
    skills: [{ name: "MySQL", level: 87 }],
  },
  {
    category: "Tools",
    icon: "FaTools",
    color: "#FFB86C", // Neon Amber-Peach
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 88 },
      { name: "VS Code", level: 95 },
      { name: "Microsoft Word", level: 90 },
    ],
  },
];

export const experienceData = [
  {
    id: 1,
    company: "Infosys Springboard",
    role: "Intern — Springboard Internship 6.0",
    duration: "Feb 2026 – Apr 2026",
    type: "Internship",
    description:
      "Developed an Intelligent Home Energy Optimizer for real-time monitoring, consumption analysis, power optimization, reporting, and actionable insights.",
    highlights: [
      "Real-time energy monitoring dashboard",
      "Consumption analysis & reporting",
      "Power optimization algorithms",
      "Actionable insights generation",
    ],
    tech: ["Java", "Spring Boot", "React.js", "MySQL"],
    logo: "⚡",
    color: "#C084FC",
  },
];

export const projectsData = [
  {
    id: 1,
    title: "Smart Home Energy Management System",
    description:
      "A full-stack web application that monitors household energy consumption in real time. Includes OTP authentication, email notifications, device management, dashboards, and reporting.",
    longDescription:
      "A comprehensive full-stack web application built to monitor and manage household energy consumption in real time. The platform features OTP-based authentication for secure access, automated email notifications for alerts, an intuitive device management interface, interactive dashboards with charts, and detailed reporting capabilities.",
    tech: ["React.js", "Spring Boot", "MySQL", "Java"],
    category: ["React.js", "Spring Boot", "Java"],
    features: [
      "Real-time energy monitoring",
      "OTP authentication",
      "Email notifications",
      "Device management",
      "Interactive dashboards",
      "Detailed reporting",
    ],
    github: "https://github.com/Nathin78/Smart-Home-Energy-Management-System",
    live: "#",
    gradient: "from-[#C084FC] to-[#FFB86C]",
    icon: "⚡",
  },
  {
    id: 2,
    title: "Smart Attendance System",
    description:
      "Geo-location based attendance management system with JWT authentication, geofence validation, leave management, and admin dashboard.",
    longDescription:
      "A geo-location based smart attendance management system that uses JWT authentication for secure access. The system validates user location against predefined geofences, provides comprehensive leave management, and features a powerful admin dashboard for managing employees and reports.",
    tech: ["Spring Boot", "Java", "HTML", "CSS", "JavaScript", "MySQL"],
    category: ["Spring Boot", "Java"],
    features: [
      "Geo-location validation",
      "JWT authentication",
      "Geofence validation",
      "Leave management",
      "Admin dashboard",
      "Employee reports",
    ],
    github: "https://github.com/Nathin78/Smart-Attendance-System-Using-Geo-Location-System",
    live: "#",
    gradient: "from-[#FFB86C] to-[#A78BFA]",
    icon: "📍",
  },
  {
    id: 3,
    title: "AI-Based E-Commerce Recommendation System",
    description:
      "AI-powered recommendation platform providing personalized product suggestions based on customer preferences and shopping behavior.",
    longDescription:
      "An AI-powered e-commerce recommendation platform that analyzes customer preferences and shopping behavior to deliver highly personalized product suggestions. Built with a React.js frontend and Node.js backend, the system leverages ML algorithms to enhance user experience and drive conversions.",
    tech: ["React.js", "Node.js", "MySQL", "JavaScript"],
    category: ["React.js", "Node.js"],
    features: [
      "AI-powered recommendations",
      "Personalized suggestions",
      "Behavior analysis",
      "Real-time updates",
      "Product filtering",
      "User preference tracking",
    ],
    github: "https://github.com/Nathin78/AI-Based-E-Commerce-Recommendation-System",
    live: "#",
    gradient: "from-[#A78BFA] to-[#C084FC]",
    icon: "🤖",
  },
];

export const educationData = [
  {
    id: 1,
    degree: "BE Computer Science Engineering",
    institution: "V.S.B Engineering College",
    score: "CGPA: 7.37",
    duration: "2024 – 2027",
    icon: "🎓",
    color: "#C084FC",
    type: "Bachelor's Degree",
  },
  {
    id: 2,
    degree: "Diploma in Computer Science",
    institution: "Nachimuthu Polytechnic College",
    score: "72%",
    duration: "2021 – 2024",
    icon: "📚",
    color: "#FFB86C",
    type: "Diploma",
  },
  {
    id: 3,
    degree: "SSLC",
    institution: "Ponnu Matriculation Higher Secondary School",
    score: "Completed",
    duration: "2020 – 2021",
    icon: "🏫",
    color: "#A78BFA",
    type: "Secondary Education",
  },
];

export const certificationsData = [
  {
    id: 1,
    title: "Programming in Java",
    issuer: "NPTEL",
    description: "Comprehensive Java programming certification covering OOP, data structures, and advanced concepts.",
    icon: "☕",
    color: "#C084FC",
    gradient: "from-[#C084FC] to-[#FFB86C]",
    year: "2025",
  },
  {
    id: 2,
    title: "Infosys Springboard Internship",
    issuer: "Infosys",
    description: "Completed Springboard Internship 6.0 — developed an Intelligent Home Energy Optimizer.",
    icon: "⚡",
    color: "#FFB86C",
    gradient: "from-[#FFB86C] to-[#A78BFA]",
    year: "2026",
  },
  {
    id: 3,
    title: "Machine Learning Using Python Workshop",
    issuer: "Workshop Certification",
    description: "Hands-on workshop covering ML algorithms, Python libraries (NumPy, Pandas, Scikit-learn), and model building.",
    icon: "🧠",
    color: "#A78BFA",
    gradient: "from-[#A78BFA] to-[#C084FC]",
    year: "2024",
  },
];

export const achievementsData = [
  { id: 1, title: "Coding Enthusiast", value: "500+", label: "Problems Solved", icon: "FaCode", color: "#C084FC" },
  { id: 2, title: "Full Stack Developer", value: "3+", label: "Projects Built", icon: "FaLaptopCode", color: "#FFB86C" },
  { id: 3, title: "Java Developer", value: "90%", label: "Java Proficiency", icon: "FaCoffee", color: "#A78BFA" },
  { id: 4, title: "Continuous Learner", value: "3+", label: "Certifications", icon: "FaMedal", color: "#C084FC" },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];
