import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SocialLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  index: number;
}

export function SocialLink({ href, icon: Icon, label, index }: SocialLinkProps) {
  return (
    <motion.a
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-neutral-400 transition-colors hover:text-neutral-100"
    >
      <Icon size={20} />
      <span>{label}</span>
    </motion.a>
  );
}