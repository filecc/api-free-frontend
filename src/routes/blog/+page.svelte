<script lang="ts">
	import type { Post } from "$lib/interface.types";
    
   export let data : {
    posts: Post[]
   }

</script>

<section>
    <h1>All the news</h1>
    <section class="mt-6 flex flex-col gap-8">
        {#if data.posts.length === 0}
        <p>No news</p>
        {/if}
        {#each data.posts as post}
        <article>
            <h2 class="mb-4 text-3xl">{post.title}</h2>
            <div class="flex items-center gap-1 py-2">
    
                <span>posted by {post.author.name}</span>
                <span>on {new Date(post.updatedAt).toLocaleDateString()}</span>
                
            </div>
            <p>{post.content.slice(0, 200) + '...'} <a href={`/blog/${post.slug}`}><span class="font-bold text-colored opacity-100">READ MORE</span></a> </p>
        </article>
        {/each}
    </section>
    
    
</section>

