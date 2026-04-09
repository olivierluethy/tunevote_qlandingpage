"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Users } from "lucide-react"
import { trackClick } from "@/lib/analytics"

interface JoinSessionModalProps {
  isOpen: boolean
  onClose: () => void
}

export function JoinSessionModal({ isOpen, onClose }: JoinSessionModalProps) {
  const [sessionCode, setSessionCode] = useState("")

  const handleJoin = () => {
    if (sessionCode.trim()) {
      trackClick("join_session_submit", "Join Modal")
      window.location.href = `https://app.tunevote.com/session/${sessionCode}`
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="glass-card p-6 w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Join a Session</h3>
              </div>
              <button
                onClick={onClose}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-muted-foreground mb-4">
              Enter the session code shared by the host to join the music session.
            </p>

            <input
              type="text"
              value={sessionCode}
              onChange={(e) => setSessionCode(e.target.value.toUpperCase())}
              placeholder="Enter session code"
              className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary mb-4 text-center text-xl font-mono tracking-widest"
              maxLength={8}
            />

            <button
              onClick={handleJoin}
              disabled={!sessionCode.trim()}
              className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 font-semibold text-white hover:shadow-lg hover:shadow-purple-500/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Join Session
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
