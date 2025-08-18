<script lang="ts">
	import type { Snippet } from 'svelte';
	import '../app.css';
	import '@fontsource-variable/jetbrains-mono';

	interface Props {
		children?: Snippet;
	}

	let { children }: Props = $props();
</script>

{@render children?.()}
