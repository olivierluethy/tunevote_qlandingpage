"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { ContactForm } from "@easycontact/react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <h1 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground mb-12">
            Have a question, feedback, or need something from us? Send us a
            message and we'll get back to you as soon as possible.
          </p>

          <div className="glass-card p-6 sm:p-8">
            <ContactForm projectId="2070234b589a0ec901f78870" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
