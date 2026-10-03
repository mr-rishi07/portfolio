import React from 'react';
import { GraduationCap, Code, Server, Database, Shield } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_ITEMS } from '../data/portfolioData';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 border-t border-zinc-200 dark:border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">
            About Me
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-1.5">
            Background, education, and development approach.
          </p>
        </div>

        <div className="space-y-10">
          {/* Bio Description */}
          <div className="minimal-card p-6 sm:p-8 space-y-5">
            <p className="text-zinc-700 dark:text-zinc-300 text-base sm:text-lg leading-relaxed">
              {PERSONAL_INFO.about}
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
              During my internship and personal project development, I have focused extensively on building scalable backend architectures, designing clean RESTful endpoints with appropriate middleware and error handling, and securing apps with JSON Web Tokens (JWT) and role-based access control.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-3">
              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-white/5 text-center">
                <Code className="w-5 h-5 text-cyan-600 dark:text-cyan-400 mx-auto mb-2" />
                <span className="text-sm font-semibold text-zinc-900 dark:text-white block">React Frontends</span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 block">Tailwind & Responsive</span>
              </div>
              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-white/5 text-center">
                <Server className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mx-auto mb-2" />
                <span className="text-sm font-semibold text-zinc-900 dark:text-white block">Node & Express</span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 block">RESTful APIs</span>
              </div>
              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-white/5 text-center">
                <Database className="w-5 h-5 text-amber-600 dark:text-amber-400 mx-auto mb-2" />
                <span className="text-sm font-semibold text-zinc-900 dark:text-white block">MongoDB</span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 block">Mongoose ODM</span>
              </div>
              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-white/5 text-center">
                <Shield className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mx-auto mb-2" />
                <span className="text-sm font-semibold text-zinc-900 dark:text-white block">JWT Security</span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 block">Auth & Roles</span>
              </div>
            </div>
          </div>

          {/* Education Card */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold mb-4 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>Education</span>
            </h3>

            {EDUCATION_ITEMS.map((edu, idx) => (
              <div key={idx} className="minimal-card p-6 sm:p-7 space-y-2.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h4 className="text-base font-bold text-zinc-900 dark:text-white">{edu.degree}</h4>
                  <span className="text-xs font-mono font-medium text-cyan-600 dark:text-cyan-400">{edu.period}</span>
                </div>
                <div className="flex flex-wrap items-center justify-between text-sm text-zinc-600 dark:text-zinc-400">
                  <span className="font-medium text-zinc-800 dark:text-zinc-300">{edu.institution}</span>
                  <span className="font-mono text-zinc-700 dark:text-zinc-300 font-semibold">CGPA: {edu.cgpa}</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 pt-1 leading-relaxed">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
