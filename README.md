<div align="center">
  <img src="assets/logo.png" alt="TuneVote" width="150" height="150" />
  <h1>TuneVote — Landing Page</h1>
  <p>
    <b>The marketing site for collaborative music voting.</b><br/>
    Create a session and let everyone vote on which song plays next — this is the Next.js landing site that presents the product.
  </p>
  <p>
    <a href="https://v0-tune-vote-landing-page.vercel.app"><img alt="Live demo" src="https://img.shields.io/badge/Live-demo-000000?logo=vercel&logoColor=white"></a>
    <a href="LICENSE"><img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-blue.svg"></a>
    <img alt="Next.js 16" src="https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white">
    <img alt="React" src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black">
    <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white">
    <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwindcss&logoColor=white">
  </p>
  <p><i>Part of the <a href="https://github.com/olivierluethy?tab=repositories&q=tunevote">TuneVote</a> project — see the <a href="https://github.com/olivierluethy/tunevote_frontend">web client</a> and <a href="https://github.com/olivierluethy/tunevote_api">API</a>.</i></p>
</div>

---

Marketing landing site for **TuneVote**, a collaborative music-voting app for
parties and groups: create a session and let everyone vote on which song plays next.

## Features

- Responsive landing page presenting the TuneVote product.
- Contact page (powered by EasyContact) and a blog with dynamic per-post routes
  (`app/blog/[slug]`).
- Reusable UI built on Radix primitives and shadcn/ui-style components.
- SEO essentials: `sitemap.ts`, `robots.ts` and Open Graph metadata.

## Tech

- Next.js 16 (App Router) with React and TypeScript.
- Tailwind CSS with Radix UI primitives and Lucide icons.
- react-hook-form + Zod for form handling and validation.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
npm start
```

## License

Released under the [MIT License](LICENSE) © Olivier Lüthy. You're free to use, modify and distribute this software, including commercially, as long as the copyright notice and license are included.

## Author

Built by **Olivier Lüthy** — [GitHub](https://github.com/olivierluethy).
