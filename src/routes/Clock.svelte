<script lang="ts">
	import { onMount } from 'svelte';
	import { formatInTimeZone } from 'date-fns-tz';

	interface Props {
		tz?: string;
	}

	let { tz }: Props = $props();

	let date = $state(new Date());
	let timezone = tz ?? Intl.DateTimeFormat().resolvedOptions().timeZone;

	onMount(() => {
		const intv = setInterval(() => {
			date = new Date();
		}, 10_000);

		return () => clearInterval(intv);
	});
</script>

{formatInTimeZone(date, timezone, 'hh:mm a')}

