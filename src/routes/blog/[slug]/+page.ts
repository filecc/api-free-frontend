import { error } from '@sveltejs/kit'


export async function load({ fetch, params }){
    const res = await fetch('http://localhost:4000/api/post/' + params.slug)
    const post = await res.json()
    if(!post) throw error(404, 'Post not found')
    return { post }
    
}