import { Testimonial } from '../../types'

interface TestimonialCardProps {
  testimonial: Testimonial
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
      <div className="mb-6">
        <svg className="w-10 h-10 text-accent-gold mb-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-gray-700 text-lg leading-relaxed italic mb-6">
          "{testimonial.quote}"
        </p>
      </div>
      <div className="flex items-center">
        <div className="flex-1">
          <p className="font-semibold text-primary-navy">
            {testimonial.clientName}
          </p>
          <p className="text-gray-600 text-sm">
            {testimonial.clientTitle}
          </p>
          <p className="text-gray-600 text-sm">
            {testimonial.companyName}
          </p>
        </div>
        {testimonial.companyLogo && (
          <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center">
            <span className="text-gray-400 text-xs">Logo</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default TestimonialCard
