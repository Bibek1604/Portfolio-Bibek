"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github, Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react"
import { useRef, useState } from "react"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured online store with product listings, cart functionality, and secure checkout.",
    longDescription:
      "This e-commerce platform was built with Next.js and includes features like product filtering, user authentication, shopping cart, wishlist, and secure payment processing with Stripe. The admin dashboard allows for easy product and order management.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB"],
    demoUrl: "#",
    githubUrl: "#",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A productivity application for organizing tasks with drag-and-drop functionality and team collaboration.",
    longDescription:
      "This task management application features drag-and-drop task organization, team collaboration tools, real-time updates, and integration with calendar apps. It includes user authentication, role-based permissions, and activity tracking.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "TypeScript", "Firebase", "Framer Motion"],
    demoUrl: "#",
    githubUrl: "#",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing projects and skills with a modern design.",
    longDescription:
      "This portfolio website was designed with a focus on user experience and visual appeal. It features smooth animations, responsive design, and optimized performance. The content is easily manageable through a headless CMS.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS", "Sanity CMS"],
    demoUrl: "#",
    githubUrl: "#",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "A weather application displaying current conditions and forecasts with interactive maps.",
    longDescription:
      "This weather dashboard provides real-time weather data, 7-day forecasts, and interactive maps. It includes features like location search, saved locations, weather alerts, and historical weather data visualization.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["JavaScript", "API Integration", "Chart.js", "Mapbox"],
    demoUrl: "#",
    githubUrl: "#",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<null | (typeof projects)[0]>(null)
  const [galleryIndex, setGalleryIndex] = useState(0)

  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  const getYOffset = (index: number) => {
    return useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? 50 : 100, index % 2 === 0 ? -50 : -100])
  }

  return (
    <section id="projects" className="py-20 px-6 relative overflow-hidden" ref={containerRef}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-white dark:bg-gray-900 -z-10" />

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
            My recent work
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            My Projects
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
            Here are some of my recent projects. Each one was built to solve a specific problem or explore new
            technologies.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => {
                setSelectedProject(project)
                setGalleryIndex(0)
              }}
              style={{ y: getYOffset(index) }}
            />
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          galleryIndex={galleryIndex}
          setGalleryIndex={setGalleryIndex}
        />
      )}
    </section>
  )
}

function ProjectCard({
  project,
  index,
  onClick,
  style,
}: {
  project: (typeof projects)[0]
  index: number
  onClick: () => void
  style?: any
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={style}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative h-60 overflow-hidden group">
        <motion.div
          animate={{
            scale: isHovered ? 1.1 : 1,
            filter: isHovered ? "brightness(0.8)" : "brightness(1)",
          }}
          transition={{ duration: 0.5 }}
          className="h-full w-full"
        >
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          className="absolute inset-0 bg-emerald-600/20 dark:bg-emerald-900/40 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            onClick={onClick}
            className="bg-white dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 p-2 rounded-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: isHovered ? 1 : 0.8, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Maximize2 className="h-6 w-6" />
          </motion.button>
        </motion.div>

        {/* Tag that appears on hover */}
        <motion.div
          className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: isHovered ? 0 : -50, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          Featured
        </motion.div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <motion.span
              key={tag}
              className="bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 px-3 py-1 rounded-full text-sm"
              whileHover={{ scale: 1.1, backgroundColor: "rgb(16, 185, 129, 0.2)" }}
            >
              {tag}
            </motion.span>
          ))}
        </div>

        <div className="flex gap-4">
          <motion.a
            href={project.demoUrl}
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white px-4 py-2 rounded-md transition-colors duration-300 relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View Demo</span>
            <ExternalLink className="h-4 w-4 relative z-10" />

            {/* Button hover effect */}
            <motion.span
              className="absolute inset-0 bg-emerald-700 dark:bg-emerald-600"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
          <motion.a
            href={project.githubUrl}
            className="flex items-center gap-2 border border-emerald-600 dark:border-emerald-500 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 px-4 py-2 rounded-md transition-colors duration-300 relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Source Code</span>
            <Github className="h-4 w-4 relative z-10" />

            {/* Button hover effect */}
            <motion.span
              className="absolute inset-0 bg-emerald-50 dark:bg-emerald-950/50"
              initial={{ y: "100%" }}
              whileHover={{ y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

function ProjectModal({
  project,
  onClose,
  galleryIndex,
  setGalleryIndex,
}: {
  project: (typeof projects)[0]
  onClose: () => void
  galleryIndex: number
  setGalleryIndex: (index: number) => void
}) {
  const nextImage = () => {
    setGalleryIndex((galleryIndex + 1) % project.gallery.length)
  }

  const prevImage = () => {
    setGalleryIndex((galleryIndex - 1 + project.gallery.length) % project.gallery.length)
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto shadow-2xl"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-80">
          {/* Gallery navigation */}
          <div className="absolute inset-0 flex items-center justify-between px-4 z-20">
            <motion.button
              onClick={(e) => {
                e.stopPropagation()
                prevImage()
              }}
              className="bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-white p-2 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="h-6 w-6" />
            </motion.button>

            <motion.button
              onClick={(e) => {
                e.stopPropagation()
                nextImage()
              }}
              className="bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-white p-2 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="h-6 w-6" />
            </motion.button>
          </div>

          {/* Gallery images */}
          <div className="relative h-full w-full overflow-hidden">
            {project.gallery.map((image, index) => (
              <motion.div
                key={index}
                className="absolute inset-0"
                initial={{ opacity: 0, x: index > galleryIndex ? 100 : -100 }}
                animate={{
                  opacity: index === galleryIndex ? 1 : 0,
                  x: index === galleryIndex ? 0 : index > galleryIndex ? 100 : -100,
                }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} - Image ${index + 1}`}
                  width={800}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>

          {/* Gallery indicators */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
            {project.gallery.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation()
                  setGalleryIndex(index)
                }}
                className={`w-2 h-2 rounded-full ${index === galleryIndex ? "bg-white" : "bg-white/50"}`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>

          <motion.button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-2 rounded-full z-20"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="h-6 w-6" />
          </motion.button>
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">{project.longDescription}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <motion.span
                key={tag}
                className="bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 px-3 py-1 rounded-full text-sm"
                whileHover={{ scale: 1.1, backgroundColor: "rgb(16, 185, 129, 0.2)" }}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          <div className="flex gap-4">
            <motion.a
              href={project.demoUrl}
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white px-4 py-2 rounded-md transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="h-4 w-4" />
              View Demo
            </motion.a>
            <motion.a
              href={project.githubUrl}
              className="flex items-center gap-2 border border-emerald-600 dark:border-emerald-500 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 px-4 py-2 rounded-md transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="h-4 w-4" />
              Source Code
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

