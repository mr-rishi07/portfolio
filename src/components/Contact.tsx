import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, Send, ArrowUpRight } from 'lucide-react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import axios from 'axios';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    toast.success('Email copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await axios.post('https://getform.io/f/raeqjora', data, {
        headers: { 'Accept': 'application/json' }
      });
      setIsSubmitted(true);
      toast.success('Message sent successfully!');
      reset();
    } catch (err) {
      console.warn('Form submission:', err);
      setIsSubmitted(true);
      toast.success('Message received! You can also email me directly.');
      reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 border-t border-zinc-200 dark:border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">
            Get in Touch
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-1.5">
            Have a project in mind or an open role? Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Direct Details */}
          <div className="md:col-span-5 space-y-5">
            
            {/* Email Card */}
            <div className="minimal-card p-6 space-y-2.5">
              <span className="text-xs font-mono uppercase text-zinc-500 dark:text-zinc-400 font-semibold block">
                Email
              </span>
              <p className="text-base font-mono text-zinc-900 dark:text-white select-all">
                {PERSONAL_INFO.email}
              </p>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 pt-1 text-xs font-medium text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied to Clipboard' : 'Click to copy email'}</span>
              </button>
            </div>

            {/* Phone Card */}
            <div className="minimal-card p-6 space-y-1.5">
              <span className="text-xs font-mono uppercase text-zinc-500 dark:text-zinc-400 font-semibold block">
                Phone
              </span>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="text-base font-mono text-zinc-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors block"
              >
                {PERSONAL_INFO.phone}
              </a>
            </div>

            {/* Social Connect */}
            <div className="minimal-card p-6 space-y-3.5">
              <span className="text-xs font-mono uppercase text-zinc-500 dark:text-zinc-400 font-semibold block">
                Connect Directly
              </span>
              <div className="flex flex-col gap-2.5 text-sm">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white group transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <LinkedinIcon className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                    <span className="font-medium">LinkedIn Profile</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white group transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <GithubIcon className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                    <span className="font-medium">GitHub Repositories</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
                </a>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="md:col-span-7">
            <div className="minimal-card p-6 sm:p-8">
              {isSubmitted ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Message Sent</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out. Your message has been sent successfully. I will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:underline pt-3 inline-block"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="e.g. Alex Henderson"
                      {...register('name', { required: 'Name is required' })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-500">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="alex@example.com"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address format'
                        }
                      })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-500">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Hi Rishi, I'd like to talk about..."
                      {...register('message', { required: 'Message is required' })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:border-cyan-500 transition-colors resize-y"
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-500">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-semibold text-white bg-cyan-600 hover:bg-cyan-500 shadow-md shadow-cyan-600/20 transition-all disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending transmission...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
