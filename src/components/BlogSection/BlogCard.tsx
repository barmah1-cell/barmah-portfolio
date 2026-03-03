import { BlogPost } from '../../types'
import { useNavigate } from 'react-router-dom'

interface BlogCardProps {
  post: BlogPost
}

function BlogCard({ post }: BlogCardProps) {
  const navigate = useNavigate()

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  const handleReadMore = () => {
    navigate(`/blog/${post.id}`)
    window.scrollTo(0, 0)
  }

  return (
    <article className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        {post.imageUrl ? (
          <img 
            src={post.imageUrl} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-gray-400 text-5xl">📝</span>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <span>{formatDate(post.date)}</span>
          <span className="mx-2">•</span>
          <span>{post.author}</span>
        </div>
        <h3 className="text-xl font-semibold text-primary-navy mb-3">
          {post.title}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          {post.excerpt}
        </p>
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span 
                key={tag}
                className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <button 
          onClick={handleReadMore}
          className="text-accent-gold hover:text-accent-teal font-semibold transition-colors"
        >
          Read More →
        </button>
      </div>
    </article>
  )
}

export default BlogCard
