<script lang="ts">
	import type { Snippet } from 'svelte';
	import '../app.css';
	import '@fontsource/jetbrains-mono/400-italic.css';

	interface Props {
		children?: Snippet;
	}

	let { children }: Props = $props();
</script>

{@render children?.()}
