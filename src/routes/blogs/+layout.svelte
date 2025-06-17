<script lang="ts">
	import BackArrow from '$lib/icons/material/BackArrow.svelte';
	import type { Snippet } from 'svelte';
	import Button from '$lib/components/Button.svelte';

	interface Props {
		children?: Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="xs:px-2 flex flex-row items-start gap-8 py-4 sm:px-8 md:px-16 lg:px-28 2xl:px-48">
	<Button href="/" class="mr-auto">
		<BackArrow />
	</Button>

	<div class="flex w-full flex-col gap-12 leading-7">
		{@render children?.()}
	</div>

	<!-- TODO: comment section and dislikes on serverless db... maybe? -->
</div>
