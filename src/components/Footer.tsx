import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 dark:border-white/5 bg-zinc-50 dark:bg-[#090d16] py-12 text-zinc-600 dark:text-zinc-400 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 flex items-center justify-center font-mono font-bold text-xs text-cyan-600 dark:text-cyan-400 shadow-sm">
              {PERSONAL_INFO.monogram}
            </span>
            <span className="text-sm text-zinc-800 dark:text-zinc-300 font-medium">
              {PERSONAL_INFO.name} • MERN Stack Developer
            </span>
          </div>

          {/* Socials & Top */}
          <div className="flex items-center gap-5 text-sm">
            <div className="flex items-center gap-3.5">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600 hover:text-cyan-600 dark:text-zinc-400 dark:hover:text-cyan-400 transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-white/5 text-center sm:text-left text-xs text-zinc-500 dark:text-zinc-400 font-mono">
          &copy; {currentYear} {PERSONAL_INFO.name}. Built with React, TypeScript & Tailwind CSS.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
