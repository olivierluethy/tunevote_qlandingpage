"use client"

import { motion } from "framer-motion"
import { ThumbsUp, Music2, Sparkles, Radio } from "lucide-react"

const features = [
  {
    icon: ThumbsUp,
    title: "Real-time Voting",
    description: "Everyone votes, the crowd decides what plays next",
  },
  {
    icon: Music2,
    title: "Spotify Integration",
    description: "Seamless streaming with your favorite tracks",
  },
  {
    icon: Sparkles,
    title: "Mood-based Suggestions",
    description: "AI-powered recommendations to keep the vibe going",
  },
  {
    icon: Radio,
    title: "Artist Live Sessions",
    description: "Optional live DJ or artist participation",
  },
]

export function SolutionSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background via-card/50 to-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 gradient-text text-balance">
            TuneVote makes it effortless
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Simple, intuitive, and designed to keep the music flowing without the friction.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center mb-4">
                <feature.icon className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Visual Demo Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 glass-card p-8 overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Now Playing */}
            <div className="flex-1 w-full">
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
                Now Playing
              </p>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shrink-0">
                  <Music2 className="w-8 h-8 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-foreground truncate">Blinding Lights</p>
                  <p className="text-sm text-muted-foreground truncate">The Weeknd</p>
                </div>
              </div>
            </div>

            {/* Voting Queue */}
            <div className="flex-1 w-full">
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
                Vote for Next
              </p>
              <div className="space-y-3">
                {[
                  { song: "Levitating", artist: "Dua Lipa", votes: 12 },
                  { song: "Bad Guy", artist: "Billie Eilish", votes: 8 },
                  { song: "Uptown Funk", artist: "Bruno Mars", votes: 5 },
                ].map((track, i) => (
                  <div
                    key={track.song}
                    className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="text-sm font-mono text-muted-foreground w-6">
                        {i + 1}
                      </span>
                      <div className="min-w-0">
                        <p className="font-medium text-foreground truncate text-sm">
                          {track.song}
                        </p>
                        <p className="text-xs text-muted-foreground truncate">{track.artist}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-sm font-semibold text-purple-400">{track.votes}</span>
                      <ThumbsUp className="w-4 h-4 text-purple-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
