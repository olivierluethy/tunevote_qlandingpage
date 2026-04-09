"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { trackClick } from "@/lib/analytics"

const featuredIn = [
  { name: "Globale Commerce", url: "https://globalecommerce.org/page-5cf688cac39ecc30fe485fa80b6902cc.html" },
  { name: "Web Businessvocal", url: "https://web.businessvocal.com/10/EtlHnezRIE" },
  { name: "BuySEO Link", url: "https://buybacklinks.agency/lzfo-get-ranking-on-1st-page-with-us/" },
  { name: "Get Website Worth", url: "https://www.getwebsiteworth.com/856e4ce5becb462a1e3f3627681ee131-l/" },
  { name: "YCM Info", url: "https://ycm.info/856e4ce5becb462a1e3f3627681ee131-l/" },
  { name: "Prolinkbox", url: "http://prolinkbox.com/the-best-way-to-improve-your-google-ranking-using-trusted-premium-backlinks-for-faster-seo-growth-4239/" },
  { name: "Egyptian Directory", url: "https://www.egyptiandirectory.com/page-5cf688cac39ecc30fe485fa80b6902cc.html" },
  { name: "Quero Party", url: "https://quero.party/report/104821" },
  { name: "DP Racing", url: "https://dperacing.ch/" },
  { name: "NetTools Guru", url: "https://nettools.guru/856e4ce5becb462a1e3f3627681ee131/" },
  { name: "BooksReadr", url: "https://booksreadr.org/page-5cf688cac39ecc30fe485fa80b6902cc.html" },
  { name: "Seodaro", url: "https://seodaro.com/duplicated-content-issues-seodaro-8738/" },
  { name: "Itxoft", url: "https://itxoft-seo-for-higher-rankings.site/back-when-my-blog-was-struggling-with-low-traffic-at-around-150-visitors-a-month-i-discovered-itxoft-and-their-budget-friendly-seo-services-within-two-months-my-site-saw-an-incredible-jump-to-over-200/" },
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
