# Consultant Portfolio Website

A modern, responsive portfolio website for Bartholomew Armah PhD, built with React, TypeScript, and Tailwind CSS.

## Features

- **Hero Section**: Professional introduction with call-to-action
- **Services**: Showcase of consulting services
- **Research**: Published research papers with PDF downloads
- **Media Gallery**: Photos and videos from events, conferences, and presentations
- **Blog**: Full blog posts with individual pages
- **Contact Form**: Client-side validated contact form
- **Responsive Design**: Mobile-first, works on all devices
- **SEO Optimized**: Meta tags, sitemap, and robots.txt

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Run tests:
   ```bash
   npm test
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/     # React components
│   ├── HeroSection/
│   ├── ServicesSection/
│   ├── ResearchSection/
│   ├── MediaGallery/    # NEW: Photos and videos
│   ├── BlogSection/
│   ├── ContactSection/
│   ├── Navigation/
│   └── Footer/
├── data/          # Content data files
│   ├── services.ts
│   ├── researchItems.ts
│   ├── mediaItems.ts    # NEW: Media gallery content
│   ├── blogPosts.ts
│   └── testimonials.ts
├── types/         # TypeScript type definitions
├── pages/         # Page components
├── test/          # Test setup and utilities
├── App.tsx        # Main application component
├── main.tsx       # Application entry point
└── index.css      # Global styles with Tailwind
```

## Content Management

- **Services**: Edit `src/data/services.ts`
- **Research**: Edit `src/data/researchItems.ts` and add PDFs to `public/research/`
- **Media Gallery**: Edit `src/data/mediaItems.ts` and add images to `public/images/`
- **Blog Posts**: Edit `src/data/blogPosts.ts`

See the guides for detailed instructions:
- `CUSTOMIZATION.md` - General customization guide
- `MEDIA-GUIDE.md` - Managing photos and videos
- `BLOG-CONTENT-GUIDE.md` - Adding blog posts
- `DEPLOYMENT.md` - Deployment instructions
- `VISIBILITY-GUIDE.md` - SEO and marketing strategies

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Vitest + React Testing Library
- fast-check (Property-based testing)
