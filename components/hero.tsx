"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { ArrowDown, Download, MousePointer, Sparkles } from "lucide-react"
import { useRef, useState } from "react"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const [isHovered, setIsHovered] = useState(false)

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-6 relative overflow-hidden"
      ref={containerRef}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 to-white dark:from-emerald-950/20 dark:to-gray-900 -z-10" />

      {/* Animated background shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-emerald-200/30 dark:bg-emerald-900/20 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 8,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-emerald-300/20 dark:bg-emerald-800/20 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 10,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating particles */}
      <Particles />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 z-10">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ y, opacity }}
        >
          <motion.span
            className="inline-block text-emerald-600 dark:text-emerald-400 font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hello, I'm
          </motion.span>
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Bibek{" "}
            <span className="text-emerald-600 dark:text-emerald-400 relative">
             Pandey
              <motion.span
                className="absolute -right-6 -top-6"
                animate={{
                  rotate: [0, 10, 0, -10, 0],
                  scale: [1, 1.2, 1, 1.2, 1],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 5,
                  ease: "easeInOut",
                }}
              >
                <Sparkles className="h-5 w-5 text-yellow-400" />
              </motion.span>
            </span>
          </motion.h1>
          <motion.h2
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Creative Developer | Problem Solver | Visionary
          </motion.h2>
          <motion.p
            className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Let’s turn your vision into reality—starting small, making it good, and aiming for the best!".
          </motion.p>
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.a
              href="#projects"
              className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white px-6 py-3 rounded-md transition-colors duration-300 flex items-center gap-2 group relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">View My Work</span>
              <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform relative z-10" />

              {/* Button hover effect */}
              <motion.span
                className="absolute inset-0 bg-emerald-700 dark:bg-emerald-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            <motion.a
              href="/resume.pdf"
              className="border border-emerald-600 dark:border-emerald-500 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 px-6 py-3 rounded-md transition-colors duration-300 flex items-center gap-2 group relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              download
            >
              <span className="relative z-10">Download Resume</span>
              <Download className="h-4 w-4 group-hover:translate-y-1 transition-transform relative z-10" />

              {/* Button hover effect */}
              <motion.span
                className="absolute inset-0 bg-emerald-50 dark:bg-emerald-950/50"
                initial={{ y: "100%" }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]), opacity }}
        >
          <motion.div
            className="relative w-64 h-64 md:w-80 md:h-80 cursor-pointer"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-emerald-400/20 dark:bg-emerald-400/10 blur-md"
              animate={{
                scale: isHovered ? 1.1 : 1,
                opacity: isHovered ? 0.8 : 0.5,
              }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-emerald-400 dark:border-emerald-500"
              animate={{
                scale: isHovered ? [1, 1.05, 1] : 1,
                rotate: isHovered ? [0, 5, 0, -5, 0] : 0,
              }}
              transition={{
                duration: isHovered ? 2 : 0.5,
                repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
                ease: "easeInOut",
              }}
            />
            <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-emerald-600 dark:border-emerald-400 shadow-lg shadow-emerald-600/20 dark:shadow-emerald-400/20">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Profile"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />

              {/* Interactive overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-emerald-600/20 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="bg-white dark:bg-gray-800 rounded-full p-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <MousePointer className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 1.2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          repeatDelay: 0.5,
        }}
      >
        <a
          href="#about"
          className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  )
}

function Particles() {
  return (
    <div className="absolute inset-0 -z-10">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-emerald-400/30 dark:bg-emerald-400/20"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 100 - 50],
            x: [0, Math.random() * 100 - 50],
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  )
}

