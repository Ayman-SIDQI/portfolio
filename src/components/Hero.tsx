import React from 'react';
import { ChevronDown, Sparkles, Rocket } from 'lucide-react';
import myPortrait from '../img/image.jpg';



export default function Hero() {
  return (
    <section className="min-h-screen relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      
      <div className="container mx-auto px-6 py-24 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium animate-bounce">
                <Sparkles className="w-4 h-4 mr-2" />
                Hello there! I'm a developer
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                Crafting Digital Magic
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-xl">
                I transform ideas into elegant code, sprinkled with creativity and powered by innovation. Let's build something extraordinary together!
              </p>
            </div>

            <div className="flex gap-4">
            <a href={`#contact`}>
                <button className="group px-6 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-lg font-medium transition-all hover:bg-indigo-700 dark:hover:bg-indigo-600 flex items-center">
                Let's Build Something
                  <Rocket className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
              <a href={`#projects`}>
                <button className="px-6 py-3 border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 rounded-lg font-medium hover:bg-indigo-50 dark:hover:bg-indigo-900/50 transition-colors">
                Explore My Work
                </button>
              </a>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <img
              src={myPortrait}
              alt="Portrait"
              className="rounded-3xl object-cover w-full h-full relative z-10 shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-400 dark:bg-yellow-500 rounded-full flex items-center justify-center shadow-lg z-20">
                <span className="text-4xl">👋</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400 dark:text-gray-500" />
        </div>
      </div>
    </section>
  );
}