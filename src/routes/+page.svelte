<script lang="ts">
	import { copy } from 'svelte-copy';
	import { slide } from 'svelte/transition';
	import { expoInOut } from 'svelte/easing';

	import { tools } from '$lib/tools';

	// Material Icons
	import ClipboardIcon from '$lib/icons/material/ClipboardIcon.svelte';
	import KeyIcon from '$lib/icons/material/KeyIcon.svelte';

	// Brand Icons
	import DiscordIcon from '$lib/icons/brand/DiscordIcon.svelte';
	import XIcon from '$lib/icons/brand/XIcon.svelte';
	import GithubIcon from '$lib/icons/brand/GithubIcon.svelte';

	// Flag
	import BulgarianFlag from '$lib/icons/flag/BulgarianFlag.svelte';

	let copied = false;
	$: {
		if (copied == true) {
			setTimeout(() => (copied = false), 2000);
		}
	}
</script>

{#if copied}
	<div
		class="absolute bottom-0 right-0 m-3"
		transition:slide={{ axis: 'x', easing: expoInOut, duration: 500 }}
	>
		<div role="alert" class="alert alert-success">
			<ClipboardIcon fill="#000000" />
			<span>Copied!</span>
		</div>
	</div>
{/if}

<div class="navbar justify-between bg-base-200">
	<div class="flex flex-row items-center gap-2">
		<span
			class="btn btn-ghost text-xl max-sm:btn-sm"
			use:copy={'int4_t'}
			on:svelte-copy={() => (copied = true)}><DiscordIcon /> discord</span
		>
		<a class="btn btn-ghost text-xl max-sm:btn-sm" href="https://x.com/uint4_t"><XIcon /> twitter</a
		>
		<a class="btn btn-ghost text-xl max-sm:btn-sm" href="https://github.com/RewardedIvan"
			><GithubIcon /> github</a
		>
		<span
			class="btn btn-ghost text-xl max-sm:btn-sm"
			use:copy={'A16B98815D0563295CB2795FA16F1618AADEFEDF'}
			on:svelte-copy={() => (copied = true)}><KeyIcon /> pgp</span
		>
	</div>

	<div class="flex flex-row items-center gap-2">
		<a
			href="https://github.com/RewardedIvan/rewardedivan.github.io"
			title="source"
			class="btn btn-circle btn-ghost max-sm:btn-sm"><GithubIcon /></a
		>
	</div>
</div>

<div class="my-5 flex min-h-screen flex-col">
	<div class="mx-5 flex flex-grow flex-col items-center justify-center gap-5">
		<div class="hero w-fit rounded-lg bg-base-200 p-3">
			<div class="hero-content flex-col">
				<img
					src="https://avatars.githubusercontent.com/u/67065165"
					class="max-w-sm rounded-lg shadow-2xl"
					alt="pfp"
				/>

				<div>
					<div class="flex flex-row items-end">
						<h1 class="text-5xl font-bold">int4_t</h1>
						<span class="text-sm text-slate-500">aka. rewardedivan</span>
					</div>

					<span class="flex flex-row items-center gap-1"
						>developer/software engineer from <BulgarianFlag className="rounded" /> bulgaria</span
					>
				</div>
			</div>
		</div>

		<div class="hero w-fit rounded-lg bg-base-200 p-3">
			<div class="hero-content flex-col">
				<span class="text-lg font-bold">toolbox</span>

				{#each tools as sg}
					<div class="flex w-full flex-row items-center justify-between gap-2">
						<div class="flex flex-row items-center justify-start gap-2">
							{#each sg.items as sk}
								<span class="flex flex-row items-center gap-1">
									<img
										src="/icons/tools/{sg.name}/{!sk.icon ? sk.name : sk.icon}.svg"
										alt={sk.name}
									/>
									{sk.name}
								</span>
							{/each}
						</div>

						<span class="text-slate-500">{sg.name}</span>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<footer class="footer bg-base-200 p-10 text-base-content">
	<nav>
		<h6 class="footer-title">LEGAL DISCLAIMER</h6>
		<span>
			All product names, logos, brands, trademarks, and registered trademarks are the property of
			their respective owners. All company, product, and service names used on this website are for
			identification purposes only. My use of these names, trademarks, and brands does not imply
			endorsement. I am not affiliated with, endorsed by, or sponsored by any of the companies whose
			logos and names appear on this site. The icons and names are used solely for reference
			purposes to provide information about the respective companies. If any trademark owner has any
			concerns or objections to the use of their trademark, please contact me at <kbd
				class="kbd kbd-xs">rewardedivan&#64;gmail&#46;com</kbd
			>, and I will address the issue promptly.
		</span>
	</nav>
</footer>
