import { Project, SkillCategory, ExperienceItem, EducationItem } from '../types';

export const PERSONAL_INFO = {
  name: "Rishi Gupta",
  monogram: "RG",
  headline: "MERN Stack Developer",
  subHeadline: "Full-Stack Web Developer",
  summary: "Hands-on developer specializing in scalable REST APIs, secure JWT auth, and responsive React/Tailwind frontends.",
  about: "I'm a passionate MERN Stack Developer with a solid foundation in building full-stack web applications. I focus on writing clean, maintainable code, architecting reliable RESTful APIs with Node.js and Express, and crafting intuitive, mobile-responsive interfaces using React and Tailwind CSS.",
  email: "rishig7903@gmail.com",
  phone: "+91-7704027940",
  location: "Lucknow, India (Open to Remote / Relocation)",
  github: "https://github.com/mr-rishi07",
  linkedin: "https://linkedin.com/in/rishi-gupta-670413295",
  resumeUrl: "#contact"
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["React.js", "Tailwind CSS", "HTML5", "CSS3", "Responsive Design"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "RESTful APIs", "Middleware", "Routing"]
  },
  {
    title: "Database",
    skills: ["MongoDB", "Mongoose ODM", "CRUD Operations"]
  },
  {
    title: "Auth & Security",
    skills: ["JWT Authentication", "Role-Based Access Control", "Protected Routes"]
  },
  {
    title: "Tools & Languages",
    skills: ["JavaScript (ES6+)", "C", "Python", "Git", "GitHub", "Postman", "VS Code"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "snapthumb",
    title: "SnapThumb",
    tagline: "AI Thumbnail Generator",
    description: "An AI-powered thumbnail generator application built to streamline visual content creation with customizable aspect ratios, styles, and instant asset downloads.",
    highlights: [
      "AI-powered dynamic thumbnail generation powered by Gemini API integration.",
      "Customizable design presets, styles, and flexible aspect ratios.",
      "JWT-secured authentication and dedicated user dashboard for thumbnail preview and download."
    ],
    tags: ["MERN Stack", "Gemini API", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/mr-rishi07",
    demoUrl: "https://github.com/mr-rishi07"
  },
  {
    id: "task-manager",
    title: "Task Management App",
    tagline: "Full-Stack Productivity Platform",
    description: "A comprehensive task management web application enabling users to organize workflows, track priorities, and manage projects with role-based access.",
    highlights: [
      "Complete RESTful CRUD APIs with server-side validation and standard error handling.",
      "Role-based access control and protected route authorization using JWT.",
      "Clean, responsive UI with real-time status toggling and priority filtering."
    ],
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/mr-rishi07",
    demoUrl: "https://github.com/mr-rishi07"
  },
  {
    id: "notebook-app",
    title: "Notebook App",
    tagline: "Note Management System",
    description: "A full-featured personal and shared notes platform with persistent schema-based storage, category filtering, and secure user sessions.",
    highlights: [
      "Public and private note creation workflows with persistent schema-based storage.",
      "Role-based user access and JWT-secured user sessions.",
      "Fast note searching, tag categorization, and responsive layout across devices."
    ],
    tags: ["React.js", "Express.js", "MongoDB", "Mongoose", "Node.js"],
    githubUrl: "https://github.com/mr-rishi07",
    demoUrl: "https://github.com/mr-rishi07"
  }
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: "hanumant",
    role: "Web Development Intern - MERN Stack",
    company: "Hanumant Technology Pvt. Ltd.",
    period: "Aug 2025 – Jan 2026",
    type: "Internship",
    deliverables: [
      "Built production-ready MERN features and responsive UI components using React and Tailwind CSS.",
      "Developed Express REST APIs with modular middleware and standardized HTTP error handling.",
      "Integrated JWT authentication with route protection for secure user session management."
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"]
  }
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Rameshwaram Institute of Technology and Management",
    period: "2022 – 2026",
    cgpa: "8.25 / 10.0",
    details: "Core coursework: Data Structures & Algorithms, Database Management Systems, Web Technologies, and Software Engineering."
  }
];
