"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { ArrowDown, MousePointer, Sparkles } from "lucide-react"
import { useRef, useState } from "react"
import personal from "../public/personal.jpg"
import Header from "./header"

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
    <>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-16 px-6 relative overflow-hidden"
        ref={containerRef}
      >
        {/* Enhanced gradient background with more depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-emerald-50/50 to-white dark:from-emerald-950/30 dark:via-emerald-950/10 dark:to-gray-900 -z-10" />

        {/* Improved animated background shapes with better positioning */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-emerald-200/30 dark:bg-emerald-900/20 blur-3xl"
            animate={{
              x: [0, 40, 0],
              y: [0, -40, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 12,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-emerald-300/20 dark:bg-emerald-800/20 blur-3xl"
            animate={{
              x: [0, -50, 0],
              y: [0, 50, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 15,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-teal-200/20 dark:bg-teal-900/20 blur-3xl"
            animate={{
              x: [0, 30, 0],
              y: [0, 30, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 10,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>

        {/* Enhanced floating particles with more variety */}
        <Particles />

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16 z-10">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ y, opacity }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/80 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 font-medium mb-6"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="w-4 h-4 rounded-full bg-emerald-500 dark:bg-emerald-400"
              />
              <span>Hello, I'm</span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Bibek{" "}
              <span className="text-emerald-600 dark:text-emerald-400 relative inline-block">
                Pandey
                <motion.span
                  className="absolute -right-8 -top-8"
                  animate={{
                    rotate: [0, 15, 0, -15, 0],
                    scale: [1, 1.2, 1, 1.2, 1],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 5,
                    ease: "easeInOut",
                  }}
                >
                  <Sparkles className="h-6 w-6 text-yellow-400" />
                </motion.span>
              </span>
            </motion.h1>

            <motion.div
              className="flex flex-wrap gap-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {["Creative Developer", "Problem Solver", "Visionary"].map((title, index) => (
                <motion.span
                  key={title}
                  className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "var(--tw-colors-emerald-100)",
                    color: "var(--tw-colors-emerald-700)",
                  }}
                >
                  {title}
                </motion.span>
              ))}
            </motion.div>

            <motion.p
              className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg text-lg leading-relaxed pl-0 md:pl-0 mr-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Let's turn your vision into reality—starting small, making it good, and aiming for the best!
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
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

                {/* Enhanced button hover effect with smoother animation */}
                <motion.span
                  className="absolute inset-0 bg-emerald-700 dark:bg-emerald-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </motion.a>

              <motion.a
                href="#contact"
                className="border-2 border-emerald-600 dark:border-emerald-500 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 px-6 py-3 rounded-md transition-colors duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get in Touch</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
                >
                  <MousePointer className="h-4 w-4" />
                </motion.div>
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
              {/* Enhanced glow effect */}
              <motion.div
                className="absolute -inset-4 rounded-full bg-emerald-400/20 dark:bg-emerald-400/10 blur-xl"
                animate={{
                  scale: isHovered ? 1.2 : 1,
                  opacity: isHovered ? 0.8 : 0.5,
                }}
                transition={{ duration: 0.5 }}
              />

              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-emerald-400 dark:border-emerald-500"
                animate={{
                  scale: isHovered ? [1, 1.05, 1] : 1,
                  rotate: isHovered ? [0, 5, 0, -5, 0] : 0,
                  borderColor: isHovered
                    ? ["rgb(52, 211, 153)", "rgb(16, 185, 129)", "rgb(52, 211, 153)"]
                    : "rgb(52, 211, 153)",
                }}
                transition={{
                  duration: isHovered ? 2 : 0.5,
                  repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
                  ease: "easeInOut",
                }}
              />

              {/* Profile image with enhanced border and shadow */}
              <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-emerald-600 dark:border-emerald-400 shadow-lg shadow-emerald-600/20 dark:shadow-emerald-400/20">
                <Image
                  src={personal || "/placeholder.svg"}
                  alt="Profile"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                  priority
                />

                {/* Interactive overlay on hover with improved animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-emerald-600/40 to-transparent flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg"
                    initial={{ scale: 0, y: 20 }}
                    animate={{ scale: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <MousePointer className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 1.2,
          }}
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full"
            whileHover={{ y: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-sm mb-1 font-medium">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
            >
              <ArrowDown className="h-5 w-5" />
            </motion.div>
          </motion.a>
        </motion.div>
      </section>
      <Header />
    </>
  )
}

function Particles() {
  // Create an array of particle configurations with different sizes and animations
  const particles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: 5 + Math.random() * 15,
    delay: Math.random() * 5,
    moveX: Math.random() * 100 - 50,
    moveY: Math.random() * 100 - 50,
    opacity: Math.random() * 0.5 + 0.3,
  }))

  return (
    <div className="absolute inset-0 -z-10">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            top: `${particle.y}%`,
            left: `${particle.x}%`,
            backgroundColor:
              particle.id % 3 === 0
                ? "rgba(52, 211, 153, 0.3)"
                : particle.id % 3 === 1
                  ? "rgba(20, 184, 166, 0.3)"
                  : "rgba(16, 185, 129, 0.3)",
          }}
          animate={{
            y: [0, particle.moveY],
            x: [0, particle.moveX],
            scale: [0, 1, 0],
            opacity: [0, particle.opacity, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
