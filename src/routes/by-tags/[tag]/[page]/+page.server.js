import { posts } from '$lib/data/posts'
import { paginate } from '$lib/util'
import { error } from '@sveltejs/kit'

/** @type {import('../$types').PageServerLoad} */
export async function load({ params }) {
  let page = params.page ? parseInt(params.page) : 1
  let tag = params.tag
  let limit = 10
  const tagWisePosts = posts.filter(post => post.tags.includes(tag))
  const postsForPage = paginate(tagWisePosts, { limit, page })

  // if page doesn't exist, 404
  if (postsForPage.length === 0 && page > 1) {
    throw error(404, 'Page not found')
  }

  return {
    posts: postsForPage,
    page,
    limit,
    tag,
    hasNextPage: (posts.length % (limit * page)) > 10 
  }
}
