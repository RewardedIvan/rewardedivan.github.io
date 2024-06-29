<script lang="ts">
	import { browser } from "$app/environment";
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
	import CIcon from "$lib/icons/lang/CIcon.svelte";
	import CPPIcon from "$lib/icons/lang/CPPIcon.svelte";
	import JavaIcon from "$lib/icons/lang/JavaIcon.svelte";
	import CSIcon from "$lib/icons/lang/CSIcon.svelte";
	import JavascriptIcon from "$lib/icons/lang/JavascriptIcon.svelte";
	import CSSIcon from "$lib/icons/lang/CSSIcon.svelte";
	import HTMLIcon from "$lib/icons/lang/HTMLIcon.svelte";
	import ReactIcon from "$lib/icons/lang/ReactIcon.svelte";
	import LuaIcon from "$lib/icons/lang/LuaIcon.svelte";
	import KernelIcon from "$lib/icons/lang/KernelIcon.svelte";
	import ArchIcon from "$lib/icons/lang/ArchIcon.svelte";
	import VimIcon from "$lib/icons/lang/VimIcon.svelte";

	let copied = false;
	$: {
		if (copied == true) {
			setTimeout(() => copied = false, 2000);
		}
	}

	const pfp = "https://cdn.discordapp.com/avatars/723437187428778015/48ea39f4469667917a6d366798f4d7b4.webp?size=1024&format=webp&width=0&height=256";
	let dark: boolean = true;
	if (browser) {
		dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
	}
</script>

<svelte:head>
	<link rel="icon" href={pfp} />
	<meta content={pfp} property="og:image" />
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

<div class="navbar bg-base-200 justify-between">
	<div class="flex flex-row items-center gap-2">
		<span class="btn btn-ghost max-sm:btn-sm text-xl" use:copy={"int4_t"} on:svelte-copy={() => copied = true}><DiscordIcon /> discord</span>
		<a class="btn btn-ghost max-sm:btn-sm text-xl" href="https://x.com/uint4_t"><XIcon fill={dark ? "#FFF" : "#000"} /> twitter</a>
		<a class="btn btn-ghost max-sm:btn-sm text-xl" href="https://github.com/RewardedIvan"><GithubIcon fill={dark ? "#FFF" : "#000"} /> github</a>
		<span class="btn btn-ghost max-sm:btn-sm text-xl" use:copy={"A16B98815D0563295CB2795FA16F1618AADEFEDF"} on:svelte-copy={() => copied = true}><KeyIcon fill={dark ? "#FFF" : "#000"} /> pgp</span>
	</div>

	<div class="flex flex-row items-center gap-2">
		<a href="https://github.com/RewardedIvan/rewardedivan.github.io" title="source" class="btn btn-ghost btn-circle max-sm:btn-sm"><GithubIcon fill={dark ? "#FFF" : "#000"} /></a>
	</div>
</div>

<div class="min-h-screen flex flex-col my-5">
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
			</div>
		</div>

		<div class="hero bg-base-200 w-fit p-3 rounded-lg">
			<div class="hero-content flex-col">
				<span class="font-bold text-lg">skills</span>

				<div class="flex flex-row gap-2 items-center">
					<span class="flex flex-row gap-1 items-center"><JavascriptIcon className="rounded-sm" size={"1em"} /> Javascript</span>
					<span class="flex flex-row gap-1 items-center"><CSSIcon /> CSS</span>
					<span class="flex flex-row gap-1 items-center"><HTMLIcon /> HMTL</span>
				</div>

				<div class="flex flex-row gap-2 items-center">
					<span class="flex flex-row gap-1 items-center"><TypescriptIcon size={"1em"} /> Typescript</span>
					<span class="flex flex-row gap-1 items-center"><SvelteIcon /> Svelte/Kit</span>
					<span class="flex flex-row gap-1 items-center"><ReactIcon /> React</span>
				</div>

				<div class="flex flex-row gap-2 items-center">
					<span class="flex flex-row gap-1 items-center"><LuaIcon /> Lua</span>
					<span class="flex flex-row gap-1 items-center"><KernelIcon /> GNU/Linux</span>
					<span class="flex flex-row gap-1 items-center"><ArchIcon /> Arch</span>
					<span class="flex flex-row gap-1 items-center"><VimIcon /> Vim</span>
				</div>

				<div class="flex flex-row gap-2 items-center">
					<span class="flex flex-row gap-1 items-center"><GoIcon size={"2em"} /> Go</span>
					<span class="flex flex-row gap-1 items-center"><JavaIcon /> Java</span>
					<span class="flex flex-row gap-1 items-center"><CSIcon /> C#</span>
				</div>

				<div class="flex flex-row gap-3 items-center">
					<span class="flex flex-row gap-1 items-center"><CIcon /> C</span>
					<span class="flex flex-row gap-1 items-center"><CPPIcon /> C++</span>
				</div>
			</div>
		</div>
	</div>
</div>

<footer class="footer bg-base-200 text-base-content p-10">
	<nav>
		<h6 class="footer-title">LEGAL DISCLAIMER</h6>
		<span>
			All product names, logos, brands, trademarks, and registered trademarks are the property of their respective owners. All company, product, and service names used on this website are for identification purposes only. My use of these names, trademarks, and brands does not imply endorsement.
			I am not affiliated with, endorsed by, or sponsored by any of the companies whose logos and names appear on this site. The icons and names are used solely for reference purposes to provide information about the respective companies.
			If any trademark owner has any concerns or objections to the use of their trademark, please contact me at <kbd class="kbd kbd-xs">rewardedivan&#64;gmail&#46;com</kbd>, and I will address the issue promptly.
		</span>
	</nav>
</footer>
