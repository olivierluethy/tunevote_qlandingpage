"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { trackClick } from "@/lib/analytics"

const featuredIn = [
  { name: "Product Hunt", url: "https://producthunt.com/posts/tunevote" },
  { name: "Hacker News", url: "https://news.ycombinator.com" },
  { name: "TechCrunch", url: "https://techcrunch.com" },
  { name: "The Verge", url: "https://theverge.com" },
]

export function SocialProof() {
  return (
    <section className="py-16 px-4 border-y border-border bg-card/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-8">
            Featured In
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {featuredIn.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={item.url}
                  onClick={() => trackClick(`featured_${item.name.toLowerCase().replace(" ", "_")}`, "Social Proof")}
                  className="text-xl md:text-2xl font-semibold text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
