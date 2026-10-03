import React from 'react';
import { Calendar, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE_ITEMS } from '../data/portfolioData';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-t border-zinc-200 dark:border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">
            Experience
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-1.5">
            Professional background and internship deliverables.
          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-6">
          {EXPERIENCE_ITEMS.map((item) => (
            <div key={item.id} className="minimal-card p-6 sm:p-8 space-y-5">
              
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white">
                      {item.role}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-zinc-100 dark:bg-zinc-900 text-cyan-600 dark:text-cyan-400 border border-zinc-200 dark:border-white/10">
                      {item.type}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 font-medium mt-1">
                    {item.company}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-mono text-zinc-500 dark:text-zinc-400">
                  <Calendar className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>{item.period}</span>
                </div>
              </div>

              {/* Deliverables */}
              <ul className="space-y-2.5 pt-1">
                {item.deliverables.map((deliv, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 pt-3 border-t border-zinc-200/80 dark:border-white/5">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-mono rounded-md bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-white/5"
                  >
                    {tech}
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

export default Experience;
