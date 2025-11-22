import React, { useState, useCallback } from 'react'
import { usePosts } from '../hooks/usePosts'
import { Card } from '../components/Card'
import Button from '../components/Button'

const Posts = () => {
  const { posts, loading, error, hasMore, loadMore, searchPosts } = usePosts()
  const [searchQuery, setSearchQuery] = useState('')
  const [localLoading, setLocalLoading] = useState(false)

  const handleSearch = useCallback(async (query) => {
    setSearchQuery(query)
    setLocalLoading(true)
    await searchPosts(query)
    setLocalLoading(false)
  }, [searchPosts])

  const handleLoadMore = async () => {
    setLocalLoading(true)
    await loadMore()
    setLocalLoading(false)
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card>
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          📰 Posts from JSONPlaceholder API
        </h2>
        
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search posts by title or content..."
            className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            disabled={loading}
          />
        </div>
      </Card>

      {/* Enhanced Error State */}
      {error && (
        <Card className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 transform hover:scale-[1.02] transition-transform duration-200">
          <div className="flex items-center gap-3">
            <div className="text-2xl">❌</div>
            <div>
              <h3 className="font-semibold text-red-800 dark:text-red-200">Failed to Load Posts</h3>
              <p className="text-red-700 dark:text-red-300 text-sm mt-1">{error}</p>
              <Button 
                variant="primary" 
                onClick={() => window.location.reload()}
                className="mt-3"
                size="sm"
              >
                🔄 Retry
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* Enhanced Loading State */}
      {(loading || localLoading) && (
        <Card>
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 dark:border-blue-400"></div>
            <span className="ml-3 text-gray-600 dark:text-gray-400">
              {searchQuery ? 'Searching posts...' : 'Loading posts...'}
            </span>
          </div>
        </Card>
      )}

      {/* Empty State */}
      {!loading && !error && posts.length === 0 && (
        <Card className="text-center py-12 transform hover:scale-[1.02] transition-transform duration-200">
          <div className="text-4xl mb-4">📭</div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            No Posts Found
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            {searchQuery 
              ? `No posts matching "${searchQuery}"` 
              : 'No posts available at the moment'
            }
          </p>
          {searchQuery && (
            <Button 
              variant="secondary" 
              onClick={() => handleSearch('')}
              className="mt-4"
            >
              🔄 Clear Search
            </Button>
          )}
        </Card>
      )}

      {/* Posts Grid */}
      {!loading && posts.length > 0 && (
        <>
          <div className="grid gap-4 md:grid-cols-2">
            {posts.map((post, index) => (
              <Card 
                key={post.id} 
                className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className="flex flex-col h-full">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 flex-grow">
                    {post.body}
                  </p>
                  <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      📝 Post #{post.id}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      👤 User {post.userId}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Load More Button with Enhanced States */}
          {hasMore && (
            <div className="text-center">
              <Button 
                onClick={handleLoadMore}
                variant="primary"
                disabled={localLoading}
                className="transform hover:scale-105 active:scale-95 transition-transform duration-200"
              >
                {localLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Loading...
                  </>
                ) : (
                  '📚 Load More Posts'
                )}
              </Button>
            </div>
          )}

          {/* End of Results */}
          {!hasMore && posts.length > 0 && (
            <Card className="text-center bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
              <div className="text-2xl mb-2">🎉</div>
              <p className="text-gray-700 dark:text-gray-300 font-semibold">
                All caught up!
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                You've loaded all available posts.
              </p>
            </Card>
          )}
        </>
      )}
    </div>
  )
}

export default Posts