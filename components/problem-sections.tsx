"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { MessageSquareOff, Shuffle, Vote, Repeat } from "lucide-react"
import { trackScrollDepth } from "@/lib/analytics"

const problems = [
  {
    icon: MessageSquareOff,
    title: "Never argue over the next song again",
    description:
      "We've all been there — someone hogs the aux, plays three songs in a row, or picks tracks nobody asked for. TuneVote puts an end to music drama by giving everyone an equal voice.",
    gradient: "from-purple-500 to-purple-700",
  },
  {
    icon: Shuffle,
    title: "Keep your sessions flowing smoothly",
    description:
      "No more awkward silences or scrambling to find the next track. With real-time voting, the playlist builds itself as your group decides what plays next. The vibe never stops.",
    gradient: "from-pink-500 to-pink-700",
  },
  {
    icon: Vote,
    title: "Democratic playlists for any event",
    description:
      "Whether it's a house party, road trip, workout session, or late-night cooking marathon — let the group decide. Every vote counts, and the best songs rise to the top.",
    gradient: "from-cyan-500 to-cyan-700",
  },
  {
    icon: Repeat,
    title: "Control loops, breaks, and mood-based playback",
    description:
      "Need to loop that banger? Want a quick break? Adjust the flow as you go with intuitive playback controls. Keep the energy where you want it, when you want it.",
    gradient: "from-purple-500 to-pink-500",
  },
]

export function ProblemSections() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackedDepths = useRef<Set<number>>(new Set())

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const sectionHeight = rect.height
      const scrolledIntoSection = Math.max(0, windowHeight - rect.top)
      const scrollPercentage = Math.min(100, (scrolledIntoSection / sectionHeight) * 100)

      const depths = [25, 50, 75, 100]
      depths.forEach((depth) => {
        if (scrollPercentage >= depth && !trackedDepths.current.has(depth)) {
          trackedDepths.current.add(depth)
          trackScrollDepth(depth)
        }
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 gradient-text text-balance">
            Music should bring people together, not tear them apart
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            TuneVote solves the age-old problem of who controls the music by making it a
            collaborative experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 hover:border-purple-500/30 transition-all group"
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${problem.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <problem.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-foreground">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
