import React from 'react';
import { Coffee, Heart, Code, Lightbulb } from 'lucide-react';

export default function About() {
  const cards = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "The Code Artist",
      description: "Turning complex problems into elegant solutions is my superpower. I speak fluent JavaScript, Python, and Human!"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "The Innovator",
      description: "Always exploring new technologies and pushing boundaries. Innovation is my middle name (not literally, but you get it)."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "The Enthusiast",
      description: "Passionate about clean code, user experience, and making the web a better place, one commit at a time."
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "The Explorer",
      description: "When I'm not coding, you'll find me hiking trails, reading sci-fi, or experimenting with new coffee brewing methods."
    }
  ];

  return (
    <section className="py-24 bg-white" id="about">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-gray-600">
            Hi! I'm Ayman SIDQI, a Software Developer with a knack for building robust, scalable applications and a strong foundation in containerization, web development, and systems architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-br from-white to-indigo-50 border border-indigo-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}