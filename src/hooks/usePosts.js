import { useState, useEffect } from 'react'
import { api } from '../api/jsonPlaceholder'

export const usePosts = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)

  const loadPosts = async (pageNum = 1, append = false) => {
    try {
      setLoading(true)
      setError(null)
      const newPosts = await api.getPosts(pageNum, 10)
      
      if (append) {
        setPosts(prev => [...prev, ...newPosts])
      } else {
        setPosts(newPosts)
      }
      
      setHasMore(newPosts.length > 0)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const searchPosts = async (query) => {
    if (!query.trim()) {
      loadPosts(1, false)
      return
    }

    try {
      setLoading(true)
      setError(null)
      const results = await api.searchPosts(query)
      setPosts(results)
      setHasMore(false)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const loadMore = () => {
    if (!loading && hasMore) {
      const nextPage = page + 1
      setPage(nextPage)
      loadPosts(nextPage, true)
    }
  }

  useEffect(() => {
    loadPosts(1, false)
  }, [])

  return { posts, loading, error, hasMore, loadMore, searchPosts, refetch: () => loadPosts(1, false) }
}