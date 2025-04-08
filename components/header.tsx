"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Frame } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import DarkModeToggle from "./dark-mode-toggle"
import MobileMenu from "./mobile-menu"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Timeline", href: "#timeline" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Involvement", href: "#involvement" },
  { name: "Contact", href: "#contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      // Determine active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1))

      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 sm:px-6",
        isScrolled ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md py-3" : "bg-transparent",
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Frame className="h-6 w-6 text-emerald-600 dark:text-emerald-400 group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-bold text-lg text-gray-800 dark:text-white">Your Name</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink key={item.name} href={item.href} isActive={activeSection === item.href.substring(1)}>
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <DarkModeToggle />
          <MobileMenu items={navItems} activeSection={activeSection} />
        </div>
      </div>
    </motion.header>
  )
}

function NavLink({
  href,
  children,
  isActive,
}: {
  href: string
  children: React.ReactNode
  isActive: boolean
}) {
  return (
    <Link
      href={href}
      className={cn(
        "text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors relative group py-1",
        isActive && "text-emerald-600 dark:text-emerald-400 font-medium",
      )}
    >
      {children}
      <span
        className={cn(
          "absolute bottom-0 left-0 h-0.5 bg-emerald-500 dark:bg-emerald-400 transition-all duration-300",
          isActive ? "w-full" : "w-0 group-hover:w-full",
        )}
      ></span>
    </Link>
  )
}

