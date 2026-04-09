"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Play, Users, Github, MessageCircle, Coffee } from "lucide-react"
import { trackClick } from "@/lib/analytics"
import { JoinSessionModal } from "./join-session-modal"

export function CTASection() {
  const [showJoinModal, setShowJoinModal] = useState(false)

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-pink-900/20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 gradient-text text-balance">
            Ready to transform your music experience?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
            Join thousands of music lovers who have already discovered the power of collaborative
            playlists.
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="https://app.tunevote.com/dashboard"
              onClick={() => trackClick("start_session", "CTA Section")}
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg text-white flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-purple-500/50 transition-all"
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Start a Session</span>
            </Link>
            <button
              onClick={() => {
                trackClick("join_session", "CTA Section")
                setShowJoinModal(true)
              }}
              className="group px-8 py-4 bg-white/10 backdrop-blur rounded-full font-semibold text-lg text-foreground flex items-center justify-center gap-2 border border-white/20 hover:bg-white/20 transition-all"
            >
              <Users className="w-5 h-5" />
              <span>Join a Session</span>
            </button>
          </div>

          {/* Secondary CTAs */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="https://discord.gg/tunevote"
              onClick={() => trackClick("discord", "CTA Section")}
              className="px-6 py-2 rounded-full font-medium text-sm text-muted-foreground flex items-center gap-2 border border-border hover:border-purple-400 hover:text-purple-300 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              Join Discord
            </Link>
            <Link
              href="https://github.com/tunevote"
              onClick={() => trackClick("github", "CTA Section")}
              className="px-6 py-2 rounded-full font-medium text-sm text-muted-foreground flex items-center gap-2 border border-border hover:border-purple-400 hover:text-purple-300 transition-all"
            >
              <Github className="w-4 h-4" />
              View on GitHub
            </Link>
            <Link
              href="https://buymeacoffee.com/tunevote"
              onClick={() => trackClick("donate", "CTA Section")}
              className="px-6 py-2 rounded-full font-medium text-sm text-muted-foreground flex items-center gap-2 border border-border hover:border-pink-400 hover:text-pink-300 transition-all"
            >
              <Coffee className="w-4 h-4" />
              Buy Me a Coffee
            </Link>
          </div>
        </motion.div>
      </div>

      <JoinSessionModal
        isOpen={showJoinModal}
        onClose={() => setShowJoinModal(false)}
      />
    </section>
  )
}
