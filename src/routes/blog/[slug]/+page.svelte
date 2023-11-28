<script lang="ts">
	import type { Post } from "$lib/interface.types";

    export let data: {post: Post};
    $: post = data.post
</script>

<section>
    <img class="rounded" src={post.image_url} alt={post.title + 'article'}>
    <h1 class="mt-6">{post.title}</h1>
    <article>
     
        <div class="flex items-center gap-1 py-2">
    
            <span>posted by {post.author.name}</span>
            <span>on {new Date(post.updatedAt).toLocaleDateString()}</span>
            
        </div>
        <p>{post.content}</p>
       
    </article>
</section>

