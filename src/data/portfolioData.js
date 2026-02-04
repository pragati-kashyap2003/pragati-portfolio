export const portfolioData = {
  // Personal Information
  personal: {
    name: "Pragati Kashyap",
    title: "Full Stack Developer",
    tagline: "Building digital experiences that make a difference",
    email: "pragatik353@gmail.com",
    phone: "+91 9142068536",
    location: "Ranchi, Jharkhand",
    avatar: "https://media.licdn.com/dms/image/v2/D5603AQHKGqKk766UzQ/profile-displayphoto-scale_400_400/B56ZjCBRVMHMAg-/0/1755601773082?e=1772064000&v=beta&t=DLpBFOFseZqaQc828tZdfDuwn61v4KERya0XgBQlyyI",
    cvUrl: "https://docs.google.com/document/d/1SnP54LLQj5dhSbnGSB9Vxn_vppR2e8M1qjpyTro9DRM/edit?tab=t.0", // Update this with your actual CV path
  },

  // Social Links
  socials: {
    github: "https://github.com/pragati-kashyap2003",
    linkedin: "https://www.linkedin.com/in/pragati-kashyap01/",
    twitter: "https://twitter.com/yourusername",
  },

  // About Section
  about: {
    description: `I'm a passionate full-stack developer with a love for creating elegant solutions to complex problems. With expertise in modern web technologies and a keen eye for design, I build applications that are both functional and beautiful.
    
    When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I believe in continuous learning and pushing the boundaries of what's possible with code.`,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
  },

  // Skills
  skills: {
    frontend: [
      { name: "React", level: 75 },
      { name: "JavaScript", level: 80 },
      { name: "HTML/CSS", level: 85 },
      { name: "Tailwind CSS", level: 70 },
    ],
    backend: [
      { name: "Node.js", level: 70 },
      //{ name: "Express", level: 65 },
      { name: "MongoDB", level: 60 },
      { name: "REST APIs", level: 75 },
    ],
    tools: [
      { name: "Git & GitHub", level: 80 },
      { name: "VS Code", level: 85 },
      { name: "Figma", level: 65 },
      //{ name: "npm/yarn", level: 70 },
    ],
    soft: [
      { name: "Problem Solving", level: 80 },
      { name: "Team Collaboration", level: 75 },
      { name: "Communication", level: 78 },
      { name: "Time Management", level: 70 },
    ],
  },

  // Education
  education: [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      institution: "Lovely Professional University",
      location: "Jalandhar, Punjab",
      period: "2023 - 2027",
      description: "Focused on software engineering and web development.",
      icon: "🎓",
    },
    {
      id: 2,
      degree: "Intermediate",
      institution: "Surendranath Centenary School",
      location: "Ranchi, Jharkhand",
      period: "2020 - 2022",
     // description: "Valedictorian. Member of programming club and robotics team.",
      icon: "📚",
    },
    {
      id: 2,
      degree: "Matriculate",
      institution: "Bishop Westcott Girls' School",
      location: "Ranchi, Jharkhand",
      period: "2019 - 2020",
     // description: "Valedictorian. Member of programming club and robotics team.",
      icon: "📚",
    },
  ],

  // Training & Certifications
  training: [
    {
      id: 1,
      title: "Responsive Web Design",
      issuer: "FreeCodeCamp",
      date: "2023",
      //credential: "ABC123XYZ",
      icon: "☁️",
    },
    {
      id: 2,
      title: "Google AI Essentials",
      issuer: "Google",
      date: "2025",
     // credential: "DEF456UVW",
      icon: "💻",
    },
    {
      id: 3,
      title: "Fundamentals of Network Communication",
      issuer: "EDX Alumni via Coursera",
      date: "2024",
      //credential: "GHI789RST",
      icon: "🎨",
    },
    {
      id: 4,
      title: "Introduction to Hardware and Operating System",
      issuer: "IBM via Coursera",
      date: "2024",
     // credential: "JKL012MNO",
      icon: "🚀",
    },
  ],

  // Projects
  projects: [
    {
      id: 1,
      title: "AI Notemaker Chatbot",
      description: "A AI-powered chatbot that converts meeting transcripts to structured notes.",
      image: "https://tse3.mm.bing.net/th/id/OIP.XTGz-dp3WDtWzVDxRJnKYQHaEF?rs=1&pid=ImgDetMain&o=7&rm=3",
      technologies: ["React", "JavaScript", "Vite", "Tailswind CSS", "AI API"],
      //liveUrl: "https://example.com",
      githubUrl: "https://github.com/pragati-kashyap2003/AI-Notemaker-Chatbot",
      category: "frontend",
    },
    {
      id: 2,
      title: "AI Productivity Website",
      description: "Collaborative task management tool with real-time updates, drag-and-drop interface, and team features.",
      image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "Vite", "JSX"],
      //liveUrl: "https://example.com",
      githubUrl: "https://github.com/pragati-kashyap2003/flowai-productivity",
      category: "frontend",
    },
    {
      id: 3,
      title: "Ethical AI Governance Toolkit",
      description: "This toolkit empowers teams to build AI more responsibly, while giving regulators, clients, and users greater transparency and trust.",
      image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=600&h=400&fit=crop",
      technologies: ["React", "OpenAI API", "Vite", "TypeScript", "tailswind CSS"],
      //liveUrl: "https://example.com",
      githubUrl: "https://github.com/KS-Vijay/Ethical-AI-Governance-Toolkit",
      category: "full-stack",
    },
    // {
    //   id: 4,
    //   title: "Weather Dashboard",
    //   description: "Beautiful weather application with forecasts, maps, and location-based recommendations.",
    //   image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop",
    //   technologies: ["React", "Weather API", "Chart.js", "CSS"],
    //   liveUrl: "https://example.com",
    //   githubUrl: "https://github.com/yourusername/weather",
    //   category: "frontend",
    // },
    // {
    //   id: 5,
    //   title: "REST API Service",
    //   description: "Scalable REST API with authentication, rate limiting, and comprehensive documentation.",
    //   image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    //   technologies: ["Node.js", "Express", "JWT", "Swagger"],
    //   liveUrl: null,
    //   githubUrl: "https://github.com/yourusername/api",
    //   category: "backend",
    // },
    // {
    //   id: 6,
    //   title: "Portfolio Generator",
    //   description: "Tool to generate beautiful portfolio websites from JSON configuration. Customizable themes and layouts.",
    //   image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    //   technologies: ["React", "Node.js", "Templates", "PDF"],
    //   liveUrl: "https://example.com",
    //   githubUrl: "https://github.com/yourusername/portfolio-gen",
    //   category: "fullstack",
    // },
  ],
};
