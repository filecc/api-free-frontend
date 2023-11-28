<script lang="ts">
	import type { Post } from "$lib/interface.types";

    export let data: {post: Post};
    $: post = data.post
</script>

<section>
    <img class="rounded" src="https://images.unsplash.com/photo-1453873531674-2151bcd01707?q=80&w=2873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt={post.title + 'article'}>
    <h1 class="mt-6">{post.title}</h1>
    <article>
     
        <div class="flex items-center gap-1 py-2">
    
            <span>posted by {post.author.name}</span>
            <span>on {new Date(post.updatedAt).toLocaleDateString()}</span>
            
        </div>
        <p>{post.content}</p>
    </article>
</section>

