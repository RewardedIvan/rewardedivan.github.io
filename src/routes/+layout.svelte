<script lang="ts">
	import { onMount, type Snippet } from 'svelte';
	import '../app.css';
	import '@fontsource-variable/jetbrains-mono';
	import type { LayoutProps } from './$types';
	import { browser } from '$app/environment';

	let { children, data }: LayoutProps = $props();

	let bg = $state('');

	if (browser) {
		if (localStorage.getItem('ivanbg') == null) {
			localStorage.setItem('ivanbg', data.bg[Math.floor(Math.random() * data.bg.length)]);
		}

		bg = localStorage.getItem('ivanbg')!;
	}

	onMount(() => {
		if (browser && !document.querySelector('#oneko')) {
			// pretty much stolen from https://github.com/Vendicated/Vencord/blob/main/src/plugins/oneko/index.ts
			fetch(
				'https://raw.githubusercontent.com/adryd325/oneko.js/c4ee66353b11a44e4a5b7e914a81f8d33111555e/oneko.js'
			)
				.then((x) => x.text())
				.then((s) =>
					s
						.replace(
							'./oneko.gif',
							'https://raw.githubusercontent.com/adryd325/oneko.js/14bab15a755d0e35cd4ae19c931d96d306f99f42/oneko.gif'
						)
						.replace('(isReducedMotion)', '(false)')
				)
				.then(eval);
		}
	});
</script>

<div class="min-h-dvh bg-fixed" style:background-image="url(/bg/{bg})">
	<div
		class="bg-base/80 dark:bg-base/50 flex min-h-dvh flex-col gap-8 px-8 py-8 backdrop-blur-sm lg:px-16"
	>
		{@render children?.()}
	</div>
</div>
