import { useParams, useNavigate } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'
import Navigation from '../components/Navigation/Navigation'
import Footer from '../components/Footer/Footer'

function BlogPostPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  
  const post = blogPosts.find(p => p.id === id)

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 py-24">
          <h1 className="text-4xl font-bold text-primary-navy mb-4">Post Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="text-accent-gold hover:text-accent-teal font-semibold"
          >
            ← Back to Home
          </button>
        </div>
        <Footer />
      </div>
    )
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <article className="max-w-4xl mx-auto px-4 py-24">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="text-accent-gold hover:text-accent-teal font-semibold mb-8 inline-flex items-center"
        >
          ← Back to Blog
        </button>

        {/* Featured Image */}
        {post.imageUrl && (
          <div className="mb-8 rounded-lg overflow-hidden">
            <img 
              src={post.imageUrl} 
              alt={post.title}
              className="w-full h-96 object-cover"
            />
          </div>
        )}

        {/* Post Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-navy mb-4">
            {post.title}
          </h1>
          
          <div className="flex items-center text-gray-600 mb-4">
            <span>{formatDate(post.date)}</span>
            <span className="mx-2">•</span>
            <span>{post.author}</span>
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span 
                  key={tag}
                  className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Post Content */}
        <div className="prose prose-lg max-w-none">
          <div 
            className="text-gray-700 leading-relaxed"
            style={{ whiteSpace: 'pre-wrap' }}
          >
            {post.content}
          </div>
        </div>

        {/* Back Button at Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <button
            onClick={() => navigate('/')}
            className="text-accent-gold hover:text-accent-teal font-semibold inline-flex items-center"
          >
            ← Back to Blog
          </button>
        </div>
      </article>

      <Footer />
    </div>
  )
}

export default BlogPostPage
