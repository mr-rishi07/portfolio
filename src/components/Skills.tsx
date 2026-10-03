import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 border-t border-zinc-200 dark:border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-1.5">
            Technologies, libraries, and tools I use to build full-stack web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((category, index) => (
            <div
              key={index}
              className={`minimal-card p-6 sm:p-7 ${
                index === SKILL_CATEGORIES.length - 1 ? 'md:col-span-2' : ''
              }`}
            >
              <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-semibold mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-xs sm:text-sm font-medium text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-white/5 hover:border-cyan-500/40 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
