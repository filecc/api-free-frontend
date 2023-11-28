import { error } from '@sveltejs/kit'


export async function load({ fetch }){
    const res = await fetch('http://localhost:4000/api/posts')
    const posts = await res.json()
    if(!posts) throw error(404, 'Post not found')
    return { posts }
    
}