<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface Props {
		rippleDuration?: number;
		wrapperClass?: string;
		copy?: string;
		href?: string;
	}

	let {
		children,
		rippleDuration = 600,
		class: className,
		wrapperClass,
		copy,
		href,
		...restProps
	}: Props & HTMLButtonAttributes = $props();

	let ripples = $state<Array<{ id: number; x: number; y: number; size: number }>>([]);
	let buttonElement: HTMLButtonElement | null = $state(null);

	function createRipple(event: MouseEvent) {
		const button = buttonElement!;
		const rect = button.getBoundingClientRect();

		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;

		const size = Math.max(button.clientWidth, button.clientHeight) * 2;

		const newRipple = { id: Math.random(), x, y, size };
		ripples = [...ripples, newRipple];

		setTimeout(() => {
			ripples = ripples.filter((r) => r.id !== newRipple.id);
		}, rippleDuration);
	}

	async function onClick(event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) {
		if (copy) {
			await navigator.clipboard.writeText(copy);
		}

		if (href) {
			window.open(href, '_blank');
		}

		restProps.onclick?.(event);
	}
</script>

<button
	bind:this={buttonElement}
	class="relative select-none overflow-hidden rounded-md bg-background-800 transition-all duration-200 ease-in-out {className}"
	onmousedown={createRipple}
	onclick={onClick}
	{...restProps}
>
	<span class="relative z-10 flex flex-row items-center justify-center p-1 {wrapperClass}">
		{@render children?.()}
	</span>

	<div class="pointer-events-none absolute inset-0 overflow-hidden">
		{#each ripples as ripple (ripple.id)}
			<span
				class="animate-ripple absolute -translate-x-1/2 -translate-y-1/2 transform rounded-full opacity-0"
				style="
					left: {ripple.x}px; 
					top: {ripple.y}px; 
					width: {ripple.size}px; 
					height: {ripple.size}px; 
					background-color: #fff;
					animation-duration: {rippleDuration}ms;
				"
			></span>
		{/each}
	</div>
</button>

<style>
	@keyframes ripple {
		0% {
			transform: translate(-50%, -50%) scale(0);
			opacity: 0.5;
		}
		100% {
			transform: translate(-50%, -50%) scale(1);
			opacity: 0;
		}
	}

	.animate-ripple {
		animation: ripple forwards cubic-bezier(0.22, 1, 0.36, 1);
	}
</style>
