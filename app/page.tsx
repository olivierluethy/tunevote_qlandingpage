import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { SocialProof } from "@/components/social-proof"
import { ProblemSections } from "@/components/problem-sections"
import { SolutionSection } from "@/components/solution-section"
import { BlogPreview } from "@/components/blog-preview"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <SocialProof />
      <ProblemSections />
      <SolutionSection />
      <BlogPreview />
      <CTASection />
      <Footer />
    </main>
  )
}
