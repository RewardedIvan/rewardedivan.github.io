<script lang="ts">
	import { copy } from "svelte-copy";
	import { slide } from "svelte/transition";
	import { expoInOut } from "svelte/easing";

	// Material Icons
	import ClipboardIcon from "$lib/icons/material/ClipboardIcon.svelte";
	import KeyIcon from "$lib/icons/material/KeyIcon.svelte";

	// Brand Icons
	import DiscordIcon from "$lib/icons/brand/DiscordIcon.svelte"
	import XIcon from "$lib/icons/brand/XIcon.svelte";
	import GithubIcon from "$lib/icons/brand/GithubIcon.svelte";

	// Language Icons
	import SvelteIcon from "$lib/icons/lang/SvelteIcon.svelte";
	import TypescriptIcon from "$lib/icons/lang/TypescriptIcon.svelte";
	import GoIcon from "$lib/icons/lang/GoIcon.svelte";
	import CLogo from "$lib/icons/lang/CLogo.svelte";
	import CppLogo from "$lib/icons/lang/CPPLogo.svelte";

	let copied = false;
	$: {
		if (copied == true) {
			setTimeout(() => copied = false, 2000);
		}
	}

	const pfp = "https://cdn.discordapp.com/avatars/723437187428778015/48ea39f4469667917a6d366798f4d7b4.webp?size=1024&format=webp&width=0&height=256";
</script>

<svelte:head>
	<link rel="icon" href={pfp} />
</svelte:head>

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
	<div class="navbar bg-base-200">
		<div class="flex flex-row items-center gap-2">
			<span class="btn btn-ghost max-sm:btn-sm text-xl" use:copy={"int4_t"} on:svelte-copy={() => copied = true}><DiscordIcon /> discord</span>
			<a class="btn btn-ghost max-sm:btn-sm text-xl" href="https://x.com/uint4_t"><XIcon /> twitter</a>
			<a class="btn btn-ghost max-sm:btn-sm text-xl" href="https://github.com/RewardedIvan"><GithubIcon /> github</a>
			<span class="btn btn-ghost max-sm:btn-sm text-xl" use:copy={"A16B98815D0563295CB2795FA16F1618AADEFEDF"} on:svelte-copy={() => copied = true}><KeyIcon /> pgp</span>
		</div>
	</div>

	<div class="flex-grow flex flex-col items-center justify-center gap-5 mx-5">
		<div class="hero bg-base-200 w-fit p-3 rounded-lg">
			<div class="hero-content flex-col">
				<img
					src={pfp}
					class="max-w-sm rounded-lg shadow-2xl"
					alt="pfp"
				/>

				<div>
					<div class="flex flex-row items-end">
						<h1 class="text-5xl font-bold">int4_t</h1>
						<span class="text-sm text-slate-500">aka. rewardedivan</span>
					</div>

					<span>hello i am code person i do write code stuff</span>
				</div>

				<div></div>
			</div>
		</div>

		<div class="hero bg-base-200 w-fit p-3 rounded-lg">
			<div class="hero-content flex-col">
				<span class="font-bold text-lg">skills</span>

				<div class="flex flex-row gap-2 items-center">
					<span class="flex flex-row gap-1 items-center"><SvelteIcon /> Svelte</span>
					<span class="flex flex-row gap-1 items-center"><TypescriptIcon size={"1em"} /> Typescript</span>
					<span class="flex flex-row gap-1 items-center"><GoIcon size={"2em"} /> Go</span>
				</div>

				<div class="flex flex-row gap-3 items-center">
					<span class="flex flex-row gap-1 items-center"><CLogo /> C</span>
					<span class="flex flex-row gap-1 items-center"><CppLogo /> C++</span>
				</div>
			</div>
		</div>
	</div>
</div>
