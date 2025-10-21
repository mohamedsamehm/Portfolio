import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Github, Linkedin, Mail, ExternalLink, Download, Code, Briefcase, Award, User, FolderGit2 } from 'lucide-react';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const projects = [
    {
      id: 1,
      title: "ClickRank AI",
      category: "AI Platform",
      tech: ["Laravel", "PHP", "MySQL", "TailwindCSS", "API"],
      description: "Advanced AI-powered SEO and content ranking platform that helps businesses optimize their online presence and track performance metrics.",
      role: "Full-stack development, API integration, UI/UX implementation",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      demo: "https://clickrank.ai/",
      github: "#"
    },
    {
      id: 2,
      title: "Katteb.com Pages",
      category: "Backend System",
      tech: ["Laravel", "MySQL", "JavaScript", "Bootstrap"],
      description: "Built multiple pages and features for Katteb.com including admin dashboards, AI content generation tools, and user analytics tracking systems.",
      role: "Backend development, database optimization, analytics integration",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      demo: "https://katteb.com",
      github: "#"
    },
    {
      id: 3,
      title: "NoVirusThanks Landing Page",
      category: "Figma to HTML",
      tech: ["HTML5", "CSS3", "JavaScript", "Figma"],
      description: "Pixel-perfect landing page conversion from Figma design with responsive layouts, smooth animations, and optimized performance.",
      role: "Frontend development, responsive design, Figma to HTML conversion",
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&h=600&fit=crop",
      demo: "https://mohamedsamehm.github.io/novirusthanks/index.html",
      github: "https://github.com/mohamedsamehm/novirusthanks",
      figma: "#"
    },
    {
      id: 4,
      title: "Pompeo Portfolio",
      category: "Figma to HTML",
      tech: ["HTML5", "CSS3", "JavaScript", "Figma"],
      description: "Modern, elegant portfolio website with smooth scrolling, interactive elements, and creative design patterns converted from Figma design.",
      role: "Frontend development, UI/UX implementation, Figma to HTML conversion",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      demo: "https://mohamedsamehm.github.io/Pompeo/",
      github: "https://github.com/mohamedsamehm/Pompeo",
      figma: "#"
    },
    {
      id: 5,
      title: "Placetel Platform",
      category: "Figma to HTML",
      tech: ["HTML5", "CSS3", "JavaScript", "Figma"],
      description: "Professional telecommunications platform interface with complex layouts, responsive navigation, and polished user experience from Figma design.",
      role: "Frontend development, Figma to HTML conversion, cross-browser compatibility",
      image: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=800&h=600&fit=crop",
      demo: "https://mohamedsamehm.github.io/placetel/",
      github: "https://github.com/mohamedsamehm/placetel",
      figma: "#"
    },
    {
      id: 6,
      title: "Dashboard Application",
      category: "Frontend",
      tech: ["HTML5", "CSS3", "JavaScript", "Chart.js"],
      description: "Feature-rich admin dashboard with data visualization, real-time updates, and intuitive interface for managing business metrics.",
      role: "Frontend development, data visualization, UI/UX design",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      demo: "https://mohamedsamehm.github.io/Dashboard-Application/dist/",
      github: "https://github.com/mohamedsamehm/Dashboard-Application"
    },
    {
      id: 7,
      title: "Muneer Subscriber Dashboard",
      category: "Frontend",
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      description: "Comprehensive subscriber management dashboard with user analytics, subscription tracking, and interactive data displays.",
      role: "Frontend development, dashboard design, responsive implementation",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      demo: "https://mohamedsamehm.github.io/Muneer-html/subscriber-dashboard.html",
      github: "https://github.com/mohamedsamehm/Muneer-html"
    },
    {
      id: 8,
      title: "Woofwork Platform",
      category: "Frontend",
      tech: ["HTML5", "CSS3", "JavaScript"],
      description: "Modern service platform with clean design, smooth interactions, and mobile-optimized user experience.",
      role: "Frontend development, UI/UX implementation, responsive design",
      image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=800&h=600&fit=crop",
      demo: "https://mohamedsamehm.github.io/Woofwork",
      github: "https://github.com/mohamedsamehm/Woofwork"
    },
    {
      id: 9,
      title: "Appie Landing Page",
      category: "Frontend",
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      description: "Vibrant, modern app landing page with animated sections, feature showcases, and conversion-optimized design.",
      role: "Frontend development, animation implementation, responsive design",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      demo: "https://mohamedsamehm.github.io/appie",
      github: "https://github.com/mohamedsamehm/appie"
    },
    {
      id: 10,
      title: "EgMoodle LMS",
      category: "Full-Stack",
      tech: ["PHP", "MySQL", "JavaScript", "Bootstrap", "Moodle"],
      description: "Custom Learning Management System built on Moodle with tailored features for educational institutions and online learning platforms.",
      role: "Full-stack development, Moodle customization, plugin integration",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
      demo: "#",
      github: "https://github.com/mohamedsamehm/EgMoodle"
    },
    {
      id: 11,
      title: "Multi-Step Accident Form",
      category: "Frontend",
      tech: ["HTML5", "CSS3", "JavaScript", "Form Validation"],
      description: "User-friendly multi-step form with validation, progress tracking, and smooth transitions for accident reporting and data collection.",
      role: "Frontend development, form logic, UX optimization",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop",
      demo: "https://mohamedsamehm.github.io/MultiStepForms/accident-form/index.html",
      github: "https://github.com/mohamedsamehm/MultiStepForms"
    },
    {
      id: 12,
      title: "AI Content Suite (10+ Tools)",
      category: "AI Platform",
      tech: ["Laravel", "PHP", "MySQL", "TailwindCSS", "API"],
      description: "Comprehensive AI content generation platform with 10+ tools including paragraph, product name, resignation letter, slogan, hashtag, caption, content idea, and meta description generators.",
      role: "Lead developer, architecture design, API integration, UI implementation",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
      demo: "#",
      github: "#"
    }
  ];

  const upcomingProjects = [
    {
      title: "E-commerce Platform",
      status: "In Planning",
      tech: ["Laravel", "React", "MySQL"]
    },
    {
      title: "Real-time Chat Application",
      status: "In Development",
      tech: ["Laravel", "WebSockets", "Redis"]
    },
    {
      title: "Portfolio CMS",
      status: "Concept Phase",
      tech: ["Laravel", "Next.js", "PostgreSQL"]
    }
  ];

  const skills = {
    frontend: ["HTML5", "CSS3", "JavaScript", "React", "TailwindCSS", "Bootstrap"],
    backend: ["PHP", "Laravel", "WordPress", "MySQL"],
    tools: ["Git", "GitHub", "VSCode", "Postman", "Figma"],
    soft: ["Problem-solving", "Communication", "Reliability", "Clean Code"]
  };

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} min-h-screen transition-colors duration-300`}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 ${darkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-sm border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              MS
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'skills', 'projects', 'contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors ${
                    activeSection === item
                      ? 'text-blue-500'
                      : darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                className="md:hidden p-2 rounded-lg"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="px-4 pt-2 pb-4 space-y-2">
              {['home', 'about', 'experience', 'skills', 'projects', 'contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left px-4 py-2 rounded-lg capitalize ${
                    activeSection === item
                      ? 'bg-blue-500 text-white'
                      : darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-6">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-4xl font-bold">
                MS
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Mohamed Sameh
            </h1>
            <p className="text-xl md:text-2xl mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-semibold">
              Full-Stack Developer
            </p>
            <p className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Frontend expert turned Backend specialist with 2,400+ Upwork hours and 3+ years building responsive, pixel-perfect web experiences
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`px-8 py-3 rounded-lg font-semibold border-2 ${
                  darkMode ? 'border-gray-700 hover:bg-gray-800' : 'border-gray-300 hover:bg-gray-100'
                } transition-all`}
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-4 ${darkMode ? 'bg-gray-800/50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-12">
            <User className="mr-3 text-blue-500" size={32} />
            <h2 className="text-4xl font-bold">About Me</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                I'm a passionate Full-Stack Developer with a unique journey from frontend mastery to backend excellence. With over 2,400 hours of successful Upwork projects, I've honed my skills in creating pixel-perfect, responsive designs that users love.
              </p>
              <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Currently working at Katteb.com, I build sophisticated admin dashboards and AI-powered tools that help thousands of users create content efficiently. My expertise spans from converting Figma designs to flawless HTML to architecting complex Laravel applications.
              </p>
              <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                My goal is to become a strong backend and software developer, continuously expanding my skills in PHP, Laravel, and system architecture while maintaining my frontend expertise.
              </p>
            </div>
            <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
              <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="font-semibold">Experience</p>
                    <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>3+ years in web development</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="font-semibold">Upwork Success</p>
                    <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Top Rated with 2,400+ hours</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="font-semibold">Current Role</p>
                    <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Backend Developer at Katteb.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="font-semibold">Specialization</p>
                    <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Figma to HTML, Laravel, AI Tools</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-12">
            <Briefcase className="mr-3 text-blue-500" size={32} />
            <h2 className="text-4xl font-bold">Work Experience</h2>
          </div>
          <div className="space-y-8">
            <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} hover:shadow-xl transition-shadow`}>
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Backend Developer (Laravel)</h3>
                  <p className="text-blue-500 font-semibold">Katteb.com</p>
                </div>
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${darkMode ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700'}`}>
                  Current
                </span>
              </div>
              <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Built advanced admin dashboards tracking registrations, conversions, and user analytics</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Integrated API systems for performance metrics and content automation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Developed 10+ AI-powered content generation tools</span>
                </li>
              </ul>
            </div>

            <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} hover:shadow-xl transition-shadow`}>
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Frontend Developer</h3>
                  <p className="text-blue-500 font-semibold">Upwork (Freelance)</p>
                </div>
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${darkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-700'}`}>
                  3+ Years
                </span>
              </div>
              <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>2,400+ hours billed with Top Rated status</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Specialized in Figma to HTML conversions with pixel-perfect accuracy</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Expert in creating responsive, lightweight, and accessible designs</span>
                </li>
              </ul>
            </div>

            <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} hover:shadow-xl transition-shadow`}>
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">WordPress Developer</h3>
                  <p className="text-blue-500 font-semibold">Freelance Projects</p>
                </div>
              </div>
              <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Custom widgets, theme customization, and plugin integration</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Automated article generation and dynamic content updates</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <div className="flex items-center mb-8">
              <Award className="mr-3 text-purple-500" size={28} />
              <h3 className="text-3xl font-bold">Achievements</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} text-center`}>
                <div className="text-4xl font-bold text-blue-500 mb-2">2,400+</div>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Upwork Hours</p>
              </div>
              <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} text-center`}>
                <div className="text-4xl font-bold text-purple-500 mb-2">Top Rated</div>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Upwork Status</p>
              </div>
              <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} text-center`}>
                <div className="text-4xl font-bold text-blue-500 mb-2">10+</div>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>AI Tools Built</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 px-4 ${darkMode ? 'bg-gray-800/50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-12">
            <Code className="mr-3 text-blue-500" size={32} />
            <h2 className="text-4xl font-bold">Skills & Technologies</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-500">Frontend</h3>
              <div className="space-y-2">
                {skills.frontend.map(skill => (
                  <div key={skill} className={`p-3 rounded-lg ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-purple-500">Backend</h3>
              <div className="space-y-2">
                {skills.backend.map(skill => (
                  <div key={skill} className={`p-3 rounded-lg ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-500">Tools & Design</h3>
              <div className="space-y-2">
                {skills.tools.map(skill => (
                  <div key={skill} className={`p-3 rounded-lg ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-purple-500">Soft Skills</h3>
              <div className="space-y-2">
                {skills.soft.map(skill => (
                  <div key={skill} className={`p-3 rounded-lg ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-12">
            <FolderGit2 className="mr-3 text-blue-500" size={32} />
            <h2 className="text-4xl font-bold">Featured Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map(project => (
              <div
                key={project.id}
                className={`rounded-2xl overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} hover:shadow-2xl transition-all cursor-pointer group`}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'} line-clamp-2`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map(tech => (
                      <span
                        key={tech}
                        className={`text-sm px-3 py-1 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h3 className="text-2xl font-bold mb-6">Upcoming Projects</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {upcomingProjects.map((project, idx) => (
                <div key={idx} className={`p-6 rounded-xl ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold">{project.title}</h4>
                    <span className={`text-xs px-2 py-1 rounded ${darkMode ? 'bg-yellow-500/20 text-yellow-400' : 'bg-yellow-100 text-yellow-700'}`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(tech => (
                      <span key={tech} className={`text-xs px-2 py-1 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CV Section */}
      <section className={`py-20 px-4 ${darkMode ? 'bg-gray-800/50' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Download My CV</h2>
          <p className={`text-lg mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Get a complete overview of my experience, skills, and achievements
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all inline-flex items-center">
            <Download className="mr-2" size={20} />
            Download CV
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <Mail className="mr-3 text-blue-500" size={32} />
            <h2 className="text-4xl font-bold">Get In Touch</h2>
          </div>
          <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <form className="space-y-6">
              <div>
                <label className="block mb-2 font-semibold">Name</label>
                <input
                  type="text"
                  className={`w-full p-3 rounded-lg ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-300'} border focus:border-blue-500 outline-none transition-colors`}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Email</label>
                <input
                  type="email"
                  className={`w-full p-3 rounded-lg ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-300'} border focus:border-blue-500 outline-none transition-colors`}
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Message</label>
                <textarea
                  rows={5}
                  className={`w-full p-3 rounded-lg ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-300'} border focus:border-blue-500 outline-none transition-colors`}
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
              >
                Send Message
              </button>
            </form>

            <div className="mt-12 pt-8 border-t border-gray-700">
              <h3 className="text-xl font-bold mb-6 text-center">Connect With Me</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://github.com/mohamedsamehm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center px-6 py-3 rounded-lg ${darkMode ? 'bg-gray-900 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
                >
                  <Github className="mr-2" size={20} />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/mohamedsameh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center px-6 py-3 rounded-lg ${darkMode ? 'bg-gray-900 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
                >
                  <Linkedin className="mr-2" size={20} />
                  LinkedIn
                </a>
                <a
                  href="https://upwork.com/freelancers/mohamedsameh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center px-6 py-3 rounded-lg ${darkMode ? 'bg-gray-900 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
                >
                  <Briefcase className="mr-2" size={20} />
                  Upwork
                </a>
                <a
                  href="mailto:mohamed@example.com"
                  className={`flex items-center px-6 py-3 rounded-lg ${darkMode ? 'bg-gray-900 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
                >
                  <Mail className="mr-2" size={20} />
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto text-center">
          <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
            © 2025 Mohamed Sameh. Built with React & TailwindCSS.
          </p>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            onClick={e => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
              >
                <X size={24} />
              </button>
              <div className="absolute bottom-4 left-4">
                <span className="px-4 py-2 bg-blue-500 text-white rounded-full font-semibold">
                  {selectedProject.category}
                </span>
              </div>
            </div>

            <div className="p-8">
              <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map(tech => (
                    <span
                      key={tech}
                      className={`px-4 py-2 rounded-full ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} font-semibold`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3">Project Overview</h3>
                <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {selectedProject.description}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3">My Role</h3>
                <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {selectedProject.role}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                >
                  <ExternalLink className="mr-2" size={20} />
                  Live Demo
                </a>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center px-6 py-3 rounded-lg border-2 ${darkMode ? 'border-gray-700 hover:bg-gray-700' : 'border-gray-300 hover:bg-gray-100'} transition-all font-semibold`}
                >
                  <Github className="mr-2" size={20} />
                  View Code
                </a>
                {selectedProject.figma && (
                  <a
                    href={selectedProject.figma}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center px-6 py-3 rounded-lg border-2 ${darkMode ? 'border-gray-700 hover:bg-gray-700' : 'border-gray-300 hover:bg-gray-100'} transition-all font-semibold`}
                  >
                    <svg className="mr-2" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 2C6.34 2 5 3.34 5 5C5 6.66 6.34 8 8 8H12V2H8ZM12 8V14H8C6.34 14 5 12.66 5 11C5 9.34 6.34 8 8 8H12ZM12 14H16C17.66 14 19 12.66 19 11C19 9.34 17.66 8 16 8H12V14ZM12 2H16C17.66 2 19 3.34 19 5C19 6.66 17.66 8 16 8H12V2ZM12 14V20C12 21.66 13.34 23 15 23C16.66 23 18 21.66 18 20C18 18.34 16.66 17 15 17C13.79 17 12.78 17.79 12.39 18.88L12 14Z"/>
                    </svg>
                    Figma Design
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}