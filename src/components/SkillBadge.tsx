import { motion } from 'framer-motion';

interface SkillBadgeProps {
  skill: string;
  index: number;
}

export function SkillBadge({ skill, index }: SkillBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="inline-flex items-center rounded-full bg-neutral-800 px-4 py-1.5 text-sm font-medium text-neutral-100 ring-1 ring-inset ring-neutral-700"
    >
      {skill}
    </motion.span>
  );
}