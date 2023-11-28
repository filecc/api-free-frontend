<script lang="ts">
	let passwordInput = 'password';

	function handleShowPassword(event: MouseEvent) {
		passwordInput === 'password' ? (passwordInput = 'text') : (passwordInput = 'password');
	}
</script>

<div class="grid place-items-center">
	<h1>Login</h1>
	<div class="flex flex-col gap-2 w-full">
		<div class="w-full flex flex-col gap-2">
			<label for="email">Email</label>
			<div class="relative bg-yellow-200">
				<input
					class="input px-4 relative"
					type="text"
					name="email"
					placeholder="example@email.com"
				/>
			</div>
		</div>

		<div class="w-full flex flex-col gap-2">
			<label for="password">Password</label>
			<div class="relative w-full">
				<input
					class="input px-4 relative"
					type={passwordInput}
					name="password"
					placeholder="Your password"
				/>
				<button
					on:click={handleShowPassword}
					class="absolute right-0 top-0 translate-y-1/2 -translate-x-1/2 z-10"
				>
					{#if passwordInput === 'password'}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="icon icon-tabler icon-tabler-eye-closed"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
								d="M21 9c-2.4 2.667 -5.4 4 -9 4c-3.6 0 -6.6 -1.333 -9 -4"
							/><path d="M3 15l2.5 -3.8" /><path d="M21 14.976l-2.492 -3.776" /><path
								d="M9 17l.5 -4"
							/><path d="M15 17l-.5 -4" /></svg
						>
					{:else}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="icon icon-tabler icon-tabler-eye"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
								d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"
							/><path
								d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"
							/></svg
						>
					{/if}
				</button>
			</div>
		</div>
        <div class="mt-4">
            <button class="btn py-3">Login</button>
        </div>
	</div>
</div>
