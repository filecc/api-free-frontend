import { error } from '@sveltejs/kit'


export async function load(){
    const posts = await fetch('http://localhost:4000/api/posts')
    .then(res => res.json())
    if(posts) {
        return {posts: posts}
    }
    throw error(404, 'Post not found')
}