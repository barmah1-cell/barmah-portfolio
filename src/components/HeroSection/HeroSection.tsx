interface HeroSectionProps {
  headline: string
  ctaText: string
  onCtaClick: () => void
}

function HeroSection({ headline, ctaText, onCtaClick }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-primary-navy text-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
          {headline}
        </h1>
        <button
          onClick={onCtaClick}
          className="bg-accent-gold hover:bg-accent-teal text-white font-semibold px-8 py-3 rounded-md transition-colors duration-300 text-lg"
        >
          {ctaText}
        </button>
      </div>
    </section>
  )
}

export default HeroSection
