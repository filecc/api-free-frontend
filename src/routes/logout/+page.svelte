<script lang="ts">
	import { onMount } from "svelte";
	import Loading from "../../components/Loading.svelte";
	import { error } from "@sveltejs/kit";
	import { goto, invalidate, invalidateAll } from "$app/navigation";

    onMount(async () => {
       await fetch('http://localhost:4000/user/logout', {
        method: 'GET',
        credentials: 'include'
       }).then(res => {
           if(res.status == 200){
              goto('/', { invalidateAll: true })
           }
           else {
            throw error(505, 'Something went wrong')
           }
       })
    });
   
    
</script>

<Loading />