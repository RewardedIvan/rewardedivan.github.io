<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { TZDate } from '@date-fns/tz';
	import { format } from 'date-fns';

	interface Props {
		tz?: string;
	}

	let { tz }: Props = $props();

	let date = $state(new Date());

	onMount(() => {
		if (browser) {
			const intv = setInterval(() => {
				date = new TZDate(new Date(), tz);
			}, 10000);

			return () => clearInterval(intv);
		}
	});
</script>

{format(date, 'HH:mm a')}
