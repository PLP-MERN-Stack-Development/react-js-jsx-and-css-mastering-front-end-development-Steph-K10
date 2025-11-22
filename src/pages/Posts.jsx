import React, { useState, useCallback } from 'react'
import { usePosts } from '../hooks/usePosts'
import { Card } from '../components/Card'
import Button from '../components/Button'

const Posts = () => {
  const { posts, loading, error, hasMore, loadMore, searchPosts } = usePosts()
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = useCallback((query) => {
    setSearchQuery(query)
    searchPosts(query)
  }, [searchPosts])

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card>
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Posts from JSONPlaceholder API</h2>
        
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search posts..."
            className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </Card>

      {error && (
        <Card className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
          <p className="text-red-800 dark:text-red-200">Error: {error}</p>
          <Button 
            variant="primary" 
            onClick={() => window.location.reload()}
            className="mt-2"
          >
            Try Again
          </Button>
        </Card>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        {posts.map(post => (
          <Card key={post.id} className="hover:shadow-lg transition-shadow duration-200">
            <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white line-clamp-2">
              {post.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
              {post.body}
            </p>
            <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Post ID: {post.id} • User ID: {post.userId}
              </span>
            </div>
          </Card>
        ))}
      </div>

      {loading && (
        <Card>
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <span className="ml-3 text-gray-600 dark:text-gray-400">Loading posts...</span>
          </div>
        </Card>
      )}

      {hasMore && !loading && (
        <div className="text-center">
          <Button 
            onClick={loadMore}
            variant="primary"
          >
            Load More Posts
          </Button>
        </div>
      )}

      {!hasMore && posts.length > 0 && (
        <Card>
          <p className="text-center text-gray-500 dark:text-gray-400">
            No more posts to load.
          </p>
        </Card>
      )}
    </div>
  )
}

export default Posts