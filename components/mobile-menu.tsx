"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"

type NavItem = {
  name: string
  href: string
}

export default function MobileMenu({
  items,
  activeSection,
}: {
  items: NavItem[]
  activeSection: string
}) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const closeMenu = () => setIsOpen(false)

  return (
    <div className="md:hidden">
      <button onClick={toggleMenu} className="text-gray-800 dark:text-gray-200" aria-label="Toggle menu">
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 left-0 bg-white dark:bg-gray-900 shadow-lg mt-2 py-4 px-6"
          >
            <nav className="flex flex-col space-y-4">
              {items.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className={cn(
                    "text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors py-2",
                    activeSection === item.href.substring(1) && "text-emerald-600 dark:text-emerald-400 font-medium",
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

