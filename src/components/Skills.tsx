import React from 'react';
import { 
  Code2, Database, Palette, Terminal, Globe, Server,
  Cpu, GitBranch, Monitor, Shield
} from 'lucide-react';

export default function Skills() {
  const skills = [
    {
      category: "Full-Stack",
      icon: <Monitor />,
      items: [
        { name: "Django", level: 90 },
        { name: "Three.js", level: 85 },
        { name: "JavaScript", level: 88 },
        { name: "Bootstrap", level: 81 },
        { name: "CSS/HTML", level: 92 }
      ]
    },
    {
      category: "Tools & DevOps",
      icon: <GitBranch />,
      items: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 82 },
        { name: "Blender", level: 85 }
      ]
    },
    {
      category: "Other",
      icon: <Server />,
      items: [
        { name: "C/C++", level: 85 },
        { name: "Python", level: 80 },
        { name: "Postgres", level: 70 },
        { name: "SQL", level: 55 }
      ]
    }
  ];

  return (
    <section className="py-24 bg-white" id="skills">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Skills & Expertise</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-gradient-to-br from-white to-indigo-50 border border-indigo-100 hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-bold">{skillGroup.category}</h3>
              </div>

              <div className="space-y-6">
                {skillGroup.items.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full transform origin-left transition-transform duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: <Code2 />, label: "Clean Code" },
            { icon: <Shield />, label: "Security First" },
            { icon: <Globe />, label: "Responsive Design" },
            { icon: <Cpu />, label: "Performance" }
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-white border border-gray-100 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <span className="font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}