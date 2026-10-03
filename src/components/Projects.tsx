import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { PROJECTS } from '../data/portfolioData';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 border-t border-zinc-200 dark:border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-1.5">
            Real-world full-stack web applications built with the MERN stack.
          </p>
        </div>

        {/* Project Cards Stack */}
        <div className="space-y-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="minimal-card p-6 sm:p-8 space-y-5"
            >
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                    {project.title}
                  </h3>
                  <span className="text-xs sm:text-sm font-mono font-medium text-cyan-600 dark:text-cyan-400">
                    {project.tagline}
                  </span>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2.5 pt-1 sm:pt-0">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-white/10 text-xs sm:text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:text-zinc-950 dark:hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>Code</span>
                  </a>

                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-xs sm:text-sm font-medium text-white shadow-sm transition-colors"
                  >
                    <span>Demo</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {project.description}
              </p>

              {/* Key Highlights */}
              <ul className="space-y-2.5 pt-1">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 pt-3 border-t border-zinc-200/80 dark:border-white/5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono rounded-md bg-zinc-100 dark:bg-zinc-900/90 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-white/5"
                  >
                    {tag}
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

export default Projects;
