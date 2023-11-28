<script lang="ts">
 import { getStores, navigating, page, updated } from '$app/stores';


const links = [
   {
        text: "Home",
        url: "/"
    },
    {
        text: "About",
        url: "/about"
    },
    {
        text: "Blog",
        url: "/blog"
    },
    {
        text: "Login",
        url: "/login"
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
        <li><a class={`${$page.url.pathname === link.url && 'text-teal-500 dark:text-teal-400 font-bold text-lg'} transition-all duration-300`} href={link.url}>{link.text}</a></li>
    {/each}
    </ul>
   
</nav>