"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Briefcase, GraduationCap, Award, Code, ChevronDown, ChevronUp } from "lucide-react"
import { useRef, useState } from "react"

// Define more focused timeline items
const timelineItems = [
  {
    id: 1,
    icon: <GraduationCap className="h-6 w-6" />,
    title: "Computer Science Degree",
    subtitle: "University of Technology",
    date: "2016 - 2020",
    category: "Education",
    description:
      "Graduated with honors in Computer Science, specializing in web development and user interface design.",
    details:
      "Completed coursework in algorithms, data structures, software engineering, and web development. Thesis focused on responsive design patterns for modern web applications.",
  },
  {
    id: 2,
    icon: <Briefcase className="h-6 w-6" />,
    title: "Junior Developer",
    subtitle: "Tech Innovations Inc.",
    date: "2020 - 2021",
    category: "Work",
    description: "Developed responsive web applications using React and Next.js.",
    details:
      "Implemented modern UI/UX designs and improved site performance by 40% through code optimization. Worked on e-commerce platforms and content management systems.",
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    id: 3,
    icon: <Code className="h-6 w-6" />,
    title: "E-commerce Platform",
    subtitle: "Major Client Project",
    date: "2021",
    category: "Project",
    description: "Led the development of a full-featured e-commerce platform.",
    details:
      "Built product listings, cart functionality, and secure checkout. Implemented state management and API integration with payment gateways.",
    skills: ["TypeScript", "Next.js", "Stripe"],
  },
  {
    id: 4,
    icon: <Briefcase className="h-6 w-6" />,
    title: "Senior Developer",
    subtitle: "Digital Solutions Ltd.",
    date: "2022 - Present",
    category: "Work",
    description: "Lead developer for client projects, focusing on performance optimization and accessibility.",
    details:
      "Mentored junior developers and implemented best practices across the organization. Specialized in building scalable web applications with modern frameworks.",
    skills: ["TypeScript", "Next.js", "GraphQL"],
  },
  {
    id: 5,
    icon: <Award className="h-6 w-6" />,
    title: "Web Development Certification",
    subtitle: "Tech Academy",
    date: "2019",
    category: "Certification",
    description: "Advanced certification in modern web development techniques and frameworks.",
    details:
      "Specialized in responsive design and progressive web applications. Learned best practices for performance optimization and accessibility.",
  },
]

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section
      id="timeline"
      className="py-20 px-4 sm:px-6 bg-gray-50 dark:bg-gray-800/20 relative overflow-hidden"
      ref={containerRef}
    >
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
            My professional path
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            My Journey
          </motion.h2>
          <motion.div
            className="h-1 w-20 bg-emerald-500 dark:bg-emerald-400 mx-auto rounded-full"
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>

        <div className="relative">
          {/* Animated vertical line - only visible on larger screens */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-emerald-200 dark:bg-emerald-800/50 overflow-hidden hidden md:block">
            <motion.div
              className="h-full w-full bg-emerald-500 dark:bg-emerald-400 origin-top"
              style={{ scaleY: lineHeight }}
            />
          </div>

          <div className="space-y-8 md:space-y-12">
            {timelineItems.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineItem({
  item,
  index,
}: {
  item: (typeof timelineItems)[0]
  index: number
}) {
  const isEven = index % 2 === 0
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="relative">
      {/* Category tag - only visible on larger screens */}
      <motion.div
        className={`absolute top-0 ${isEven ? "left-0 md:left-auto md:right-[calc(50%+2rem)]" : "left-0 md:left-[calc(50%+2rem)]"} bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 px-3 py-1 rounded-full text-sm hidden md:block`}
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {item.category}
      </motion.div>

      {/* Dot on the timeline - only visible on larger screens */}
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-emerald-500 dark:bg-emerald-600 text-white flex items-center justify-center z-10 shadow-lg shadow-emerald-500/20 dark:shadow-emerald-600/20 hidden md:flex"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(16, 185, 129, 0.4)" }}
        whileTap={{ scale: 0.9 }}
      >
        {item.icon}
      </motion.div>

      {/* Content */}
      <motion.div
        className={`relative w-full md:w-5/12 ${isEven ? "md:ml-auto" : "md:mr-auto"} bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-gray-800/20 border border-gray-100 dark:border-gray-700`}
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{
          scale: 1.03,
          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
          borderColor: "rgb(16, 185, 129)",
        }}
      >
        {/* Mobile view icon and category */}
        <div className="flex items-center gap-3 mb-3 md:hidden">
          <div className="w-10 h-10 rounded-full bg-emerald-500 dark:bg-emerald-600 text-white flex items-center justify-center">
            {item.icon}
          </div>
          <span className="bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 px-2 py-0.5 rounded-full text-xs">
            {item.category}
          </span>
        </div>

        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">{item.title}</h3>
            <p className="text-emerald-600 dark:text-emerald-400">{item.subtitle}</p>
          </div>
          <span className="bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 px-3 py-1 rounded-full text-sm">
            {item.date}
          </span>
        </div>

        <div className="text-gray-600 dark:text-gray-300">
          <p>{item.description}</p>

          {/* Expandable content */}
          <motion.div
            className="overflow-hidden mt-2"
            initial={{ height: 0 }}
            animate={{ height: isExpanded ? "auto" : 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="mt-2">{item.details}</p>

            {item.skills && (
              <ul className="mt-3 flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <li
                    key={skill}
                    className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>

          {/* Toggle button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-3 text-emerald-600 dark:text-emerald-400 flex items-center gap-1 hover:underline text-sm"
          >
            {isExpanded ? (
              <>
                Show less <ChevronUp className="h-4 w-4" />
              </>
            ) : (
              <>
                Show more <ChevronDown className="h-4 w-4" />
              </>
            )}
          </button>
        </div>
      </motion.div>
    </div>
  )
}

