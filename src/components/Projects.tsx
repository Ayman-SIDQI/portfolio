import React, { useState } from 'react';
import { Github, ExternalLink, Tag } from 'lucide-react';
import webservImage from '../img/webserv.jpg';
import minishellImage from '../img/minishell-pre.jpg';
import ftTranscendenceImage from '../img/transcendence.png';
import inceptionImage from '../img/docker__by_bloglaurel_d9ef7l6.jpg';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: "Inception",
      description: "Set up a small containerized infrastructure with Docker Compose, managing services like Nginx, MariaDB, and Grafana.",
      image: inceptionImage,
      category: "devops",
      tech: ["Docker", "Docker Compose", "Nginx", "MariaDB"],
      github: "https://github.com/Ayman-SIDQI/Inception",  
      live: "#",    
    },
    {
      title: "Minishell",
      description: "Developed a CLI shell program, diving deep into low-level system interactions using C and C++.",
      image: minishellImage,
      category: "backend",
      tech: ["C", "C++", "Bash"],
      github: "#",
      live: "#",
    },
    {
      title: "ft_transcendence",
      description: "Developed a real-time multiplayer Pong game using HTML/CSS/JS, Docker, and Django.",
      image: ftTranscendenceImage,
      category: "fullstack",
      tech: ["HTML", "CSS", "JavaScript", "Docker", "Django"],
      github: "#",
      live: "#",
    },
    {
      title: "Webserv",
      description: "Developed a flexible web server in C++ with a configurable file system for efficient web setups.",
      image: webservImage,
      category: "backend",
      tech: ["C++", "HTTP"],
      github: "#",
      live: "#",
    },
  ];

  const categories = ['all', 'backend', 'fullstack', 'devops'];

  const filteredProjects = projects.filter(project => 
    filter === 'all' ? true : project.category === filter
  );

  return (
    <section className="py-24 bg-gray-50" id="projects">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>

        <div className="flex justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full capitalize transition-all ${
                filter === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-indigo-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href={project.live}
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="w-4 h-4 text-indigo-600" />
                  <span className="text-sm text-indigo-600 capitalize">{project.category}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
