<script lang="ts">
	import { slide } from 'svelte/transition';
	import { expoInOut } from 'svelte/easing';
	import { tools } from '$lib/tools';
	import { blogs } from './blogs';
	import Relative from './Relative.svelte';
	import Clock from './Clock.svelte';
	import Button from '$lib/components/Button.svelte';
	import type { PageProps } from './$types';

	import ClipboardIcon from '$lib/icons/material/ClipboardIcon.svelte';
	import KeyIcon from '$lib/icons/material/KeyIcon.svelte';
	import DiscordIcon from '$lib/icons/brand/DiscordIcon.svelte';
	import XIcon from '$lib/icons/brand/XIcon.svelte';
	import GithubIcon from '$lib/icons/brand/GithubIcon.svelte';
	import SteamIcon from '$lib/icons/brand/SteamIcon.svelte';
	import Foobar2000 from '$lib/icons/brand/Foobar2000.svelte';
	import AniListIcon from '$lib/icons/brand/AniListIcon.svelte';
	import OsuIcon from '$lib/icons/brand/OsuIcon.svelte';
	import VRChatIcon from '$lib/icons/brand/VRChatIcon.svelte';
	import RobloxIcon from '$lib/icons/brand/RobloxIcon.svelte';

	let copied = $state(false);
	$effect(() => {
		if (copied == true) {
			setTimeout(() => (copied = false), 2000);
		}
	});

	let { data }: PageProps = $props();

	function mulberry32(seed: number) {
		return function () {
			seed |= 0;
			seed = (seed + 0x6d2b79f5) | 0;
			let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
			t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
			return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
		};
	}

	const rain = (() => {
		const rng = mulberry32(12);

		let arr = [];
		let sum = 0;
		while (sum < 100) {
			const r = Math.floor(rng() * 5) + 2;
			sum += r;
			arr.push([Math.floor(rng() * 5), Math.floor(rng() * 100)]);
		}
		return arr;
	})();

	var lastRipple: [number, number] | null = null;
	function onBodyClick(e: MouseEvent) {
		if (lastRipple) {
			// matematika.
			const l = document.body.appendChild(document.createElement('div'));
			l.className =
				'line pointer-events-none absolute h-1 rounded-full bg-white/20 origin-top-left';
			const padding = 10;
			const x1 = lastRipple[0];
			const y1 = lastRipple[1];
			const x2 = e.layerX;
			const y2 = e.layerY;
			const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
			const angle = (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;
			const dx = (x2 - x1) / length;
			const dy = (y2 - y1) / length;
			l.style.left = x1 + dx * padding + 'px';
			l.style.top = y1 + dy * padding + 'px';
			l.style.width = length - padding * 2 + 'px';
			l.style.transform = `rotate(${angle}deg)`;
			setTimeout(() => l.remove(), 1000);
		}

		const d = document.body.appendChild(document.createElement('div'));
		d.className =
			'ripple pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 outline-1 outline-white';
		d.style.left = `${e.layerX}px`;
		d.style.top = `${e.layerY}px`;
		lastRipple = [e.layerX, e.layerY];
		setTimeout(() => d.remove(), 1000);
	}
</script>

<svelte:body onmousedown={onBodyClick} />

<div class="pointer-events-none fixed inset-0 z-[-9999] overflow-hidden">
	{#each rain as [r5, r], i}
		<div
			class="drop pointer-events-none absolute h-8 w-0.5 -rotate-12 rounded-2xl bg-gradient-to-b from-transparent from-30% to-white"
			style:left="{i * (100 / rain.length)}%"
			style:animation-delay="0.{r}s"
			style:animation-duration="0.5{r}s"
		></div>
	{/each}
</div>

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

			<Button class="group text-xl" copy="int4_t" onClick={() => (copied = true)}>
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

			<Button class="group text-xl" href="https://osu.ppy.sh/users/20680063">
				<OsuIcon />
				{@render txt('osu')}
			</Button>

			<Button class="group text-xl" copy="int4_t" onClick={() => (copied = true)}>
				<VRChatIcon />
				{@render txt('vrchat')}
			</Button>

			<Button class="group text-xl" href="https://roblox.com/users/4317632405/profile">
				<RobloxIcon />
				{@render txt('roblox')}
			</Button>

			<Button class="group text-xl" href="https://anilist.co/user/int4/">
				<AniListIcon />
				{@render txt('anilist')}
			</Button>

			<Button
				class="group text-xl"
				copy="A16B98815D0563295CB2795FA16F1618AADEFEDF"
				onClick={() => (copied = true)}
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

	<div>
		<span class="text-xl font-bold">very cool people</span>
		<p class="text-muted text-sm">
			i hope they don't hate me after i added their 88x31s without their permission :sob:
		</p>
		<div class="flex flex-row flex-wrap items-center gap-[2px] sm:w-[600px] md:w-[720px]">
			<a href="https://int4.cc">
				<img
					width="88"
					height="31"
					style="image-rendering: pixelated;"
					src="/88x31.png"
					alt="int4_t 88x31"
				/>
			</a>
			<a href="https://n3tael.eu.org">
				<img
					width="88"
					height="31"
					style="image-rendering: pixelated;"
					src="https://n3tael.eu.org/assets/buttons/n3tael.gif"
					alt="n3tael"
				/>
			</a>
			<a href="https://lumentae.dev">
				<img src="https://lumentae.dev/lumentae.gif" alt="lumentae" title="lumentae" />
			</a>
			<a href="https://vendicated.dev/">
				<img width="88" height="31" src="/88x31/vendicated.gif" alt="Vendicated" />
			</a>
			<a href="https://kibty.town/">
				<img src="https://kibty.town/files/img/buttons/kibty.town-badge.gif" alt="kibty town" />
			</a>
			<a href="https://ezri.pet">
				<img src="https://ezri.pet/assets/img/badges/ezri.png" alt="ezri" />
			</a>
			<a href="https://aubrey.rs" rel="noopener noreferrer" target="_blank">
				<img alt="aubrey" height="31" width="88" src="/88x31/aubrey.webp" />
			</a>
			<a href="https://floppa.systems/">
				<img height="31" width="88" src="https://floppa.systems/chxry.gif" alt="cherry" />
			</a>
			<a href="https://lily.pet/">
				<img src="/88x31/lily.png" alt="lily.pet, cat! (points to cat)" />
			</a>

			<a href="steam://launch/70"
				><img width="88" height="31" src="/88x31/hl.gif" alt="half-life" /></a
			>
			<a href="https://foobar2000.org/">
				<img width="88" height="31" src="/88x31/foobar2000.png" alt="foobar2000" />
			</a>
			<a href="https://www.mozilla.org/en-US/firefox/">
				<img width="88" height="31" src="/88x31/firefox4.gif" alt="firefox" />
			</a>
			<a href="https://neovim.io/"><img src="/88x31/neovim.gif" alt="made with neovim" /></a>
			<a href="https://linux.org/"><img src="/88x31/linuxnow2.gif" alt="linux now! (2.5)" /></a>
			<a href="https://debian.org/">
				<img
					src="/88x31/debian.gif"
					alt="Powered by debian"
					title="actually idk what is powered by debian LMAO"
				/>
			</a>
			<a href="javascript:alert(1)"
				><img
					src="/88x31/js-warning.png"
					alt="Warning: Page contains JavaScript!"
					title="the buttons prolly wont work without javascript :skull:"
				/></a
			>
			<a href="https://en.wikipedia.org/wiki/Embrace,_extend,_and_extinguish"
				><img src="/88x31/hatems.gif" alt="i hate microsoft" /></a
			>
			<a href="https://hackclub.com">
				<img src="/88x31/hackclub.png" alt="hackclub" title="hackclub" />
			</a>
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

<style>
	@keyframes drop {
		0% {
			bottom: 100%;
			transform: translateX(0px);
			opacity: 1;
		}
		75% {
			opacity: 0.5;
		}
		100% {
			bottom: -10%;
			transform: translateX(250px);
			opacity: 0;
		}
	}

	@keyframes ripple {
		0% {
			width: 0rem;
			height: 0rem;
		}
		100% {
			width: 4rem;
			height: 4rem;
			opacity: 0;
		}
	}

	@keyframes line {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}

	@keyframes appear {
		0% {
			opacity: 0;
		}
		99% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	.drop {
		opacity: 0;
		animation:
			appear 1s steps(1, end) forwards,
			drop 0.5s linear 1s infinite;
	}

	:global(.ripple) {
		animation: ripple 0.4s cubic-bezier(0.25, 1, 0.5, 1) forwards;
	}

	:global(.line) {
		animation: line 1s cubic-bezier(0.55, 0, 1, 0.45) forwards;
	}
</style>
