"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Music } from "lucide-react"
import { trackClick } from "@/lib/analytics"
import { JoinSessionModal } from "./join-session-modal"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [showJoinModal, setShowJoinModal] = useState(false)

  const handleStartSession = () => {
    trackClick("start_session", "Navigation Bar")
  }

  const handleJoinSession = () => {
    trackClick("join_session", "Navigation Bar")
    setShowJoinModal(true)
  }

  return (
    <>
      <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              href="/"
              className="flex items-center gap-2 group transition-transform duration-300"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center transition-all group-hover:scale-110 group-hover:rotate-3">
                <Music className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <span className="text-xl sm:text-2xl font-bold gradient-text group-hover:brightness-125 transition-all">
                TuneVote
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-4">
              <Link
                href="https://app.tunevote.com/dashboard"
                onClick={handleStartSession}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 font-semibold text-white hover:shadow-lg hover:shadow-purple-500/40 transition-all"
              >
                Start Session
              </Link>
              <button
                onClick={handleJoinSession}
                className="px-4 py-2 rounded-lg border border-purple-400 text-purple-300 hover:bg-purple-400/20 font-semibold transition-all"
              >
                Join Session
              </button>
            </div>

            <button
              className="md:hidden text-foreground focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border"
            >
              <div className="px-4 py-4 flex flex-col gap-3">
                <Link
                  href="https://app.tunevote.com/dashboard"
                  onClick={() => {
                    handleStartSession()
                    setIsOpen(false)
                  }}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 font-semibold text-white text-center"
                >
                  Start Session
                </Link>
                <button
                  onClick={() => {
                    handleJoinSession()
                    setIsOpen(false)
                  }}
                  className="px-4 py-2 rounded-lg border border-purple-400 text-purple-300 hover:bg-purple-400/20 font-semibold"
                >
                  Join Session
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <JoinSessionModal
        isOpen={showJoinModal}
        onClose={() => setShowJoinModal(false)}
      />
    </>
  )
}
