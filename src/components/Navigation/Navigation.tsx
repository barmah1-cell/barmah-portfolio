import { useState, useEffect } from 'react'

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`text-xl font-bold transition-colors ${
              isScrolled ? 'text-primary-navy' : 'text-white'
            }`}
          >
            Bartholomew Armah PhD
          </button>

          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className={`font-medium transition-colors hover:text-accent-gold ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('research')}
              className={`font-medium transition-colors hover:text-accent-gold ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Research
            </button>
            <button
              onClick={() => scrollToSection('media')}
              className={`font-medium transition-colors hover:text-accent-gold ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Media
            </button>
            <button
              onClick={() => scrollToSection('blog')}
              className={`font-medium transition-colors hover:text-accent-gold ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Blog
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-accent-gold hover:bg-accent-teal text-white font-semibold px-6 py-2 rounded-md transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
