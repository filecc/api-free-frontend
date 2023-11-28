<script>
	import { goto } from '$app/navigation';

    export let data;

    if(data.result.code != 200){
        goto('/login')
    }

    let postData = {
        title: '',
        content: '',
        published: false,
        category: '',
        tags: ''
    }
    let errors = [{field: '', message: ''}]
    let loading = false

    async function post(){
        loading = true
        const tags = postData.tags.split(',').map(tag => tag.trim())
      
        const formData = new FormData()
        formData.append('title', postData.title)
        formData.append('content', postData.content)
        formData.append('published', postData.published ? 'true' : 'false')
        formData.append('category', postData.category)
        formData.append('tags', JSON.stringify(tags))
        
        const res = await fetch('http://localhost:4000/api/post', 
        {
            method: 'POST',
            credentials: 'include',
            body: formData
        })
        const result = await res.json()
        if(result.code){
            errors = result.messages
            loading = false
            return
        }
        console.log(result)
        goto('/blog/'+result.slug)
    }

</script>
 
<h1>Create Post</h1>
<section class="mt-6">
    <div class="flex flex-col gap-2 mb-4">
        <label for="title">Title</label>
        <input bind:value={postData.title} type="text" name="title" class="input" placeholder="Title">
        
        {#each errors as err}
            {#if err.field === 'title'}
                <p class="mt-2 text-red-500">{err.message}</p>
            {/if}
        {/each} 
    </div>

    <div class="flex flex-col gap-2 mb-4">
        <label for="content">Content</label>
        <textarea bind:value={postData.content} rows="12" name="content"  placeholder="Content" class="input" />
        {#each errors as err}
            {#if err.field === 'content'}
                <p class="mt-2 text-red-500">{err.message}</p>
            {/if}
        {/each} 
    </div>

    <div class="flex flex-col gap-2 mb-4">
        <label for="category">Category</label>
        <input bind:value={postData.category} min="0" type="number" name="category" class="input" placeholder="Category">
        {#each errors as err}
            {#if err.field === 'category'}
                <p class="mt-2 text-red-500">{err.message}</p>
            {/if}
        {/each} 
    </div>

    <div class="flex flex-col gap-2 mb-4">
        <label for="tags">Tags (comma separated)</label>
        <input bind:value={postData.tags} type="text" name="tags" class="input" placeholder="Tags">
        {#each errors as err}
            {#if err.field === 'tags'}
                <p class="mt-2 text-red-500">{err.message}</p>
            {/if}
        {/each} 
    </div>

    <div class="mb-4">
        <label for="content">Published?</label>
        <input bind:checked={postData.published} type="checkbox" name="published"  placeholder="content">
    </div>
   <button on:click={post} class="btn">Post it</button>
</section>