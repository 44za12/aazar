import { posts, tags } from '$lib/data/posts'

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  let tagsAsArray = Array.from(Object.keys(tags))
  return {
    posts: posts.slice(0, 5),
    tags: tagsAsArray
  }
}
