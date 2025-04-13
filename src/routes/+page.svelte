<script lang="ts">
	import { slide } from 'svelte/transition';
	import { expoInOut } from 'svelte/easing';
	import { tools } from '$lib/tools';
	import { blogs } from './blogs';
	import Button from './Button.svelte';

	import ClipboardIcon from '$lib/icons/material/ClipboardIcon.svelte';
	import KeyIcon from '$lib/icons/material/KeyIcon.svelte';
	import DiscordIcon from '$lib/icons/brand/DiscordIcon.svelte';
	import XIcon from '$lib/icons/brand/XIcon.svelte';
	import GithubIcon from '$lib/icons/brand/GithubIcon.svelte';
	import BulgarianFlag from '$lib/icons/flag/BulgarianFlag.svelte';

	let copied = $state(false);
	$effect(() => {
		if (copied == true) {
			setTimeout(() => (copied = false), 2000);
		}
	});
</script>

{#if copied}
	<div
		class="absolute right-0 bottom-0 m-3"
		transition:slide={{ axis: 'x', easing: expoInOut, duration: 500 }}
	>
		<div role="alert" class="bg-background-800 flex flex-row gap-2 rounded-lg p-3">
			<ClipboardIcon fill="#ffffff" />
			<span>Copied!</span>
		</div>
	</div>
{/if}

<div
	class="bg-background-900 shadow-background-950 sticky top-0 flex flex-row justify-between rounded-b-lg p-4 shadow-md"
>
	<div class="flex flex-row items-center gap-2">
		{#snippet txt(str: string)}
			<span
				class="max-w-0 -translate-x-2 opacity-0 transition-all group-hover:static group-hover:ml-1 group-hover:max-w-40 group-hover:translate-x-0 group-hover:opacity-100"
			>
				{str}
			</span>
		{/snippet}

		<Button class="group text-xl" copy="int4_t" onclick={() => (copied = true)}>
			<DiscordIcon />
			{@render txt('discord')}
		</Button>

		<Button class="group text-xl" href="https://x.com/uint4_t">
			<XIcon />
			{@render txt('twitter')}
		</Button>

		<Button class="group text-xl" href="https://github.com/RewardedIvan">
			<GithubIcon />
			{@render txt('github')}
		</Button>

		<Button
			class="group text-xl"
			copy="A16B98815D0563295CB2795FA16F1618AADEFEDF"
			onclick={() => (copied = true)}
		>
			<KeyIcon />
			{@render txt('pgp')}
		</Button>
	</div>

	<div class="flex flex-row items-center gap-2">
		<Button href="https://github.com/RewardedIvan/rewardedivan.github.io" class="rounded-full p-1">
			<GithubIcon />
		</Button>
	</div>
</div>

<div class="grid min-h-screen gap-24 p-10 2xl:grid-cols-3">
	<div></div>
	<div class="mx-5 flex grow flex-col items-center justify-center gap-5">
		<div class="bg-background-900 w-fit flex-col rounded-lg p-6">
			<div class="flex flex-row items-end justify-between gap-16">
				<div class="flex flex-row items-end">
					<h1 class="text-5xl font-bold">int4_t</h1>
					<span class="text-sm text-indigo-500">aka. rewardedivan</span>
				</div>

				<img
					src="https://avatars.githubusercontent.com/u/67065165"
					class="mb-3 ml-3 max-w-16 rounded-xs shadow-2xl"
					alt="pfp"
				/>
			</div>

			<span class="flex flex-row items-center gap-1">
				developer/software engineer from <BulgarianFlag className="rounded-sm" /> bulgaria
			</span>
		</div>

		<div class="bg-background-900 flex w-fit flex-col gap-1 rounded-lg p-8">
			<span class="mb-2 text-center text-lg font-bold">toolbox</span>

			{#each tools as sg}
				<div class="flex w-full flex-row items-center justify-between gap-16">
					<div class="flex flex-row items-center justify-start gap-2">
						{#each sg.items as sk}
							<span class="flex flex-row items-center gap-1">
								<img src="/icons/tools/{!sk.icon ? sk.name : sk.icon}.svg" alt={sk.name} />
								{sk.name}
							</span>
						{/each}
					</div>

					<span class="text-indigo-500">{sg.name}</span>
				</div>
			{/each}
		</div>
	</div>
	<div
		class="bg-background-900 flex h-max w-full flex-col self-start justify-self-end rounded-lg p-3 2xl:w-max"
	>
		<span class="text-xl font-bold">blogs</span>

		{#each blogs as blog}
			<span class="flex flex-row justify-between gap-14">
				<a href={`/blogs/${blog.urlTitle}`} class="text-indigo-500 underline underline-offset-1">
					{blog.title}
				</a>
				<span class="text-gray-400">{blog.date}</span>
			</span>
		{/each}
	</div>
</div>

<footer class="bg-background-900 p-10">
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
