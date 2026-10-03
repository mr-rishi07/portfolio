import React from 'react';
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

export const GithubIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => {
  return <FaGithub className={className} />;
};

export const LinkedinIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => {
  return <FaLinkedinIn className={className} />;
};

export const TwitterIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => {
  return <FaXTwitter className={className} />;
};
