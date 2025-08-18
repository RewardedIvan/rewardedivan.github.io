<script lang="ts">
	import type { Snippet } from 'svelte';
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
</script>

<div class="min-h-dvh bg-fixed" style:background-image="url(/bg/{bg})">
	<div
		class="bg-base/80 dark:bg-base/50 flex min-h-dvh flex-col gap-8 px-8 py-8 backdrop-blur-sm lg:px-16"
	>
		{@render children?.()}
	</div>
</div>
