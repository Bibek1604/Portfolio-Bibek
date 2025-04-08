"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar } from "lucide-react"

const involvements = [
  {
    id: 1,
    title: "IT Club Secretary",
    organization: "Softwarica College",
    period: "2025Feb - 2025 August",
    description:
      "Organized tech events, workshops, and hackathons. Managed club communications and coordinated with other student organizations.",
    image: "/placeholder.svg?height=100&width=100",
    type: "Club",
  },
  {
    id: 2,
    title: "Member",
    organization: "CodeForChange",
    period: "2025 jan - 2026 jan",
    description:
      "Participated in community, coding workshops, and tech talks. ",
    image: "/placeholder.svg?height=100&width=100",
    type: "Club",
  },

  {
    id: 3,
    title: "Apex Ideathon",
    organization: "Apex",
    period: "October 2025",
    description:
      "Best implementation award at Apex Hackathon. ",
    image: "/placeholder.svg?height=100&width=100",
    type: "Hackathon",
  },
  {
    id: 3,
    title: "Data Fellowship Program",
    organization: "DataCamp",
    period: "2025",
    description:
      "Selected for an exclusive data science fellowship program. Worked on real-world data projects and collaborated with industry experts.",
    image: "/placeholder.svg?height=100&width=100",
    type: "Fellowship",
  },
]

export default function Involvement() {
  return (
    <section id="involvement" className="py-20 px-6 relative overflow-hidden">
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
            Community & Activities
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Involvement & Community
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
            Beyond my professional work, I'm actively involved in the tech community through various roles and
            contributions.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {involvements.map((involvement, index) => (
            <InvolvementCard key={involvement.id} involvement={involvement} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function InvolvementCard({
  involvement,
  index,
}: {
  involvement: (typeof involvements)[0]
  index: number
}) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-gray-800/20 border border-gray-100 dark:border-gray-700 flex flex-col h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{
        y: -5,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
        borderColor: "rgb(16, 185, 129)",
      }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-500 dark:border-emerald-400 p-0.5">
            <Image
              src={involvement.image || "/placeholder.svg"}
              alt={involvement.title}
              width={100}
              height={100}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 px-2 py-0.5 rounded-full text-xs">
              {involvement.type}
            </span>
          </div>
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">{involvement.title}</h3>
          <p className="text-emerald-600 dark:text-emerald-400 text-sm">{involvement.organization}</p>
        </div>
      </div>

      <p className="text-gray-600 dark:text-gray-300 text-sm flex-grow">{involvement.description}</p>

      <div className="mt-4 flex items-center text-gray-500 dark:text-gray-400 text-sm">
        <Calendar className="h-4 w-4 mr-1" />
        <span>{involvement.period}</span>
      </div>
    </motion.div>
  )
}

