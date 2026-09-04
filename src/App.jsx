// App.jsx

import React from "react";
import { GitBranch, Link, Mail, ExternalLink, Download } from "lucide-react";
import myPhoto from './assets/himanshu profile image.jpg';
import farmingPhoto from './assets/smart-farming.png';
import hostelPhoto from './assets/hostel.png';
import portfolioPhoto from './assets/portfolio.png';
import {FaHtml5,FaCss3Alt,FaJs,FaReact,FaNodeJs,FaGitAlt,FaGithub,} from "react-icons/fa";

import { SiTailwindcss, SiExpress, SiMongodb,} from "react-icons/si";
import { motion } from "framer-motion";
const App = () => {
  const projects = [
    {
      title: "Hostel management system",
      description:
        "Developed a MERN Stack based Hostel Management System to streamline hostel operations, including student registration, room management, occupancy tracking, and secure data management.",
      tech: ["React", "Node.js","Express.js", "MongoDB"],
      github: "https://github.com/Himanshu7618/Hostel-Management-System",
      live: "https://hostel-management-system-acme209.vercel.app",
      image: hostelPhoto,
    },
    {
      title: "Smart Farming System",
      description:
        "A full-stack farming platform that helps farmers manage crops, monitor farming activities, and access agricultural information",
      tech: ["React","Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/Himanshu7618/Smart-farming.git",
      live: "https://smart-farming-three.vercel.app/",
      image: farmingPhoto,
    },
    {
      title: "My Portfolio",
      description:
        "A modern and responsive personal portfolio website built with React.js and Tailwind CSS to showcase projects, skills, and professional achievements. Features a clean UI, smooth navigation",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/Himanshu7618/portfolio.git",
      live: "https://portfolio-coral-nu-64.vercel.app",
      image: portfolioPhoto,
    },
  ];

const skills = [
  { name: "HTML", icon: <FaHtml5 size={35} /> },
  { name: "CSS", icon: <FaCss3Alt size={35} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={35} /> },
  { name: "JavaScript", icon: <FaJs size={35} /> },
  { name: "React.js", icon: <FaReact size={35} className="animate-spin"/> },
  { name: "Node.js", icon: <FaNodeJs size={35} /> },
  { name: "Express.js", icon: <SiExpress size={35} /> },
  { name: "MongoDB", icon: <SiMongodb size={35} /> },
  { name: "Git", icon: <FaGitAlt size={35} /> },
  { name: "GitHub", icon: <FaGithub size={35} /> },
];

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 border-b border-gray-800 sticky top-0 bg-black z-50">
        <h1 className="text-2xl font-bold text-cyan-400">
          Himanshu Portfolio
        </h1>

        <ul className="hidden md:flex gap-8 text-gray-300">
          <li>
            <a href="#about" className="hover:text-cyan-400">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-cyan-400">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-cyan-400">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-cyan-400">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <motion.section
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="flex flex-col justify-center items-center"
>
        <img
          src={myPhoto}
          alt="profile"
          className="w-40 h-40 rounded-full border-4 border-cyan-400 mb-6"
        />

        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-cyan-400">Himanshu</span>
        </h1>

        <p className="text-gray-400 max-w-2xl text-lg">
         MERN Stack Developer | Web Development Intern at PiSoft Informatics Pvt. Ltd. | Building modern, responsive and scalable web applications.
        </p>

        <div className="flex gap-5 mt-8">
          <a
            href="#projects"
            className="bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            View Projects
          </a>

          <a
            href="/himanshu_resume1.pdf"
            className="border border-cyan-400 px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-cyan-400 hover:text-black transition"
          >
            <Download size={18} />
            Resume
          </a>
        </div>
      </motion.section>

      {/* About Section */}
      <section id="about" className="px-8 py-20 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-cyan-400">About Me</h2>

        <p className="text-gray-300 leading-8 text-lg">
        Computer Science student at Shobhit University Gangoh and
         Web Development Intern at PiSoft Informatics Pvt. Ltd.
          Passionate about building modern, responsive web
           applications using React.js, Node.js, Express.js, and MongoDB.
            Focused on creating efficient solutions and continuously
             improving my full-stack development skills through real-world
              projects and hands-on experience.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="px-8 py-20 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-cyan-400">Skills</h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-5 flex flex-col items-center gap-3 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
              >
                {skill.icon}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-8 py-20 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-cyan-400">Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
           <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 rounded-2xl ..."
          >
              {project.image ? (
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="h-52 w-full object-cover"
                />
              ) : (
                <div className="h-52 bg-gray-800"></div>
              )}

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-cyan-400 text-black px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 hover:text-cyan-400"
                  >
                    <GitBranch size={18} />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 hover:text-cyan-400"
                  >
                    <ExternalLink size={18} />
                    Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-8 py-20 bg-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-cyan-400">
            Contact Me
          </h2>

          <p className="text-gray-400 mb-10">
            Feel free to connect with me for internships, projects, or
            collaboration opportunities.
          </p>

          <div className="flex justify-center gap-8">
            <a
              href="https://github.com/Himanshu7618"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400"
            >
              <GitBranch size={32} />
            </a>

            <a
              href="https://www.linkedin.com/in/himanshu-choudhary-45a438321"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400"
            >
              <Link size={32} />
            </a>

            <a
              href="mailto:hc5589414@gmail.com"
              className="hover:text-cyan-400"
            >
              <Mail size={32} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-gray-800 text-gray-500">
       Built with React.js, Tailwind CSS & ❤️ by Himanshu Choudhary
      </footer>
    </div>
  );
};

export default App;