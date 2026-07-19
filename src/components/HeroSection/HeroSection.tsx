interface HeroSectionProps {
  headline: string
  ctaText: string
  onCtaClick: () => void
}

function HeroSection({ headline, ctaText, onCtaClick }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-primary-navy text-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          {headline}
        </h1>
        
        {/* Profile Picture */}
        <div className="mb-8">
          <img
            src="/images/hero.bg.jpg"
            alt="Prof. Bartholomew Armah PhD"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto object-cover border-4 border-accent-gold shadow-lg"
          />
        </div>

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
