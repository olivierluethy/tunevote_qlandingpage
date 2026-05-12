"use client"

import Link from "next/link"
import { Music, Github, MessageCircle, Twitter } from "lucide-react"
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden">
  <Image 
    src="/og-image.png"
    alt="Beschreibung"
    width={40}
    height={40}
    className="object-cover w-full h-full"
  />
</div>

            <span className="text-xl font-bold gradient-text">TuneVote</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            <Link
              href="/blog"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Blog
            </Link>
            <Link
              href="https://app.tunevote.com/dashboard"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Start Session
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
            <Link
              href="https://discord.gg/tunevote"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Discord
            </Link>
            <Link
              href="https://github.com/tunevote"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="https://twitter.com/tunevote"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </Link>
            <Link
              href="https://github.com/tunevote"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://discord.gg/tunevote"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Discord"
            >
              <MessageCircle className="w-5 h-5" />
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} TuneVote. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
