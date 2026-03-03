import { ResearchItem } from '../../types'
import ResearchCard from './ResearchCard'

interface ResearchSectionProps {
  researchItems: ResearchItem[]
}

function ResearchSection({ researchItems }: ResearchSectionProps) {
  return (
    <section id="research" className="py-16 md:py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-navy text-center mb-12">
          Research & Insights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {researchItems.map((item) => (
            <ResearchCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ResearchSection
