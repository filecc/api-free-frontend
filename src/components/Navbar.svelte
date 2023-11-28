<script lang="ts">
 import { getStores, navigating, page, updated } from '$app/stores';

 export let isLogged : boolean;

const links = [
   {
        text: "Home",
        url: "/"
    },
    {
        text: "Blog",
        url: "/blog"
    }
]

</script>

<nav class="flex items-center justify-between py-4">
    <!-- LOGO -->
    <article class="w-12 h-12">
        <img class="w-full rounded-full border border-gray-800 dark:border-gray-200" src="https://cdn.pixabay.com/photo/2017/06/10/07/22/news-2389226__180.png" alt="logo">
    </article>
    
    <!-- LINK -->
    <ul class="flex-center gap-2 text-xs uppercase font-light">
        {#each links as link}
        <li>
            <a class={`${$page.url.pathname === link.url && 'text-teal-500 dark:text-teal-400 font-bold text-lg'} transition-all duration-300`} href={link.url}>{link.text}</a>
        </li>

    {/each}
    {#if isLogged}
    <li>
        <a class={`${$page.url.pathname === '/dashboard' && 'text-teal-500 dark:text-teal-400 font-bold text-lg'} transition-all duration-300`} href={'/user/dashboard'}>dashboard</a>
    </li>
    {/if}
    {#if isLogged}
    <li><a href="/logout">Logout</a></li>
    {:else}
    <li><a href="/login" class={`${$page.url.pathname === '/login' && 'text-teal-500 dark:text-teal-400 font-bold text-lg'} transition-all duration-300`}>Login</a></li>
    {/if}
   
  
    </ul>
   
</nav>