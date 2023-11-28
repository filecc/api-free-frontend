<script lang="ts">
    import "../app.css";
    import Navbar from "../components/Navbar.svelte";
  </script>
  
<div class="flex-1 flex flex-col text-color">
  <header class="px-6 dark:bg-gray-800 bg-white">
    <Navbar />
  </header>
  <main class="px-6 dark:bg-gray-800 bg-white flex-1">
    <slot />
  </main>
</div>
  

 