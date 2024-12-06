import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  github?: string;
  index: number;
}

export function ProjectCard({ title, link, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 hover:from-neutral-800 hover:to-neutral-700"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-neutral-100">{title}</h3>
        <div className="flex gap-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 transition-colors hover:text-neutral-100"
          >
            <ExternalLink size={20} />
          </a>
          <a
            href="https://github.com/palak12p"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 transition-colors hover:text-neutral-100"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}