<script lang="ts">
	import { slide } from 'svelte/transition';
	import { expoInOut } from 'svelte/easing';
	import { tools } from '$lib/tools';
	import { blogs } from './blogs';
	import Relative from './Relative.svelte';
	import Button from '$lib/components/Button.svelte';
	import type { PageProps } from './$types';

	import ClipboardIcon from '$lib/icons/material/ClipboardIcon.svelte';
	import KeyIcon from '$lib/icons/material/KeyIcon.svelte';
	import DiscordIcon from '$lib/icons/brand/DiscordIcon.svelte';
	import XIcon from '$lib/icons/brand/XIcon.svelte';
	import GithubIcon from '$lib/icons/brand/GithubIcon.svelte';
	import SteamIcon from '$lib/icons/brand/SteamIcon.svelte';
	import Foobar2000 from '$lib/icons/brand/Foobar2000.svelte';
	import Clock from './Clock.svelte';
	import AniListIcon from '$lib/icons/brand/AniListIcon.svelte';

	let copied = $state(false);
	$effect(() => {
		if (copied == true) {
			setTimeout(() => (copied = false), 2000);
		}
	});

	let { data }: PageProps = $props();
</script>

{#if copied}
	<div
		class="absolute right-0 bottom-0 m-3"
		transition:slide={{ axis: 'x', easing: expoInOut, duration: 500 }}
	>
		<div role="alert" class="bg-surface-100 flex flex-row gap-2 rounded-lg p-3">
			<ClipboardIcon fill="#ffffff" />
			<span>Copied!</span>
		</div>
	</div>
{/if}

<div class="flex flex-col gap-8 px-8 py-8 lg:px-16">
	<div>
		<div class="flex flex-row gap-2">
			<img
				src="https://avatars.githubusercontent.com/u/67065165"
				class="max-w-20 rounded-xs shadow-2xl"
				alt="pfp"
			/>

			<div class="flex flex-col justify-between">
				<h1 class="text-5xl font-bold">int4_t</h1>
				<p>
					aka. <span class="text-indigo-500">rewardedivan</span> or
					<span class="text-indigo-500">ivan</span>
				</p>
			</div>
		</div>
		<div class="h-4"></div>

		<p>developer/software engineer from 🇧🇬 bulgaria</p>
		<p>
			<Relative from={new Date('2011 jul 18')} />yo
			<span class="text-blue-400" style="-webkit-text-stroke-width: 0.5px;">&male;</span>
		</p>
		<p class="flex flex-row flex-wrap items-center gap-1">
			dualbooting <img src="/icons/me/Windows.svg" alt="windows" />
			<img src="/icons/me/Arch.svg" alt="arch linux" /> on my laptop and desktop
		</p>
		<p class="flex flex-row flex-wrap items-center gap-1">
			running <img src="/icons/me/Debian.svg" alt="debian" /> on my 2 home servers
		</p>
		<p>xbox choose my old username</p>
		<p>free software advocate</p>
		<p class="flex flex-row items-center gap-1">
			i download my music <Foobar2000 />
		</p>
		<p>the time for me rn is <Clock tz="Europe/Sofia" /></p>
	</div>

	<div class="flex w-fit flex-col">
		<span class="text-xl font-bold">toolbox</span>

		<div>
			{#each tools as tg, i}
				<span class="text-left text-indigo-500">{tg.name}</span>
				<div class="ml-4 flex flex-wrap gap-2">
					{#each tg.items as tk}
						<div class="flex min-w-max flex-row items-center gap-1">
							<img src="/icons/tools/{!tk.icon ? tk.name : tk.icon}.svg" alt={tk.name} />
							<span class="whitespace-nowrap">{tk.name}</span>
						</div>
					{/each}
				</div>
			{/each}
		</div>
	</div>

	<div class="flex flex-col">
		<span class="text-xl font-bold">blogs</span>

		{#each blogs as blog}
			<span class="flex flex-row gap-2">
				<span>{blog.date}</span>
				<a href={`/blogs/${blog.urlTitle}`} class="text-indigo-500 underline underline-offset-1">
					{blog.title}
				</a>
			</span>
		{/each}
	</div>

	<div>
		<span class="text-xl font-bold">socials</span>
		<div class="flex flex-row flex-wrap items-center gap-2">
			{#snippet txt(str: string)}
				<span class="ml-1 max-w-40">
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

			<Button class="group text-xl" href="https://steamcommunity.com/id/int4_t">
				<SteamIcon />
				{@render txt('steam')}
			</Button>

			<Button class="group text-xl" href="https://anilist.co/user/int4/">
				<AniListIcon />
				{@render txt('anilist')}
			</Button>

			<Button
				class="group text-xl"
				copy="A16B98815D0563295CB2795FA16F1618AADEFEDF"
				onclick={() => (copied = true)}
			>
				<KeyIcon />
				{@render txt('pgp')}
			</Button>

			<Button href="https://github.com/RewardedIvan/rewardedivan.github.io" class="group text-xl">
				<GithubIcon />
				{@render txt('source')}
			</Button>
		</div>
	</div>

	<footer class="mt-8">
		<nav>
			<h6>LEGAL DISCLAIMER</h6>
			<span>
				All product names, logos, brands, trademarks, and registered trademarks are the property of
				their respective owners. All company, product, and service names used on this website are
				for identification purposes only. My use of these names, trademarks, and brands does not
				imply endorsement. I am not affiliated with, endorsed by, or sponsored by any of the
				companies whose logos and names appear on this site. The icons and names are used solely for
				reference purposes to provide information about the respective companies. If any trademark
				owner has any concerns or objections to the use of their trademark, please contact me at <kbd
					class="kbd kbd-xs">rewardedivan&#64;gmail&#46;com</kbd
				>, and I will address the issue promptly.
			</span>
		</nav>
	</footer>
</div>
