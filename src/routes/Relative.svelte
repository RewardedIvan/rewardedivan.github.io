<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { intervalToDuration, setYear, getYear, subYears, addYears, compareAsc } from 'date-fns';

	interface Props {
		from: Date;
		updateRate?: number;
	}

	let { from, updateRate }: Props = $props();

	let diff = $state(intervalToDuration({ start: from, end: new Date() }));
	let progress = $state(0);

	function update() {
		const now = new Date();

		diff = intervalToDuration({ start: from, end: now });

		const thisYear = setYear(from, getYear(now));
		const past = now >= thisYear;

		const [start, end] = past
			? [thisYear, addYears(thisYear, 1)]
			: [subYears(thisYear, 1), thisYear];

		progress = (now.getTime() - start.getTime()) / (end.getTime() - start.getTime());
	}

	update();

	onMount(() => {
		if (updateRate && browser) {
			const intv = setInterval(update, updateRate);
			return () => clearInterval(intv);
		}
	});
</script>

{diff.years}{progress.toFixed(5).substring(1)}
