<script lang="ts">
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
	import Button from './Button.svelte';

	let copied = $state(false);
	$effect(() => {
		if (copied == true) {
			setTimeout(() => (copied = false), 2000);
		}
	});
</script>

{#if copied}
	<div
		class="absolute bottom-0 right-0 m-3"
		transition:slide={{ axis: 'x', easing: expoInOut, duration: 500 }}
	>
		<div role="alert" class="flex flex-row gap-2 rounded-lg bg-base-500 p-3">
			<ClipboardIcon fill="#ffffff" />
			<span>Copied!</span>
		</div>
	</div>
{/if}

<div class="flex flex-row justify-between rounded-b-lg bg-base-500 p-4">
	<div class="flex flex-row items-center gap-2">
		<Button class="text-xl" copy="int4_t" onclick={() => (copied = true)}>
			<DiscordIcon /> discord
		</Button>

		<Button class="text-xl" href="https://x.com/uint4_t">
			<XIcon /> twitter
		</Button>

		<Button class="text-xl" href="https://github.com/RewardedIvan">
			<GithubIcon /> github
		</Button>

		<Button
			class="text-xl"
			copy="A16B98815D0563295CB2795FA16F1618AADEFEDF"
			onclick={() => (copied = true)}
		>
			<KeyIcon /> pgp
		</Button>
	</div>

	<div class="flex flex-row items-center gap-2">
		<Button href="https://github.com/RewardedIvan/rewardedivan.github.io">
			<GithubIcon />
		</Button>
	</div>
</div>

<div class="flex min-h-screen flex-col py-10">
	<div class="mx-5 flex flex-grow flex-col items-center justify-center gap-5">
		<div class="w-fit flex-col rounded-lg bg-base-700 p-12">
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

				<span class="flex flex-row items-center gap-1">
					developer/software engineer from <BulgarianFlag className="rounded" /> bulgaria
				</span>
			</div>
		</div>

		<div class="w-fit rounded-lg bg-base-700 p-8">
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

<footer class="bg-base-400 p-10">
	<nav>
		<h6>LEGAL DISCLAIMER</h6>
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
