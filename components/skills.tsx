"use client"

import type React from "react"

import { motion } from "framer-motion"
import {
  Code,
  Database,
  Layout,
  Server,
  Settings,
  Smartphone,
  Globe,
  Zap,
  Figma,
  Github,
  GitBranch,
  Terminal,
  Package,
  Cpu,
  Monitor,
  FileCode,
  Coffee,
  Layers,
  Repeat,
  Workflow,
  Columns,
  Grid,
} from "lucide-react"
import { useState } from "react"

// Define skill categories and their respective technologies
const skillCategories = [
  {
    name: "Frontend",
    icon: <Layout className="h-6 w-6" />,
    color: "emerald",
    skills: [
      { name: "HTML5", icon: <FileCode className="h-5 w-5" /> },
      { name: "CSS3", icon: <Columns className="h-5 w-5" /> },
      { name: "JavaScript", icon: <Coffee className="h-5 w-5" /> },
      { name: "TypeScript", icon: <FileCode className="h-5 w-5" /> },
      { name: "React", icon: <Repeat className="h-5 w-5" /> },
      { name: "Next.js", icon: <Monitor className="h-5 w-5" /> },
      { name: "Tailwind CSS", icon: <Workflow className="h-5 w-5" /> },
      { name: "Framer Motion", icon: <Zap className="h-5 w-5" /> },
      { name: "Redux", icon: <Layers className="h-5 w-5" /> },
      { name: "Responsive Design", icon: <Smartphone className="h-5 w-5" /> },
    ],
  },
  {
    name: "Backend",
    icon: <Server className="h-6 w-6" />,
    color: "blue",
    skills: [
      { name: "Node.js", icon: <Code className="h-5 w-5" /> },
      { name: "Express", icon: <Server className="h-5 w-5" /> },
      { name: "Python", icon: <Code className="h-5 w-5" /> },
      { name: "Django", icon: <Grid className="h-5 w-5" /> },
      { name: "GraphQL", icon: <Database className="h-5 w-5" /> },
      { name: "REST APIs", icon: <Globe className="h-5 w-5" /> },
      { name: "Authentication", icon: <Settings className="h-5 w-5" /> },
      { name: "Serverless", icon: <Cpu className="h-5 w-5" /> },
    ],
  },
  {
    name: "Database",
    icon: <Database className="h-6 w-6" />,
    color: "purple",
    skills: [
      { name: "MongoDB", icon: <Database className="h-5 w-5" /> },
      { name: "PostgreSQL", icon: <Database className="h-5 w-5" /> },
      { name: "MySQL", icon: <Database className="h-5 w-5" /> },
      { name: "Firebase", icon: <Database className="h-5 w-5" /> },
      { name: "Supabase", icon: <Database className="h-5 w-5" /> },
      { name: "Redis", icon: <Database className="h-5 w-5" /> },
    ],
  },
  {
    name: "Tools & Others",
    icon: <Settings className="h-6 w-6" />,
    color: "amber",
    skills: [
      { name: "Git", icon: <GitBranch className="h-5 w-5" /> },
      { name: "GitHub", icon: <Github className="h-5 w-5" /> },
      { name: "Docker", icon: <Package className="h-5 w-5" /> },
      { name: "CI/CD", icon: <Repeat className="h-5 w-5" /> },
      { name: "Jest", icon: <Terminal className="h-5 w-5" /> },
      { name: "Figma", icon: <Figma className="h-5 w-5" /> },
      { name: "VS Code", icon: <Code className="h-5 w-5" /> },
      { name: "Webpack", icon: <Package className="h-5 w-5" /> },
    ],
  },
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].name)

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 bg-gray-50 dark:bg-gray-800/20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200/30 dark:bg-emerald-900/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-300/20 dark:bg-emerald-800/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block text-emerald-600 dark:text-emerald-400 font-medium mb-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            What I can do
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            My Skills
          </motion.h2>
          <motion.div
            className="h-1 w-20 bg-emerald-500 dark:bg-emerald-400 mx-auto rounded-full"
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <motion.p
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I've worked with a variety of technologies and tools throughout my career. Here's a snapshot of my technical
            expertise.
          </motion.p>
        </motion.div>

        {/* Category Tabs - Scrollable on mobile */}
        <div className="flex overflow-x-auto pb-4 md:pb-0 md:flex-wrap justify-start md:justify-center gap-4 mb-10 no-scrollbar">
          {skillCategories.map((category) => (
            <motion.button
              key={category.name}
              className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all flex-shrink-0 ${
                activeCategory === category.name
                  ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
              onClick={() => setActiveCategory(category.name)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{category.icon}</span>
              <span className="font-medium whitespace-nowrap">{category.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-md dark:shadow-gray-800/20 border border-gray-100 dark:border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          key={activeCategory} // This forces re-render animation when category changes
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {skillCategories
              .find((cat) => cat.name === activeCategory)
              ?.skills.map((skill, index) => (
                <SkillCard key={skill.name} name={skill.name} icon={skill.icon} index={index} />
              ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-16 bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-md dark:shadow-gray-800/20 border border-gray-100 dark:border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
            Other Skills & Expertise
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillExpertiseCard
              icon={<Code className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />}
              title="Clean Code"
              description="Writing maintainable, readable, and efficient code following best practices."
            />
            <SkillExpertiseCard
              icon={<Smartphone className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />}
              title="Responsive Design"
              description="Creating websites that work flawlessly across all devices and screen sizes."
            />
            <SkillExpertiseCard
              icon={<Globe className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />}
              title="Web Accessibility"
              description="Building inclusive applications that everyone can use, regardless of ability."
            />
            <SkillExpertiseCard
              icon={<Zap className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />}
              title="Performance Optimization"
              description="Optimizing applications for speed, efficiency, and better user experience."
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SkillCard({
  name,
  icon,
  index,
}: {
  name: string
  icon: React.ReactNode
  index: number
}) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{
        y: -5,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
        backgroundColor: "rgba(16, 185, 129, 0.1)",
      }}
    >
      <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-3">
        {icon}
      </div>
      <h4 className="text-gray-800 dark:text-white font-medium text-center text-sm sm:text-base">{name}</h4>
    </motion.div>
  )
}

function SkillExpertiseCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <motion.div
      className="p-6 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 text-center h-full"
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="flex justify-center mb-4">{icon}</div>
      <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">{title}</h4>
      <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
    </motion.div>
  )
}

