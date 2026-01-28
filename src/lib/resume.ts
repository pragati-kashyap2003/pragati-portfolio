export type Link = { label: string; href: string };

export type Project = {
  title: string;
  time: string;
  stack: string[];
  highlights: string[];
  links?: Link[];
};

export type ResumeData = {
  name: string;
  email: string;
  phone: string;
  links: Link[];
  skills: {
    languages: string[];
    frameworks: string[];
    toolsPlatforms: string[];
    softSkills: string[];
  };
  training: {
    title: string;
    time: string;
    bullets: string[];
    techStack: string[];
  };
  projects: Project[];
  certificates: { title: string; org?: string; time: string }[];
  achievements: { title: string; time: string; detail: string }[];
  extraCurricular: { title: string; time: string; detail: string }[];
  education: {
    institution: string;
    location: string;
    time: string;
    detail: string;
  }[];
};

export const resume: ResumeData = {
  name: "Pragati Kashyap",
  email: "pragatik353@gmail.com",
  phone: "+91-9142068536",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/pragati-kashyap01/" },
    { label: "GitHub", href: "https://github.com/pragati-kashyap2003" },
  ],
  skills: {
    languages: ["C++", "Python", "C", "Java", "JavaScript", "Node.js"],
    frameworks: ["HTML", "CSS", "Bootstrap", "NodeJS", "React"],
    toolsPlatforms: ["SAP Hana", "Kali Linux", "MySQL", "Wireshark", "Nmap"],
    softSkills: ["Problem-Solving", "Team Player", "Leadership", "Adaptability"],
  },
  training: {
    title: "CSE Pathshala Certificate (DSA with C Programming)",
    time: "June 2025 – July 2025",
    bullets: [
      "35+ hours of live online training in C Programming, with hands-on experience in fundamentals and problem solving.",
      "Built a console-based Library Management System (add/remove/issue/delete records).",
    ],
    techStack: ["C Programming", "DSA"],
  },
  projects: [
    {
      title: "Ethical AI Governance Toolkit",
      time: "Apr 2025 – Aug 2025",
      stack: ["Python", "Node.js", "React", "Vite", "Tailwind CSS"],
      highlights: [
        "Enabled organizations to audit AI models and datasets for bias, copyright violations, and ethical compliance.",
        "Implemented key modules: dataset fingerprinting, misuse prevention for user uploads, and transparent ethical audit reporting.",
        "Built secure onboarding with email verification and local dev compatibility.",
      ],
      links: [{ label: "GitHub", href: "https://github.com/pragati-kashyap2003" }],
    },
    {
      title: "Train Congestion Prediction & Optimization (ML system)",
      time: "Aug 2025",
      stack: ["Python", "Node.js", "React"],
      highlights: [
        "Predicted congestion on Howrah railway station using 20,000+ synthetic samples, achieving ~80% accuracy.",
        "Built optimization logic (rerouting, speed adjustment, priority scheduling) with real-time predictions via Node.js backend and React dashboard.",
        "Automated training/evaluation and continuous monitoring at 30-second intervals.",
      ],
      links: [{ label: "GitHub", href: "https://github.com/pragati-kashyap2003" }],
    },
  ],
  certificates: [
    {
      title: "Privacy and Security in Online Social Media",
      org: "NPTEL",
      time: "Nov 2024 – Jan 2025",
    },
    {
      title: "Google Cybersecurity Professional Certificate",
      org: "Coursera",
      time: "Jun 2024 – Aug 2024",
    },
    {
      title: "Introduction to Operating System and Hard…",
      org: "IBM | Coursera",
      time: "Aug 2024 – Sep 2024",
    },
  ],
  achievements: [
    {
      title: "Finalist — SAP HackFest 2025 (National Level Hackathon)",
      time: "July 2025",
      detail: "Among Top 70 finalists from 5,000+ teams.",
    },
  ],
  extraCurricular: [
    {
      title: "Code Of Duty Hackathon",
      time: "Dec 2024",
      detail: "Collaborated on real-time problem-solving in a hackathon setting.",
    },
  ],
  education: [
    {
      institution: "Lovely Professional University",
      location: "Punjab, India",
      time: "Jul 2023 – Jul 2027",
      detail: "Bachelor of Technology — Computer Science and Engineering; CGPA: 7.3",
    },
    {
      institution: "Surendranath Centenary School",
      location: "Ranchi, Jharkhand",
      time: "Apr 2020 – Mar 2022",
      detail: "Intermediate; Percentage: 80",
    },
    {
      institution: "Bishop Westcott Girls’ School",
      location: "Ranchi, Jharkhand",
      time: "Apr 2019 – Mar 2020",
      detail: "Matriculation; Percentage: 85",
    },
  ],
};

