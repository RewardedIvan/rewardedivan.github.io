<script lang="ts">
	import { copy } from "svelte-copy";
	import { slide } from "svelte/transition";
	import { expoInOut } from "svelte/easing";

	import { skills } from "$lib/skills";

	// Material Icons
	import ClipboardIcon from "$lib/icons/material/ClipboardIcon.svelte";
	import KeyIcon from "$lib/icons/material/KeyIcon.svelte";

	// Brand Icons
	import DiscordIcon from "$lib/icons/brand/DiscordIcon.svelte"
	import XIcon from "$lib/icons/brand/XIcon.svelte";
	import GithubIcon from "$lib/icons/brand/GithubIcon.svelte";

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

<div class="navbar bg-base-200 justify-between">
	<div class="flex flex-row items-center gap-2">
		<span class="btn btn-ghost max-sm:btn-sm text-xl" use:copy={"int4_t"} on:svelte-copy={() => copied = true}><DiscordIcon /> discord</span>
		<a class="btn btn-ghost max-sm:btn-sm text-xl" href="https://x.com/uint4_t"><XIcon /> twitter</a>
		<a class="btn btn-ghost max-sm:btn-sm text-xl" href="https://github.com/RewardedIvan"><GithubIcon /> github</a>
		<span class="btn btn-ghost max-sm:btn-sm text-xl" use:copy={"A16B98815D0563295CB2795FA16F1618AADEFEDF"} on:svelte-copy={() => copied = true}><KeyIcon /> pgp</span>
	</div>

	<div class="flex flex-row items-center gap-2">
		<a href="https://github.com/RewardedIvan/rewardedivan.github.io" title="source" class="btn btn-ghost btn-circle max-sm:btn-sm"><GithubIcon /></a>
	</div>
</div>

<div class="min-h-screen flex flex-col my-5">
	<div class="flex-grow flex flex-col items-center justify-center gap-5 mx-5">
		<div class="hero bg-base-200 w-fit p-3 rounded-lg">
			<div class="hero-content flex-col">
				<img
					src="/pfp.png"
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

				{#each skills as sg}
					<div class="flex flex-row gap-2 items-center">
						{#each sg.items as sk}
							<span class="flex flex-row gap-1 items-center"><img src="/icons/skills/{sg.name}/{(sk.icon == null) ? sk.name : sk.icon}.svg" alt={sk.name} /> {sk.name}</span>
						{/each}
					</div>
				{/each}
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
