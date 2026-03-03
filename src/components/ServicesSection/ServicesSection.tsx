import { Service } from '../../types'
import ServiceCard from './ServiceCard'

interface ServicesSectionProps {
  services: Service[]
}

function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-navy text-center mb-12">
          Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
