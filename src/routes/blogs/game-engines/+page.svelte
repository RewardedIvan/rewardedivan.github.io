<script lang="ts">
	import Section from '$lib/components/Section.svelte';
</script>

{#snippet lrm()}
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae eros dolor. Vivamus
		bibendum bibendum tellus a accumsan. Quisque eu nisi non orci sagittis lacinia. Aliquam erat
		volutpat. Fusce elementum ornare vestibulum. Maecenas vel nulla vel eros varius varius vel ut
		velit. Fusce pulvinar gravida urna. Maecenas sed aliquet quam. Mauris viverra sed magna quis
		tempus. Nunc sit amet est id nisl elementum ornare vitae at lorem. Vestibulum eget nulla
		consequat, euismod leo molestie, tempus eros. Morbi commodo magna nulla, quis tempus neque
		eleifend in. Suspendisse interdum sed erat eu consequat. Donec rutrum nunc sed bibendum
		interdum. Donec posuere felis nibh, eu consequat lacus dapibus congue. Cras dictum imperdiet
		nibh, at faucibus dolor dictum sed. In vehicula consequat velit sit amet commodo. Vestibulum
		dictum ornare nisi, sed luctus est vulputate ut. Donec consequat congue auctor. Cras sed felis
		augue. Quisque pharetra justo pulvinar ligula egestas tempus. Pellentesque in vehicula odio,
		eget placerat mauris.
	</p>
{/snippet}

<Section title="insert yap" id="insert-yap">
	{#each new Array(50) as _}
		{@render lrm()}
	{/each}
</Section>

<Section title="h" id="h">
	{#each new Array(50) as _}
		{@render lrm()}
	{/each}
</Section>
