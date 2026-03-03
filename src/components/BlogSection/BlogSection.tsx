import { BlogPost } from '../../types'
import BlogCard from './BlogCard'

interface BlogSectionProps {
  posts: BlogPost[]
}

function BlogSection({ posts }: BlogSectionProps) {
  return (
    <section id="blog" className="py-16 md:py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-navy text-center mb-4">
          Latest Insights
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Thoughts and perspectives on sustainable development, climate finance, and strategic planning
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogSection
