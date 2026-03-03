import ContactForm from './ContactForm'
import { ContactFormData } from '../../types'

interface ContactSectionProps {
  onSubmit?: (data: ContactFormData) => void
}

function ContactSection({ onSubmit }: ContactSectionProps) {
  const handleFormSubmit = (data: ContactFormData) => {
    console.log('Form submitted:', data)
    if (onSubmit) {
      onSubmit(data)
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-navy text-center mb-4">
          Get In Touch
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Ready to drive strategic growth for your organization? Let's discuss how we can work together.
        </p>
        <ContactForm onSubmit={handleFormSubmit} />
      </div>
    </section>
  )
}

export default ContactSection
