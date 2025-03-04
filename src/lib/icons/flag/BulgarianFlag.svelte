<script lang="ts">
	interface Props {
		size?: string;
		className?: string;
	}

	let { size = "1em", className = "" }: Props = $props();
</script>

<svg width={size} height={size} class={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3"><rect width="5" height="3" fill="#fff"/><rect width="5" height="2" y="1" fill="#00966E"/><rect width="5" height="1" y="2" fill="#D62612"/></svg>
