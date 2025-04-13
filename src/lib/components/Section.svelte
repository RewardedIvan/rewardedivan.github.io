<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		title: string;
		id: string;
		children?: Snippet;
	}

	let { title, id, children }: Props = $props();
</script>

<section>
	<div class="flex flex-row items-center gap-2">
		<a href="#{id}" class="text-2xl text-indigo-500">#</a>
		<h1 class="text-2xl" {id}>{title}</h1>
	</div>

	{@render children?.()}
</section>
