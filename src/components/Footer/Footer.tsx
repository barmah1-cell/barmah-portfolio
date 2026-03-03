function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-primary-navyDark text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Prof Bartholomew Armah PhD</h3>
            <p className="text-gray-300 leading-relaxed">
              Management consultant specializing in strategic growth, operational excellence, 
              and sustainable development solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-accent-gold transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('research')}
                  className="text-gray-300 hover:text-accent-gold transition-colors"
                >
                  Research & Insights
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('media')}
                  className="text-gray-300 hover:text-accent-gold transition-colors"
                >
                  Media Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('blog')}
                  className="text-gray-300 hover:text-accent-gold transition-colors"
                >
                  Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-accent-gold transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
            <ul className="space-y-2 text-gray-300">
              <li>📧 Email: barmah1@gmail.com</li>
              <li>📱 Phone: +27726719744</li>
              <li>📍 Location: Midrand, South Africa</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Bartholomew Armah PhD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
