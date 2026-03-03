import Navigation from '../components/Navigation/Navigation'
import HeroSection from '../components/HeroSection/HeroSection'
import ServicesSection from '../components/ServicesSection/ServicesSection'
import ResearchSection from '../components/ResearchSection/ResearchSection'
import MediaGallery from '../components/MediaGallery/MediaGallery'
import BlogSection from '../components/BlogSection/BlogSection'
// import TestimonialsSection from '../components/TestimonialsSection/TestimonialsSection'
import ContactSection from '../components/ContactSection/ContactSection'
import Footer from '../components/Footer/Footer'
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary'
import { services } from '../data/services'
import { researchItems } from '../data/researchItems'
import { blogPosts } from '../data/blogPosts'
// import { testimonials } from '../data/testimonials'

function HomePage() {
  const handleCtaClick = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <ErrorBoundary>
        <HeroSection
          headline="Strategic Solutions for Climate-Smart Development"
          ctaText="Book a Discovery Call"
          onCtaClick={handleCtaClick}
        />
      </ErrorBoundary>

      <ErrorBoundary>
        <ServicesSection services={services} />
      </ErrorBoundary>

      <ErrorBoundary>
        <ResearchSection researchItems={researchItems} />
      </ErrorBoundary>

      <ErrorBoundary>
        <MediaGallery />
      </ErrorBoundary>

      <ErrorBoundary>
        <BlogSection posts={blogPosts} />
      </ErrorBoundary>

      {/* Testimonials section hidden until real testimonials are ready */}
      {/* <ErrorBoundary>
        <TestimonialsSection testimonials={testimonials} />
      </ErrorBoundary> */}

      <ErrorBoundary>
        <ContactSection />
      </ErrorBoundary>

      <Footer />
    </div>
  )
}

export default HomePage
