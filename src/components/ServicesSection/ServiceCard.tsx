import { Service } from '../../types'

interface ServiceCardProps {
  service: Service
}

function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="text-accent-gold text-4xl mb-4">
        {/* Icon placeholder - using emoji for now */}
        {service.icon === 'chart-line' && '📈'}
        {service.icon === 'users' && '👥'}
        {service.icon === 'search' && '🔍'}
      </div>
      <h3 className="text-xl md:text-2xl font-semibold text-primary-navy mb-3">
        {service.title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {service.description}
      </p>
    </div>
  )
}

export default ServiceCard
