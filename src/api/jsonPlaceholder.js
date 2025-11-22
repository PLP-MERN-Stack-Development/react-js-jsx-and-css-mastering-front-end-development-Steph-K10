const BASE_URL = 'https://jsonplaceholder.typicode.com'

export const api = {
  async getPosts(page = 1, limit = 10) {
    const response = await fetch(
      `${BASE_URL}/posts?_page=${page}&_limit=${limit}`
    )
    if (!response.ok) throw new Error('Failed to fetch posts')
    return response.json()
  },

  async searchPosts(query) {
    const response = await fetch(
      `${BASE_URL}/posts?q=${query}`
    )
    if (!response.ok) throw new Error('Failed to search posts')
    return response.json()
  }
}