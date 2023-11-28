<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import Loading from '../../../components/Loading.svelte';

	export let data;
    let loading = true
	onMount(() => {
		if (data.result.code != 200) {
			goto('/login');
		}
        loading = false
	});
</script>

{#if loading}
	<Loading />
{:else}
	<h1>Dashboard</h1>
	<a href="/user/add-post" class="btn mt-4">Add Post</a>
{/if}
