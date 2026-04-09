"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Play, Users, Github, MessageCircle, Coffee } from "lucide-react"
import { trackClick } from "@/lib/analytics"
import { JoinSessionModal } from "./join-session-modal"

export function HeroSection() {
  const [showJoinModal, setShowJoinModal] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 pb-20 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-background to-pink-900/20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6 gradient-text text-balance"
          >
            TuneVote
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-foreground/90 text-balance"
          >
            Take control of the music — let everyone vote for the next song.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl mb-10 text-muted-foreground max-w-3xl mx-auto text-pretty"
          >
            The collaborative music app for parties, road trips, workouts, and any moment where
            everyone deserves a voice in the playlist.
          </motion.p>

          {/* Primary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <Link
              href="https://app.tunevote.com/dashboard"
              onClick={() => trackClick("start_session", "Hero Section")}
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg text-white flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-purple-500/50 transition-all"
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Start a Session</span>
            </Link>
            <button
              onClick={() => {
                trackClick("join_session", "Hero Section")
                setShowJoinModal(true)
              }}
              className="group px-8 py-4 bg-white/10 backdrop-blur rounded-full font-semibold text-lg text-foreground flex items-center justify-center gap-2 border border-white/20 hover:bg-white/20 transition-all"
            >
              <Users className="w-5 h-5" />
              <span>Join a Session</span>
            </button>
          </motion.div>

          {/* Secondary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link
              href="https://discord.gg/tunevote"
              onClick={() => trackClick("discord", "Hero Section")}
              className="px-6 py-2 rounded-full font-medium text-sm text-muted-foreground flex items-center gap-2 border border-border hover:border-purple-400 hover:text-purple-300 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              Join Discord
            </Link>
            <Link
              href="https://github.com/tunevote"
              onClick={() => trackClick("github", "Hero Section")}
              className="px-6 py-2 rounded-full font-medium text-sm text-muted-foreground flex items-center gap-2 border border-border hover:border-purple-400 hover:text-purple-300 transition-all"
            >
              <Github className="w-4 h-4" />
              View on GitHub
            </Link>
            <Link
              href="https://buymeacoffee.com/tunevote"
              onClick={() => trackClick("donate", "Hero Section")}
              className="px-6 py-2 rounded-full font-medium text-sm text-muted-foreground flex items-center gap-2 border border-border hover:border-pink-400 hover:text-pink-300 transition-all"
            >
              <Coffee className="w-4 h-4" />
              Buy Me a Coffee
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Animated Visualizer */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden opacity-40">
        <div className="flex gap-1 h-full items-end justify-center">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="visualizer-bar animate-visualizer w-2 bg-gradient-to-t from-purple-500 to-pink-500 rounded-full"
              style={{
                animationDelay: `${i * 0.05}s`,
                animationDuration: `${0.8 + Math.random() * 0.4}s`,
              }}
            />
          ))}
        </div>
      </div>

      <JoinSessionModal
        isOpen={showJoinModal}
        onClose={() => setShowJoinModal(false)}
      />
    </section>
  )
}
