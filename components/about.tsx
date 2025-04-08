"use client"

import type React from "react"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { MapPin, Mail, Briefcase, GraduationCap, Calendar, ChevronDown, ChevronUp } from "lucide-react"
import { useRef, useState } from "react"

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100])
  const contentY = useTransform(scrollYProgress, [0, 1], [50, -50])

  const [expandedBio, setExpandedBio] = useState(false)

  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden" ref={containerRef}>
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
            Get to know me
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About Me
          </motion.h2>
          <motion.div
            className="h-1 w-20 bg-emerald-500 dark:bg-emerald-400 mx-auto rounded-full"
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ y: imageY }}
          >
            <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-105 hover:rotate-2">
              <div className="absolute inset-0 bg-emerald-500/20 dark:bg-emerald-500/10 z-10" />
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="About Me"
                width={500}
                height={600}
                className="w-full h-full object-cover"
              />

              {/* Interactive overlay */}
              <motion.div
                className="absolute inset-0 bg-emerald-600/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 z-20"
                whileHover={{ opacity: 1 }}
              >
                <motion.div
                  className="bg-white dark:bg-gray-800 px-4 py-2 rounded-md text-emerald-600 dark:text-emerald-400 font-medium"
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  That's me!
                </motion.div>
              </motion.div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-emerald-100 dark:bg-emerald-900/50 rounded-lg -z-10" />
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-emerald-200 dark:bg-emerald-800/50 rounded-lg -z-10" />
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ y: contentY }}
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              I'm <span className="text-emerald-600 dark:text-emerald-400">Bibek Pandey</span>, a passionate developer and
              problem solver
            </h3>

            <div className="relative">
              <p className="text-gray-600 dark:text-gray-300">
                I'm a creative developer with a passion for building beautiful, functional, and user-friendly websites
                and applications. With a strong foundation in both design and development, I bring a unique perspective
                to every project.
              </p>

              <motion.div
                className={`overflow-hidden transition-all duration-500 ${expandedBio ? "max-h-96" : "max-h-0"}`}
              >
                <p className="text-gray-600 dark:text-gray-300 mt-4">
                  My journey in tech began with a curiosity about how things work, which led me to pursue a degree in
                  Computer Science. Since then, I've worked on a variety of projects, from small business websites to
                  complex web applications.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mt-4">
                  I believe in continuous learning and staying up-to-date with the latest technologies and best
                  practices. When I'm not coding, you can find me exploring new hiking trails, experimenting with
                  photography, or contributing to open-source projects.
                </p>
              </motion.div>

              <button
                onClick={() => setExpandedBio(!expandedBio)}
                className="mt-2 text-emerald-600 dark:text-emerald-400 flex items-center gap-1 hover:underline"
              >
                {expandedBio ? (
                  <>
                    Read less <ChevronUp className="h-4 w-4" />
                  </>
                ) : (
                  <>
                    Read more <ChevronDown className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">

              <InfoCard
                icon={<MapPin className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />}
                label="Location"
                value="Nepal Kathmandu" 
              />
              <InfoCard
                icon={<Mail className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />}
                label="Email"
                value="calltobibek@gmail.com"
              />
              <InfoCard
                icon={<Briefcase className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />}
                label="Current Role"
                value="Developer"
              />
              <InfoCard
                icon={<GraduationCap className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />}
                label="Education"
                value="Computer Science"
              />
              <InfoCard
                icon={<Calendar className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />}
                label="Experience"
                value="1.5+ Years"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function InfoCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      className="relative h-24 perspective-1000"
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="absolute inset-0 flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md dark:shadow-gray-800/20 border border-gray-100 dark:border-gray-700 backface-hidden"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        <div className="flex-shrink-0">{icon}</div>
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
          <p className="font-medium text-gray-800 dark:text-white">{value}</p>
        </div>
      </motion.div>

      <motion.div
        className="absolute inset-0 flex items-center justify-center p-4 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 shadow-md border border-emerald-200 dark:border-emerald-800 backface-hidden"
        initial={{ rotateY: -180 }}
        animate={{ rotateY: isFlipped ? 0 : -180 }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        <p className="font-medium text-emerald-800 dark:text-emerald-300 text-center">{value}</p>
      </motion.div>
    </motion.div>
  )
}

