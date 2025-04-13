<script lang="ts">
	interface Props {
		size?: string;
	}

	let { size = '1.5em' }: Props = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	viewBox="0 -960 960 960"
	class="fill-black dark:fill-white"
	><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" /></svg
>
