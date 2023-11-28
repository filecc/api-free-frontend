<script lang="ts">
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';

  export let data;

</script>

<div class="text-color flex-1 flex flex-col dark:bg-zinc-900 bg-zinc-50 px-6">
	<header>
		<Navbar isLogged={data.islogged} />
	</header>
	<main class="flex-1 h-full flex flex-col pb-10">
		<slot />
	</main>
  <footer class="py-2">
    <article class="py-4 px-4 border-t border-gray-400 grid place-items-center text-gray-500 dark:text-gray-400">
      <a target="_blank" href="https://filecc.dev">made with &hearts; by filecc</a>
    </article>
  </footer>
</div>
