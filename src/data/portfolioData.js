export const personalInfo = {
  name: "SOURABH PATEL",
  tagline: "Aspiring MERN Stack Developer building responsive, scalable, and user-friendly web applications with React.js, Node.js, Express.js, and MongoDB.",
  titles: ["MERN Stack Developer", "Full Stack Developer", "React.js Developer"],
  location: "Rewa, Madhya Pradesh, India",
  email: "sourabhpatelamilki2005@gmail.com",
  phone: "+91 8959433184",
  linkedin: "https://linkedin.com/in/sourabhpatel01",
  githubPlaceholder: "https://github.com/sourabh01patel",
  hasGithubRepo: true,
  summary: `Aspiring MERN Stack Developer with hands-on experience in JavaScript, React.js, Node.js, Express.js, MongoDB, HTML, and CSS. Strong understanding of frontend and backend development, RESTful APIs, CRUD operations, responsive web design, and database management. Passionate about building scalable, efficient, and user-friendly web applications using modern JavaScript technologies. A quick learner with strong problem-solving, analytical, and debugging skills.`,
  availability: "Open for Internships & Entry-Level Software Developer Roles",
};

export const aboutData = {
  bio: [
    "I am an aspiring MERN Stack Developer currently pursuing my Bachelor of Technology in Computer Science Engineering (6th Semester). I have hands-on experience building full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
    "My focus is on creating clean, efficient, and user-friendly web interfaces backed by robust RESTful APIs and database systems. I enjoy solving complex logic problems, debugging code, and continually expanding my technical capabilities."
  ],
  coreStack: [
    "JavaScript (ES6+)",
    "React.js & React Hooks",
    "Node.js & Express.js",
    "MongoDB & Mongoose",
    "RESTful APIs & CRUD",
    "HTML5 & CSS3",
    "Git & Version Control",
    "Responsive Web Design"
  ],
  highlights: [
    { title: "Full-Stack Development", desc: "Proficient in end-to-end web app creation with MERN Stack." },
    { title: "API Architecture", desc: "Design and implementation of RESTful CRUD APIs using Node.js & Express." },
    { title: "Database Engineering", desc: "Schema design, data persistence, and operations with MongoDB & Mongoose." },
    { title: "Clean UI / UX", desc: "Building modular React components with modern CSS & responsive layouts." }
  ]
};

export const skillsData = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript", level: 90, isCore: true },
      { name: "HTML5", level: 95, isCore: true },
      { name: "CSS3", level: 90, isCore: true }
    ]
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js", level: 88, isCore: true },
      { name: "JavaScript ES6+", level: 90, isCore: true },
      { name: "React Hooks", level: 85, isCore: true },
      { name: "HTML5", level: 95, isCore: false },
      { name: "CSS3", level: 90, isCore: false },
      { name: "Responsive Web Design", level: 92, isCore: true }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 82, isCore: true },
      { name: "Express.js", level: 85, isCore: true },
      { name: "RESTful APIs", level: 88, isCore: true }
    ]
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", level: 85, isCore: true },
      { name: "Mongoose", level: 82, isCore: true }
    ]
  },
  {
    category: "Core Concepts",
    skills: [
      { name: "Object-Oriented Programming (OOP)", level: 85, isCore: true },
      { name: "Asynchronous Programming", level: 88, isCore: true },
      { name: "Promises & Async/Await", level: 90, isCore: true },
      { name: "DOM Manipulation", level: 92, isCore: false },
      { name: "Event Handling", level: 90, isCore: false },
      { name: "JSON & Data Parsing", level: 95, isCore: false }
    ]
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", level: 85, isCore: true },
      { name: "GitHub", level: 85, isCore: true },
      { name: "VS Code", level: 92, isCore: false },
      { name: "Postman", level: 88, isCore: true },
      { name: "npm", level: 90, isCore: false }
    ]
  },
  {
    category: "Development Concepts",
    skills: [
      { name: "REST APIs", level: 90, isCore: true },
      { name: "CRUD Operations", level: 92, isCore: true },
      { name: "MVC Architecture", level: 82, isCore: true },
      { name: "Authentication & Authorization", level: 85, isCore: true },
      { name: "JWT (JSON Web Tokens)", level: 84, isCore: true },
      { name: "API Integration", level: 88, isCore: true },
      { name: "Responsive Design", level: 92, isCore: false },
      { name: "Debugging & Troubleshooting", level: 88, isCore: true }
    ]
  }
];

export const experienceData = [
  {
    id: 1,
    role: "Trainee",
    company: "Codewave Solution",
    location: "Bhopal, Madhya Pradesh",
    period: "Trainee Program",
    responsibilities: [
      "Developed responsive full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
      "Implemented RESTful APIs and CRUD operations using Node.js, Express.js, and MongoDB.",
      "Built reusable React.js components and responsive user interfaces using HTML5 and CSS3.",
      "Integrated frontend and backend services for seamless data communication and API handling.",
      "Gained hands-on experience in JavaScript, database management, debugging, and MERN Stack development."
    ],
    technologies: [
      "MongoDB", "Express.js", "React.js", "Node.js", "JavaScript", "HTML5", "CSS3", "REST APIs", "Git", "GitHub"
    ]
  }
];

export const projectsData = [
  {
    id: 1,
    title: "E-Commerce Management System",
    subtitle: "Full-Stack Online Store & Inventory Platform",
    category: "MERN Stack",
    description: "Developed a comprehensive full-stack e-commerce web application enabling complete product lifecycle management, real-time catalog browsing, dynamic data storage, and structured API endpoints.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "HTML5", "CSS3"],
    features: [
      "Product management with complete CRUD capabilities",
      "Add, update, view, and delete product catalog items",
      "RESTful API integration for seamless client-server communication",
      "Dynamic data persistence powered by MongoDB database",
      "Fully responsive and intuitive user interface created with React.js"
    ],
    codeSnippet: `// Product Controller - CRUD operations
exports.createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json({ success: true, data: product });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};`,
    githubUrl: null, // Placeholder
    demoUrl: null,   // Placeholder
    badge: "Featured Project"
  },
  {
    id: 2,
    title: "Employee Management System",
    subtitle: "Enterprise Workforce & Record Management",
    category: "MERN Stack",
    description: "Engineered a full-stack Employee Management System designed for efficient CRUD processing of staff records, integrated with Mongoose schemas and rigorously tested via Postman.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API", "Mongoose"],
    features: [
      "Create, view, update, and delete employee records effortlessly",
      "Robust RESTful CRUD API endpoints built with Express.js",
      "MongoDB integration via Mongoose ODM for reliable storage",
      "Comprehensive Postman testing and error handling",
      "React.js frontend integration with real-time UI state sync"
    ],
    codeSnippet: `// Employee Schema using Mongoose
const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  department: String,
  position: String,
  salary: Number
}, { timestamps: true });`,
    githubUrl: null,
    demoUrl: null,
    badge: "Full Stack API"
  },
  {
    id: 3,
    title: "Login Authentication System",
    subtitle: "Secure User Auth & Session Security",
    category: "Authentication",
    description: "Built a secure user authentication system implementing JSON Web Tokens (JWT), pass hashing, protected frontend routes, and robust form validation.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Bcrypt"],
    features: [
      "User registration and login workflow with secure authentication",
      "JWT-based session management and token verification middleware",
      "Protected routes handling on both client and server sides",
      "Frontend client validation with real-time feedback",
      "RESTful Auth API endpoint integration with MongoDB"
    ],
    codeSnippet: `// JWT Authentication Middleware
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ message: "Access Denied" });
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ message: "Invalid Token" });
  }
};`,
    githubUrl: null,
    demoUrl: null,
    badge: "Security & Auth"
  },
  {
    id: 4,
    title: "To-Do List Application",
    subtitle: "Interactive Productivity & Task Tracker",
    category: "Utilities",
    description: "Created an interactive full-stack task management application supporting real-time task creation, status updates, task deletion, and data synchronization.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API"],
    features: [
      "Create, view, update, and delete daily tasks with status toggles",
      "Clean RESTful APIs using Express.js and Node.js backend",
      "MongoDB database connection for persistent task storage",
      "Responsive React interface with instant UI feedback",
      "Clean modular code structure adhering to MVC principles"
    ],
    codeSnippet: `// Task Toggle Route
router.patch('/tasks/:id', async (req, res) => {
  const task = await Task.findByIdAndUpdate(
    req.params.id, 
    { completed: req.body.completed },
    { new: true }
  );
  res.json(task);
});`,
    githubUrl: null,
    demoUrl: null,
    badge: "CRUD Application"
  }
];

export const educationData = [
  {
    id: 1,
    degree: "Bachelor of Technology",
    field: "Computer Science Engineering",
    institution: "Sagar Group",
    location: "Bhopal, Madhya Pradesh",
    period: "2023 – Present",
    status: "Current: 6th Semester",
    grade: "7.0 CGPA",
    icon: "GraduationCap"
  },
  {
    id: 2,
    degree: "Higher Secondary (12th)",
    field: "Science Stream",
    institution: "MP Board",
    location: "Rewa, Madhya Pradesh",
    period: "2022",
    status: "Completed",
    grade: "72%",
    icon: "BookOpen"
  },
  {
    id: 3,
    degree: "Secondary (10th)",
    field: "General Education",
    institution: "MP Board",
    location: "Rewa, Madhya Pradesh",
    period: "2020",
    status: "Completed",
    grade: "74%",
    icon: "Award"
  }
];

export const extraCurricularData = [
  {
    id: 1,
    title: "Educational Content Sharing",
    description: "Regularly share educational content on Java and Data Structures & Algorithms (DSA) on social platforms to help beginner developers.",
    icon: "Share2"
  },
  {
    id: 2,
    title: "Coding Challenges & Contests",
    description: "Actively participate in online programming contests, algorithmic challenges, and platform problem solving.",
    icon: "Trophy"
  },
  {
    id: 3,
    title: "Community & Technical Blogging",
    description: "Engage in tech community events, discussion forums, and technical article writing on core computer science topics.",
    icon: "PenTool"
  },
  {
    id: 4,
    title: "Continuous Skill Advancement",
    description: "Continuously improving Java Backend Development, system design concepts, and advanced problem-solving methodologies.",
    icon: "TrendingUp"
  }
];
