import { Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import { ProjectCard } from './components/ProjectCard';
import { SkillBadge } from './components/SkillBadge';
import { SocialLink } from './components/SocialLink';

const projects = [
  {
    title: 'Remote Chat App',
    link: 'https://lively-donut-9debf2.netlify.app/',
  },
  {
    title: 'MBA Chai Wala',
    link: 'https://eloquent-cascaron-792bff.netlify.app/',
  },
  {
    title: 'Github Wrapped',
    link: 'https://github-wrapped.tech/',
  },
];

const skills = [
  'HTML',
  'CSS',
  'React',
  'Firebase',
  'Git',
  'GitHub',
  'Node.js',
  'MongoDB',
];

const socials = [
  {
    href: 'https://www.linkedin.com/in/palak-pandit-1b041b312?trk=contact-info',
    icon: Linkedin,
    label: 'LinkedIn',
  },
  {
    href: 'https://github.com/palak12p',
    icon: Github,
    label: 'GitHub',
  },
  {
    href: 'https://x.com/PalakPandit3__',
    icon: Twitter,
    label: 'Twitter',
  },
];

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 px-4 py-16 text-neutral-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <div className="mb-6 flex justify-center">
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              src="https://utfs.io/f/40G0kRMDo8YbvtvVGdfudsPr8oNV9WYR5Mtw20GcqFZLfkHb"
              alt="Palak Pandit"
              className="h-32 w-32 rounded-full border-4 border-neutral-800 object-cover shadow-xl"
            />
          </div>
          <h1 className="mb-4 text-4xl font-bold">Palak Pandit</h1>
          <div className="flex justify-center gap-6">
            {socials.map((social, index) => (
              <SocialLink key={social.label} {...social} index={index} />
            ))}
          </div>
        </motion.div>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="mb-6 text-2xl font-semibold">Projects</h2>
          <div className="grid gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="mb-6 text-2xl font-semibold">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <SkillBadge key={skill} skill={skill} index={index} />
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}

export default App;