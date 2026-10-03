// Degree Programs in Faculty of Computing
export const DEGREE_PROGRAMS = {
  AI: {
    id: "AI",
    code: "AI",
    name: "Artificial Intelligence",
    degreeTitle: "BSc (Hons) in Artificial Intelligence",
    tagline: "Empowering machines to learn, reason, and create.",
    badge: "🧠 Future Intelligence",
    color: "#a855f7",
    colorLight: "rgba(168, 85, 247, 0.15)",
    gradient: "linear-gradient(135deg, #a855f7 0%, #6366f1 100%)",
    icon: "brain",
    description: "You thrive on building intelligent systems, computer vision, neural networks, and generative AI to invent the next generation of autonomous tech.",
    coreModules: ["Machine Learning & Neural Nets", "Computer Vision & NLP", "Autonomous Robotics"],
    careerPaths: ["AI / ML Engineer", "Computer Vision Specialist", "NLP Researcher"]
  },
  DS: {
    id: "DS",
    code: "DS",
    name: "Data Science",
    degreeTitle: "BSc (Hons) in Data Science",
    tagline: "Transforming vast data into predictive insights.",
    badge: "📊 Data Alchemist",
    color: "#06b6d4",
    colorLight: "rgba(6, 182, 212, 0.15)",
    gradient: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
    icon: "chart-bar",
    description: "You love discovering hidden patterns in numbers, big data pipelines, statistical modeling, and data-driven forecasting.",
    coreModules: ["Applied Statistics & Probability", "Big Data & Cloud Pipelines", "Predictive Analytics"],
    careerPaths: ["Data Scientist", "Big Data Engineer", "BI Analytics Consultant"]
  },
  CS: {
    id: "CS",
    code: "CS",
    name: "Computer Science",
    degreeTitle: "BSc (Hons) in Computer Science",
    tagline: "Mastering algorithms, hardware systems, and computational speed.",
    badge: "⚡ Algorithm Pioneer",
    color: "#3b82f6",
    colorLight: "rgba(59, 130, 246, 0.15)",
    gradient: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
    icon: "cpu",
    description: "You enjoy deep problem solving, algorithmic optimization, OS architecture, and understanding computational complexity from first principles.",
    coreModules: ["Algorithms & Complexity", "Operating Systems & Architecture", "Distributed Systems"],
    careerPaths: ["Systems Architect", "High-Performance Developer", "Core Infrastructure Engineer"]
  },
  SE: {
    id: "SE",
    code: "SE",
    name: "Software Engineering",
    degreeTitle: "BSc (Hons) in Software Engineering",
    tagline: "Crafting scalable, user-loved software ecosystems.",
    badge: "🛠️ Software Builder",
    color: "#10b981",
    colorLight: "rgba(16, 185, 129, 0.15)",
    gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    icon: "code",
    description: "You are passionate about building tangible web and mobile apps, writing clean modular code, CI/CD DevOps, and product design.",
    coreModules: ["Full-Stack Web & Mobile Apps", "Clean Architecture & Design Patterns", "DevOps & Cloud Delivery"],
    careerPaths: ["Senior Full-Stack Developer", "Mobile App Specialist", "DevOps / SRE Engineer"]
  },
  MIS: {
    id: "MIS",
    code: "MIS",
    name: "Management Information Systems",
    degreeTitle: "BSc (Hons) in Management Information Systems",
    tagline: "Bridging tech innovation with enterprise leadership.",
    badge: "💼 Tech Business Leader",
    color: "#f59e0b",
    colorLight: "rgba(245, 158, 11, 0.15)",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    icon: "briefcase",
    description: "You see technology as a strategic tool to lead projects, optimize corporate business processes, and direct digital transformation.",
    coreModules: ["Enterprise Systems (ERP)", "IT Project Leadership & Agile", "Business Process Optimization"],
    careerPaths: ["IT Project / Product Manager", "Business Systems Analyst", "Enterprise Solution Consultant"]
  },
  Security: {
    id: "Security",
    code: "Security",
    name: "Cyber Security",
    degreeTitle: "BSc (Hons) in Cyber Security & Forensics",
    tagline: "Shielding digital infrastructure and hunting cyber threats.",
    badge: "🛡️ Cyber Defender",
    color: "#ef4444",
    colorLight: "rgba(239, 68, 68, 0.15)",
    gradient: "linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)",
    icon: "shield",
    description: "You have an instinct to find security flaws, protect networks, stop cyber attacks, and master ethical hacking and digital forensics.",
    coreModules: ["Ethical Hacking & Pen Testing", "Network Defense & Cryptography", "Digital Forensics & Response"],
    careerPaths: ["Penetration Tester (Ethical Hacker)", "Cyber Security Analyst", "SOC Threat Specialist"]
  }
};

// Concise, Punchy Question Pool (Max 3 questions per session)
export const QUESTION_POOL = [
  {
    id: "q1",
    scenario: "Area of Interest",
    question: "Which field of computing excites your curiosity the most?",
    options: [
      { id: "a", title: "Machine Learning & AI", text: "Teaching computers to recognize images, think, and create.", scores: { AI: 3, CS: 1 } },
      { id: "b", title: "Data & Predictive Analytics", text: "Analyzing numbers to reveal trends and predict future outcomes.", scores: { DS: 3, MIS: 1 } },
      { id: "c", title: "Core Algorithms & Systems", text: "Mastering memory, computation theory, and lightning-fast code.", scores: { CS: 3, SE: 1 } },
      { id: "d", title: "Web & Mobile Applications", text: "Building polished digital products used by millions of users.", scores: { SE: 3, MIS: 1 } },
      { id: "e", title: "IT Management & Strategy", text: "Leading tech teams, optimizing workflows, and tech leadership.", scores: { MIS: 3, SE: 1 } },
      { id: "f", title: "Ethical Hacking & Defense", text: "Finding vulnerabilities, cracking ciphers, and stopping hackers.", scores: { Security: 3, CS: 1 } }
    ]
  },
  {
    id: "q2",
    scenario: "Hands-on Project",
    question: "If you had a weekend to build something, which would you pick?",
    options: [
      { id: "a", title: "Smart Vision Assistant", text: "An AI camera tracking faces and recognizing everyday objects.", scores: { AI: 3, CS: 1 } },
      { id: "b", title: "Market Trends Dashboard", text: "A statistical analytics board with interactive live data charts.", scores: { DS: 3, MIS: 1 } },
      { id: "c", title: "Custom OS Kernel", text: "A super-fast lightweight virtual machine or emulator engine.", scores: { CS: 3, Security: 1 } },
      { id: "d", title: "Interactive Web Platform", text: "A real-time collaborative social or project management app.", scores: { SE: 3, CS: 1 } },
      { id: "e", title: "Digital Business Portal", text: "An enterprise supply chain tool linking buyers and sellers.", scores: { MIS: 3, SE: 1 } },
      { id: "f", title: "Network Penetration Tool", text: "A network scanner testing Wi-Fi flaws and firewall defenses.", scores: { Security: 3, CS: 1 } }
    ]
  },
  {
    id: "q3",
    scenario: "Problem-Solving Style",
    question: "How do you naturally approach solving complex tech problems?",
    options: [
      { id: "a", title: "Model Training & Experiments", text: "Feed high-quality data to neural models and tune parameters.", scores: { AI: 2, DS: 2 } },
      { id: "b", title: "Statistical & Pattern Analysis", text: "Analyze data distributions to uncover hidden correlations.", scores: { DS: 3, CS: 1 } },
      { id: "c", title: "Algorithmic Optimization", text: "Minimize computational complexity and optimize memory buffers.", scores: { CS: 3, SE: 1 } },
      { id: "d", title: "Modular Architecture", text: "Refactor clean reusable components and automated test suites.", scores: { SE: 3, CS: 1 } },
      { id: "e", title: "Business & User Alignment", text: "Map business goals, eliminate bottlenecks, and guide users.", scores: { MIS: 3, SE: 1 } },
      { id: "f", title: "Security & Threat Audit", text: "Inspect packet streams, scan vulnerabilities, and lock down ports.", scores: { Security: 3, CS: 1 } }
    ]
  },
  {
    id: "q4",
    scenario: "Favorite Tech Tools",
    question: "Which toolkit or development environment sounds most fun?",
    options: [
      { id: "a", title: "PyTorch & GPU Clusters", text: "Deep learning frameworks, Python notebooks, and tensor models.", scores: { AI: 3, DS: 1 } },
      { id: "b", title: "SQL & Big Data Pipelines", text: "Data engineering pipelines, Tableau dashboards, and pandas.", scores: { DS: 3, MIS: 1 } },
      { id: "c", title: "C/C++ & Linux Terminal", text: "Low-level system compilers, assembly code, and GDB debuggers.", scores: { CS: 3, Security: 1 } },
      { id: "d", title: "React, Node & Docker", text: "Modern web frameworks, Git workflows, and cloud deployments.", scores: { SE: 3, CS: 1 } },
      { id: "e", title: "Jira, ERP & Agile Sprints", text: "Product roadmaps, corporate ERP software, and team planning.", scores: { MIS: 3, SE: 1 } },
      { id: "f", title: "Kali Linux & Wireshark", text: "Penetration suites, packet analyzers, and threat hunting tools.", scores: { Security: 3, CS: 1 } }
    ]
  },
  {
    id: "q5",
    scenario: "Future Career Vision",
    question: "Where do you envision yourself making the biggest impact in 5 years?",
    options: [
      { id: "a", title: "Pioneering Autonomous AI", text: "Creating intelligent algorithms that automate and enhance lives.", scores: { AI: 3, CS: 1 } },
      { id: "b", title: "Leading Big Data Strategy", text: "Guiding major corporate or medical decisions with data science.", scores: { DS: 3, MIS: 1 } },
      { id: "c", title: "Inventing Core Compute Tech", text: "Authoring high-speed computation engines and system software.", scores: { CS: 3, AI: 1 } },
      { id: "d", title: "Shipping Iconic Apps", text: "Engineering scalable apps used daily by millions across the globe.", scores: { SE: 3, CS: 1 } },
      { id: "e", title: "Executive Tech Leadership", text: "Serving as CTO or Product Director directing tech innovation.", scores: { MIS: 3, SE: 1 } },
      { id: "f", title: "Defending Critical Systems", text: "Protecting infrastructure, banks, and users from cyber warfare.", scores: { Security: 3, CS: 1 } }
    ]
  }
];
