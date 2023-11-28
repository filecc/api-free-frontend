<script lang="ts">
	import { goto, invalidate, invalidateAll } from "$app/navigation";

    export let data;
    if(data.result.code == 200){
        goto('/user/dashboard')
    }
	
    let email : string | null = null
    let password : string | null = null
    let errorType = ''
    let errors = [{field: '', message: ''}]
    let loading = false

    async function login() {
        loading = true
        const formData = new FormData()
        formData.append('email', email as string)
        formData.append('password', password as string)

        const res = await fetch('http://localhost:4000/user/login', {
            credentials: 'include',
            method: 'POST',
            body: formData
        })

        const result = await res.json()
        if(result.code != 200){
            errorType = result.error
            errors = result.messages
            loading = false
           
            return
        }
        invalidateAll()
        goto('/user/dashboard')
        
      
    }
   
</script>

<div class="grid place-items-center flex-1">
	<div class="flex flex-col gap-2 w-full">
        <h1 class="text-center">Login</h1>
		<div class="w-full flex flex-col gap-2 mb-4">
			<label for="email">Email</label>
			<div class="relative">
				<input
                    bind:value={email}
					class="input px-4 relative"
					type="text"
					name="email"
					placeholder="example@email.com"
				/>
                    {#each errors as err}
                    {#if err.field === 'email'}
                        <p class="mt-2 text-red-500">{err.message}</p>
                    {/if}
                    {/each}               
			</div>
		</div>

		<div class="w-full flex flex-col gap-2">
			<label for="password">Password</label>
			<div class="relative w-full">
				<input
                    bind:value={password}
					class="input px-4 relative"
					type='password'
					name="password"
					placeholder="Your password"
				/>
                {#if errors}
                    {#each errors as err}
                    {#if err.field === 'password'}
                        <p class="mt-2 text-red-500">{err.message}</p>
                    {/if}
                    {/each}
                {/if}
                
			</div>
		</div>
        {#if errorType != 'Some errors'}
            <p class="mt-2 text-red-500">{errorType}</p>
        {/if}
        <div class="mt-4">
            <button on:click={login} class="btn py-3">
                {#if loading}
                Loading...
                {:else}
                Login
                {/if}
            </button>
        </div>
	</div>
</div>
