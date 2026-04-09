import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Clock, User } from "lucide-react"
import { getAllSlugs, getPostBySlug } from "@/lib/blog"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: "Post Not Found - TuneVote Blog",
    }
  }

  return {
    title: `${post.title} - TuneVote Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      <article className="pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <header className="mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground text-balance">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </span>
            </div>
          </header>

          <div className="prose prose-invert prose-lg max-w-none prose-headings:gradient-text prose-headings:font-bold prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-foreground prose-a:text-purple-400 prose-a:no-underline hover:prose-a:text-purple-300 prose-li:text-muted-foreground prose-blockquote:border-purple-500 prose-blockquote:text-muted-foreground">
            {post.content.split("\n").map((line, index) => {
              const trimmed = line.trim()

              if (trimmed.startsWith("## ")) {
                return (
                  <h2 key={index} className="text-2xl sm:text-3xl mt-12 mb-6">
                    {trimmed.replace("## ", "")}
                  </h2>
                )
              }

              if (trimmed.startsWith("### ")) {
                return (
                  <h3 key={index} className="text-xl sm:text-2xl mt-8 mb-4">
                    {trimmed.replace("### ", "")}
                  </h3>
                )
              }

              if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
                return (
                  <p key={index} className="font-semibold text-foreground my-4">
                    {trimmed.replace(/\*\*/g, "")}
                  </p>
                )
              }

              if (trimmed.startsWith("- ")) {
                return (
                  <li key={index} className="ml-4">
                    {trimmed.replace("- ", "")}
                  </li>
                )
              }

              if (/^\d+\.\s/.test(trimmed)) {
                return (
                  <li key={index} className="ml-4 list-decimal">
                    {trimmed.replace(/^\d+\.\s/, "")}
                  </li>
                )
              }

              if (trimmed === "") {
                return null
              }

              return (
                <p key={index} className="my-4">
                  {trimmed}
                </p>
              )
            })}
          </div>

          {/* CTA */}
          <div className="mt-16 glass-card p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Ready to try TuneVote?
            </h3>
            <p className="text-muted-foreground mb-6">
              Start your first collaborative music session in seconds.
            </p>
            <Link
              href="https://app.tunevote.com/dashboard"
              className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-purple-500/40 transition-all"
            >
              Start a Session
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
