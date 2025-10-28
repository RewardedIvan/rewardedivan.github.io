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
	fill="none"
	viewBox="0 0 56 56"
	class="p-0.5"
	><path
		fill="#fff"
		d="M11.676 0 0 44.166 43.577 56l11.676-44.166zm20.409 35.827-12.177-3.308 3.264-12.342 12.182 3.308z"
	/></svg
>
