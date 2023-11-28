<script>
	import { goto } from '$app/navigation';

    export let data;

    if(data.result.code != 200){
        goto('/login')
    }
</script>
 
<h1>Dashboard</h1>
<a href="/user/add-post" class="btn mt-4">Add Post</a>