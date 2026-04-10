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

function renderMarkdown(content: string) {
  const lines = content.trimStart().split("\n")
  const elements: React.ReactNode[] = []
  let inList = false
  let listItems: React.ReactNode[] = []

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`list-${elements.length}`} className="flex flex-col gap-2 pl-6 list-disc">
          {listItems}
        </ul>
      )
      listItems = []
      inList = false
    }
  }

  const formatInline = (text: string) =>
    text
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>')
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="$2" class="text-purple-400 underline hover:text-purple-300 transition-colors" target="_blank" rel="noopener noreferrer">$1</a>'
      )

  lines.forEach((line, i) => {
    const trimmed = line.trim()

    if (trimmed === "---") {
      flushList()
      elements.push(<hr key={`hr-${i}`} className="my-8 border-muted-foreground" />)
    } else if (trimmed.startsWith("## ")) {
      flushList()
      elements.push(
        <h2 key={`h2-${i}`} className="text-2xl sm:text-3xl mt-12 mb-6 font-bold">
          {trimmed.replace("## ", "")}
        </h2>
      )
    } else if (trimmed.startsWith("### ")) {
      flushList()
      elements.push(
        <h3 key={`h3-${i}`} className="text-xl sm:text-2xl mt-8 mb-4 font-semibold">
          {trimmed.replace("### ", "")}
        </h3>
      )
    } else if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      inList = true
      const itemContent = trimmed.replace(/^[-*] /, "")
      listItems.push(
        <li key={`li-${i}`}>
          <span dangerouslySetInnerHTML={{ __html: formatInline(itemContent) }} />
        </li>
      )
    } else if (trimmed === "") {
      flushList()
    } else {
      flushList()
      elements.push(
        <p key={`p-${i}`} className="my-4 text-muted-foreground leading-relaxed">
          <span dangerouslySetInnerHTML={{ __html: formatInline(trimmed) }} />
        </p>
      )
    }
  })

  flushList()
  return elements
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
  {renderMarkdown(post.content)}
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
