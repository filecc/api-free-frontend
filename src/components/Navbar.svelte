<script lang="ts">
	import { page } from '$app/stores';
    import { invalidateAll } from '$app/navigation';
	
	export let isLogged: boolean;
    let path : string;

    $: path = $page.url.pathname;
   
	$: links = [
		{
			text: 'Home',
			url: '/',
            render: true
		},
		{
			text: 'Blog',
			url: '/blog',
            render: true
		},
		{
			text: 'Login',
			url: '/login',
            render: !isLogged
		},
		{
			text: 'Dashboard',
			url: '/user/dashboard',
            render: isLogged
		},
		{
			text: 'Logout',
			url: '/logout',
            render: isLogged
		}
	];


    function reRun(){
        invalidateAll()
    }
  
</script>


<nav class="flex items-center justify-between py-4">
	<!-- LOGO -->
	<article class="w-12 h-12">
       
		<img
			class="w-full rounded-full border border-gray-800 dark:border-gray-200"
			src="https://cdn.pixabay.com/photo/2017/06/10/07/22/news-2389226__180.png"
			alt="logo"
		/>
	</article>

	<!-- LINK -->
    
  
	<ul class="flex-center gap-2 text-xs uppercase font-light">
		{#each links as link}
        {#if link.render}
				<li>
					<a 
                        on:click={reRun}
						class={`${
							link.url === path &&
							'text-teal-500 dark:text-teal-400 font-bold text-lg'
						} transition-all duration-300`}
						href={link.url}>{link.text}</a
					>
				</li>
			{/if}
		{/each}
	</ul>
 
   
</nav>
