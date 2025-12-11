

export const projects = [
    {
  id: "hrms",
  title: "HRMS - Human Resource Management System",
  tagline: "Role-based HR portal to manage organisations, employees, teams, and activity logs.",
  categories: ["Fullstack"],
  featured: true,
  tech: ["React", "React Router", "Node.js", "Express", "Sequelize", "SQLite", "JWT", "Render", "Netlify"],
  live: "https://hrms-assignment.netlify.app/",
  github: "https://github.com/shalini2376/HRMS-Project",
  highlights: [
    "Role-based login with JWT authentication",
    "Organisation, user, and team management",
    "Activity logs for create/update/delete actions",
    "Deployed on Render (backend) and Netlify (frontend)"
  ],
  longDescription:
    "A full-stack HRMS application that allows organisations to manage their users, teams, employees, and action logs. Implements secure authentication, relational data modeling, and a clean React UI with complete CRUD workflows.",
  images: [
    "src/assets/HRMS/login.png",
    "src/assets/HRMS/register.png",
    "src/assets/HRMS/add_employees.png",
    "src/assets/HRMS/employees.png",
    "src/assets/HRMS/add_team.png",
    "src/assets/HRMS/teams.png",
    "src/assets/HRMS/logs.png",
  ]
},
    {
  id: "oralvis",
  title: "Healthcare Management - Scans & Dentist Portal",
  tagline: "Role-based scan upload system where technicians upload patient scans and dentists review & download reports.",
  categories: ["Fullstack"],
  featured: true,
  tech: ["React", "Multer", "Cloudinary", "REST APIs", "Netlify", "Render"],
  live: "https://oralvis-healthcar-project123.netlify.app",
  github: "https://github.com/shalini2376/oralvis-healthcare",
  highlights: [
    "Role-based login for Technician and Dentist",
    "Technician can upload patient scans using Multer + Cloudinary",
    "Dentist dashboard to view and download patient reports",
    "Secure and optimised media handling via Cloudinary",
    "Improved UX with loaders and error states"
  ],
  longDescription:
  "A role-based healthcare application where technicians upload patient diagnostic scans and dentists access them through a secure dashboard. Multer is used for handling file uploads, while Cloudinary stores and serves scan images and reports. Dentists can view and download the uploaded patient scans. The app also includes improved UI/UX with loaders, error handling, and clean React components.",
  images: [
    "src/assets/oralvis/login.png",
    "src/assets/oralvis/technician-upload.png",
    "src/assets/oralvis/dentist-viewer.png"
  ]
},
    {
  id: "nxt-trendz",
  title: "Nxt Trendz – E-Commerce Shopping App",
  tagline: "A complete e-commerce shopping experience with authentication, product filters, sorting, search, product details, and full cart functionality.",
  categories: ["Frontend"],
  featured: true,

  tech: [
    "React",
    "React Router",
    "Context API",
    "JavaScript (ES6+)",
    "CSS"
  ],

  live: "https://nxt-trendz-shopping-app.netlify.app",
  github: "https://github.com/shalini2376/e-commerce-Website",

  highlights: [
    "Protected routes with login-based access",
    "Search, category filter, rating filter & price sorting",
    "Prime badge & exclusive deals support",
    "Product details page with complete information",
    "Full cart system: add, update quantity, remove, remove all",
    "Cart state managed globally with React Context API"
  ],

  longDescription:
    "A fully functional React e-commerce application implementing real-world features such as authentication, product filtering, sorting, search, product detail pages, and a complete cart system. The cart module was developed from scratch, including quantity updates, duplicate item handling, remove options, protected cart route, and cart summary. The application uses React Router for navigation and Context API for global state management.",

  images: [
    "src/assets/nxttrendz/login.png",
    "src/assets/nxttrendz/Home.png",
    "src/assets/nxttrendz/cart.png",
    "src/assets/nxttrendz/products.png",
    "src/assets/nxttrendz/product_details.png",
    
  ]
},
  {
  id: "vidstream",
  title: "VidStream",
  tagline: "A YouTube-like video streaming interface built with React featuring filters, search, saved videos, and real video playback for exploring component architecture and UI flows.",

  categories: ["Frontend"],

  featured: true,

  tech: [
    "React",
    "JavaScript",
    "CSS",
    "React Router"
  ],

  github: "https://github.com/shalini2376/VidStream",
  live: "",

  highlights: [
    "YouTube-style video browsing interface",
    "Category-based video filters: Home, Trending, Gaming, and Saved",
    "Reusable React component structure",
    "Routing and layout-based UI design",
    "Clean separation of UI sections",
    "Focused on frontend architecture and UX flow"
  ],

  longDescription:
    "VidStream is a frontend React application inspired by popular video streaming platforms like YouTube. The project focuses on building a structured UI using reusable components, managing layouts, and creating intuitive user flows for browsing video content. It highlights React fundamentals such as component composition, styling, and frontend UI organization.",

  images: [
    "src/assets/vidstream.png"
  ]
},
  {
  id: "jobquest",
  title: "JobQuest – Job Search & Filtering Platform",
  tagline:
    "A complete job search application with authentication, advanced filters, search, job details, and protected routes.",
  categories: ["Frontend"],
  featured: true,
  tech: [
    "React",
    "React Router",
    "JavaScript (ES6+)",
    "CSS",
    "js-cookie",
    "react-loader-spinner"
  ],

  live: "https://jobquest-app.netlify.app",
  github: "https://github.com/shalini2376/JobQuest",

  highlights: [
    "Secure JWT-based authentication",
    "Protected routes using React Router",
    "Dynamic job listings with API integration",
    "Advanced filters: employment type, salary range",
    "Search with instant updates (debounced)",
    "Complete Job Details page with skills & similar jobs",
    "Loader & retry UI states for API handling",
    "Fully developed from scratch without starter code"
  ],

  longDescription:
    "JobQuest is a complete job exploration platform where users can log in securely, filter jobs using multiple criteria, search dynamically, and view detailed job descriptions. It handles multiple API states, includes protected routes, and is built entirely from scratch with React class components. The platform demonstrates advanced state management, reusable UI components, and clean architectural practices.",

  images: [
    "src/assets/jobquest/login.png",
    "src/assets/jobquest/home.png",
    "src/assets/jobquest/jobs.png",
    "src/assets/jobquest/job_details.png",
  ]
},
  {
  id: "thechefkart",
  title: "TheChefKart",
  tagline: "A React-based food ordering interface showcasing dynamic menus, cart management, and a smooth UI for browsing dishes.",
  
  categories: ["Frontend"],

  featured: true,

  tech: [
    "React",
    "JavaScript",
    "CSS",
    "REST API (Mock/Static Data)"
  ],

  github: "https://github.com/shalini2376/TheChefKart",
  live: "https://thechefkart-foodpage.netlify.app",

  highlights: [
    "Responsive, clean UI for browsing food items",
    "Interactive cart functionality with quantity updates",
    "Component-based architecture for scalability",
    "Reusable dish cards, categories, and layout sections",
    "Simple and intuitive UI flow for a food-ordering experience"
  ],

  longDescription:
    "TheChefKart is a frontend React application that simulates a food-ordering platform. Users can browse dishes, view details, and manage their cart with quantity updates and a clean user experience. Built using reusable components and a structured React architecture, it focuses on delivering a smooth, visually appealing ordering interface. This project highlights UI development, React state management, and responsive design practices.",

  images: [
    "src/assets/theChefCart/home.png",
    "src/assets/theChefCart/modal.png", 
  ]
},
  {
  id: "weather-app",
  title: "Weather App",
  tagline: "Simple and responsive weather app that fetches current weather forecast using a public weather API.",
  categories: ["Frontend"],
  featured: false,
  tech: ["HTML", "CSS", "JavaScript", "Fetch API"],
  live: "https://shalini2376.github.io/WeatherApp",
  github: "https://github.com/shalini2376/WeatherApp",
  highlights: [
    "Fetches current weather + multi-day forecast from a public API",
    "Responsive UI with weather icons & temperature toggle (C/°F)",
    "Search by city name and handles not-found / network errors",
    "Lightweight, zero-backend (pure frontend) — easy to deploy"
  ],
  longDescription:
    "A lightweight weather web app built with vanilla JavaScript that retrieves current conditions using a public weather API. The app includes search, temperature unit toggle, Humidity, Wind speed and error handling for invalid locations, and a responsive layout suitable for desktop and mobile.",
  images: [
    "src/assets/weatherApp/search.png",
    "src/assets/weatherApp/cityWeatherInfo.png",
    "src/assets/weatherApp/notFound.png"
  ]  
},
 {
  id: "userflow-api",
  title: "UserFlow API – User Management Backend",
  tagline:
    "A Flask-based backend service providing secure user CRUD operations, authentication, and search functionality.",

  categories: ["Backend"],
  featured: false,

  tech: [
    "Python",
    "Flask",
    "SQLite",
    "REST API",
    "Werkzeug Security"
  ],

  github: "https://github.com/shalini2376/UserFlow-API",
  live: "https://retainsure-task-1.onrender.com",

  highlights: [
    "Complete CRUD operations for user management",
    "Password hashing and secure login authentication",
    "Search functionality using query parameters",
    "SQLite database integration with safe SQL queries",
    "Strong error handling with proper HTTP responses",
    "Lightweight and modular backend architecture",
    "Testable endpoints via .http REST client file"
  ],

  longDescription:
    "UserFlow API is a backend microservice built using Python Flask that offers complete CRUD capabilities, user login authentication via hashed passwords, and search functionality. It uses SQLite for persistent storage and follows clean REST API design principles, returning structured JSON responses and proper HTTP status codes. Designed as a production-ready backend project demonstrating database operations, authentication logic, and modular Flask architecture.",
    images: []
},
 {
  id: "urlshortner",
  title: "URL Shortener Service – Flask Microservice",
  tagline:
    "A lightweight Flask-based backend service that generates short URLs, handles fast redirects, and tracks usage analytics using SQLite storage.",

  categories: ["Backend"],

  featured: false, 
  tech: [
     "Python",
    "Flask",
    "SQLite",
    "REST API",
    "Pytest"
  ],

  github: "https://github.com/shalini2376/url_shortner",
  live: "https://url-shortner-h98f.onrender.com", 

  highlights: [
    "POST /api/shorten endpoint with URL validation and short code generation",
    "GET /<short_code> redirect route with automatic click tracking",
    "Analytics endpoint providing click count, timestamps, and original URL",
    "SQLite-backed data layer with modular models and utility helpers",
    "Supports error handling for invalid URLs and non-existent short codes",
    "Clean architecture with maintainable folder structure and test coverage"
  ],

  longDescription:
    "This URL Shortener service is a backend microservice built using Flask that converts long URLs into compact 6-character short codes. The project follows a modular architecture with separate modules for routing, database models, and utility functions. It includes redirect logic, analytics tracking, URL validation, and persistent storage using SQLite. Designed with clean REST principles and supported by unit tests, this service is ideal for understanding backend architecture, database-driven APIs, and production deployment workflows on Render.",
  images: []
  },
{
  id: "niroggyan",
  title: "NirogGyan – Doctor Appointment Interface",
  tagline:
    "A React-based healthcare interface for browsing doctor profiles and checking appointment availability.",

  categories: ["Frontend"],

  featured: false,

  tech: [
    "React",
    "JavaScript",
    "Bootstrap",
    "CSS",
    "React Icons",
    "Reactjs-popup"
  ],

  github: "https://github.com/shalini2376/NirogGyan__assignment",
  live: "https://shalini2376.github.io/NirogGyan__assignment",

  highlights: [
    "Doctor profile listing with availability indicators",
    "Search functionality with normalized input handling",
    "Modal-based appointment booking flow",
    "Conditional rendering for booking confirmation",
    "Clean and responsive healthcare UI"
  ],

  longDescription:
    "NirogGyan is a frontend React project that simulates a doctor discovery and appointment booking workflow. Users can browse doctor profiles, search by name, and check availability before booking appointments. The project focuses on conditional rendering, UI state management during modal interactions, and responsive design, making it a strong frontend case study for healthcare-based user flows.",

  images: [
    "src/assets/nirogGyan/nirogGyaan_appointments.png",
    "src/assets/nirogGyan/nirogGyaan_DrProfiles.png"
  ]
},
{
  id: "responsive-food-website",
  title: "Responsive Food Website",
  tagline: "A clean and responsive restaurant-style website layout built with HTML and CSS.",
  categories: ["Practice", "Frontend"],
  featured: false,
  tech: ["HTML5", "CSS3", "Responsive Design", "Flexbox / Grid"],
  github: "https://github.com/shalini2376/Responsive-Food-Website",
  live: "https://shalini2376.github.io/Responsive-Food-Website",  
  highlights: [
    "Fully responsive layout for desktop, tablet and mobile",
    "Clean restaurant-style UI with navigation, menus and imagery",
    "Semantic HTML structure and modern CSS design",
    "Demonstrates knowledge of media queries and responsive techniques"
  ],
  longDescription:
    "This project is a static responsive food website built purely with HTML and CSS. It showcases a restaurant-style layout, including a navigation bar, menu or home page, and responsive behavior across screen sizes. The project reflects strong fundamentals in web layout, responsive design, and visual styling — useful as a UI design sample in the portfolio.",
  images: [
    "src/assets/food-website/home.png",
    "src/assets/food-website/services.png",
    "src/assets/food-website/clients.png"
  ]
},
{
  id: "tic-tac-toe",
  title: "Tic Tac Toe Game",
  tagline: "A simple browser-based Tic Tac Toe game built for practicing JavaScript logic and DOM manipulation.",

  categories: ["Practice", "Frontend"],

  featured: false,

  tech: [
    "HTML",
    "CSS",
    "JavaScript"
  ],

  github: "https://github.com/shalini2376/tic-tac-toe",
  live: "https://shalini2376.github.io/tic-tac-toe",

  highlights: [
    "Turn-based game logic implementation",
    "Win and draw condition handling",
    "DOM manipulation using vanilla JavaScript",
    "Reset and replay functionality",
    "Simple and clean UI"
  ],

  longDescription:
    "This project is a simple Tic Tac Toe game built using HTML, CSS, and JavaScript as part of frontend practice. It focuses on implementing game logic, handling user interactions, and updating the UI based on game state. The project represents an important learning step in understanding JavaScript conditionals and event-driven programming.",

  images: [
    "src/assets/learningProjects/tic_tac_toe.png"
  ]
},
  {
  id: "calculator",
  title: "Calculator",
  tagline: "A simple calculator application built to practice JavaScript logic and DOM manipulation.",

  categories: ["Practice", "Frontend"],

  featured: false,

  tech: [
    "HTML",
    "CSS",
    "JavaScript"
  ],

  github: "https://github.com/shalini2376/calculaor",
  live: "https://shalini2376.github.io/calculaor",

  highlights: [
    "Basic arithmetic operations support",
    "Interactive button-based UI",
    "Clear and reset functionality",
    "Real-time display updates using JavaScript",
    "Clean and minimal interface design"
  ],

  longDescription:
    "This project is a basic calculator web application built using HTML, CSS, and vanilla JavaScript. It was created as a practice project to strengthen understanding of JavaScript event handling, DOM manipulation, and arithmetic logic. The application demonstrates how user interactions can dynamically update the UI in real time.",

  images: [
    "src/assets/learningProjects/calculator.png"
  ]
},
{
  id: "mynotes-app",
  title: "MyNotes App",
  tagline: "A simple notes management app to practice JavaScript DOM manipulation and search functionality.",

  categories: ["Practice", "Frontend"],

  featured: false,

  tech: [
    "HTML",
    "CSS",
    "JavaScript"
  ],

  github: "https://github.com/shalini2376/MyNotes-App",
  live: "https://shalini2376.github.io/MyNotes-App",

  highlights: [
    "Add, search, and delete notes",
    "Client-side search functionality",
    "Dynamic UI updates using JavaScript",
    "Simple CRUD-style note management",
    "Clean and minimal interface"
  ],

  longDescription:
    "MyNotes App is a lightweight notes management application built with HTML, CSS, and vanilla JavaScript. Users can add notes, search through existing notes, and delete notes dynamically. This project was created as a practice exercise to strengthen understanding of DOM manipulation, event handling, and implementing simple client-side data operations.",

  images: [
    "src/assets/learningProjects/notesApp.png"
  ]
},
{
  id: "coffeebar-ui",
  title: "CoffeeBar UI",
  tagline: "A responsive coffee shop website UI built with HTML, CSS, and JavaScript.",

  categories: ["Practice", "Frontend"],

  featured: false,

  tech: [
    "HTML",
    "CSS",
    "JavaScript"
  ],

  github: "https://github.com/shalini2376/coffeeBar-UI",
  live: "https://shalini2376.github.io/coffeeBar-UI",

  highlights: [
    "Responsive multi-section coffee website layout",
    "Clean and visually appealing UI design",
    "Built using basic web technologies",
    "Focus on layout, styling, and responsiveness",
    "Good example of early frontend UI practice"
  ],

  longDescription:
    "CoffeeBar UI is a static responsive website built using HTML, CSS, and JavaScript. It was created as part of early frontend learning to practice layout structuring, responsive design, and UI styling. The project represents foundational skills in building visually engaging interfaces.",

  images: [
    "src/assets/coffeeBar/coffeeBar1.png",
    "src/assets/coffeeBar/coffeeBar2.png"
  ]
},
{
  id: "temperature-converter",
  title: "Temperature Converter",
  tagline: "A simple temperature conversion tool built to practice JavaScript logic and DOM manipulation.",

  categories: ["Practice", "Frontend"],

  featured: false,

  tech: [
    "HTML",
    "CSS",
    "JavaScript"
  ],

  github: "https://github.com/shalini2376/temperature-converter",
  live: "https://shalini2376.github.io/temperature-converter",

  highlights: [
    "Convert temperatures between Celsius, Fahrenheit, and Kelvin",
    "Instant calculation on user input",
    "Basic input validation",
    "Dynamic UI updates using JavaScript",
    "Clean and easy-to-use interface"
  ],

  longDescription:
    "Temperature Converter is a lightweight web application built using HTML, CSS, and vanilla JavaScript. It allows users to convert temperature values between Celsius, Fahrenheit, and Kelvin. This project was developed as part of frontend practice to strengthen understanding of JavaScript logic and DOM manipulation.",

  images: [
    "src/assets/learningProjects/temperature_convertor.png"
  ]
},
{
  id: "todo-list",
  title: "TO-DO List",
  tagline: "A simple task management app built to practice JavaScript CRUD operations and localStorage handling.",

  categories: ["Practice", "Frontend"],

  featured: false,

  tech: [
    "HTML",
    "CSS",
    "JavaScript",
    "localStorage"
  ],

  github: "https://github.com/shalini2376/TO-DO-List",
  live: "https://shalini2376.github.io/TO-DO-List",

  highlights: [
    "Add and delete tasks",
    "Input validation with user feedback",
    "Persist tasks using localStorage",
    "Dynamic task rendering",
    "Minimal and user-friendly UI"
  ],

  longDescription:
    "TO-DO List is a simple task management web application built using HTML, CSS, and vanilla JavaScript. It allows users to add and delete tasks while persisting data using the browser’s localStorage. This project demonstrates basic CRUD functionality, client-side data persistence, and DOM manipulation.",

  images: [
    "src/assets/learningProjects/todo.png"
  ]
}

]
