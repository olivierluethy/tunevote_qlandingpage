import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import { getAllPosts } from "@/lib/blog"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Blog - TuneVote",
  description:
    "Tips, guides, and insights for better collaborative music experiences. Learn how to host the perfect music session.",
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <h1 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">Blog</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Tips, guides, and insights for better collaborative music experiences
          </p>

          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block glass-card p-8 hover:border-purple-500/30 transition-all group"
                >
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                    <span>By {post.author}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-foreground group-hover:text-purple-300 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
