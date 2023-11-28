<script lang="ts">
  import "../app.css";
    import Navbar from "../components/Navbar.svelte";

    let isUserLogged = false

    async function isLogged(){
    const res = await fetch('http://localhost:4000/user/isLogged/', {
		method: 'GET',
		credentials: 'include'
	})
    const result = await res.json()
    if (result.code != 200){
      isUserLogged = false
    }
    isUserLogged = true
}
isLogged()
   
    
  </script>
  
<div class="flex-1 flex flex-col text-color">
  <header class="px-6 dark:bg-gray-800 bg-white">
    <Navbar isLogged={isUserLogged} />
  </header>
  <main class="px-6 dark:bg-gray-800 bg-white flex-1">
    <slot />
  </main>
</div>
  

 