declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

export const trackPageView = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", process.env.NEXT_PUBLIC_GA_ID!, {
      page_path: url,
    })
  }
}

export const trackScrollDepth = (depth: number) => {
  trackEvent(`scroll_${depth}`, "Engagement", `${depth}% scroll depth`)
}

export const trackClick = (elementName: string, location: string) => {
  trackEvent(`click_${elementName}`, "CTA", location)
}
