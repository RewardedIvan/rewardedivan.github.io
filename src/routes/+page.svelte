<script lang="ts">
	import { copy } from "svelte-copy";
	import { slide } from "svelte/transition";
	import { expoInOut } from "svelte/easing";

	import DiscordIcon from "$lib/icons/DiscordIcon.svelte"
	import ClipboardIcon from "$lib/icons/ClipboardIcon.svelte";
	import KeyIcon from "$lib/icons/KeyIcon.svelte";

	let copied = false;
	$: {
		if (copied == true) {
			setTimeout(() => copied = false, 2000);
		}
	}
</script>

{#if copied}
	<div
		class="absolute right-0 bottom-0 m-3"
		transition:slide={{ axis: "x", easing: expoInOut, duration: 500 }}
	>
		<div role="alert" class="alert alert-success">
			<ClipboardIcon fill="#000000" />
			<span>Copied!</span>
		</div>
	</div>
{/if}

<div class="min-h-screen flex flex-col">
	<div class="navbar bg-base-100">
		<div class="flex flex-row items-center gap-2">
			<span class="btn btn-ghost text-xl" use:copy={"int4_t"} on:svelte-copy={() => copied = true}><DiscordIcon /> discord</span>
			<span class="btn btn-ghost text-xl" use:copy={"A16B98815D0563295CB2795FA16F1618AADEFEDF"} on:svelte-copy={() => copied = true}><KeyIcon /> pgp</span>
		</div>
	</div>

	<div class="hero bg-base-200 flex-grow">
		<div class="hero-content flex-col">
			<img
				src="https://cdn.discordapp.com/avatars/723437187428778015/48ea39f4469667917a6d366798f4d7b4.webp?size=1024&format=webp&width=0&height=256"
				class="max-w-sm rounded-lg shadow-2xl"
				alt="pfp" />

			<div>
				<div class="flex flex-row items-end">
					<h1 class="text-5xl font-bold">int4_t</h1>
					<span class="text-sm text-slate-500">aka. rewardedivan</span>
				</div>
				<span class="py-6">hello i am code person i do write code stuff</span>
			</div>
		</div>
	</div>
</div>
