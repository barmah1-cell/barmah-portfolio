import { ResearchItem } from '../../types'

interface ResearchCardProps {
  item: ResearchItem
}

function ResearchCard({ item }: ResearchCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        {item.imageUrl ? (
          <img 
            src={item.imageUrl} 
            alt={item.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-gray-400 text-5xl">📄</span>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-primary-navy mb-3">
          {item.title}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          {item.summary}
        </p>
        {item.pdfUrl && (
          <a
            href={item.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-accent-gold hover:text-accent-teal font-semibold transition-colors"
          >
            <span className="mr-2">📥</span>
            View Research Paper
          </a>
        )}
      </div>
    </div>
  )
}

export default ResearchCard
