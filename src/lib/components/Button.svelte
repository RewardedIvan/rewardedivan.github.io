<script lang="ts">
	import { goto } from '$app/navigation';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	interface Props {
		rippleDuration?: number;
		wrapperClass?: string;
		copy?: string;
		onClick?: (event: MouseEvent) => void;
		href?: string;
		popover_id?: string;
		popover_header?: Snippet<[]>;
		popover_title?: unknown;
		popover_content?: string;
	}

	let {
		children,
		rippleDuration = 600,
		class: className,
		wrapperClass,
		copy,
		href,
		popover_id,
		popover_header,
		popover_title,
		popover_content,
		...restProps
	}: Props & HTMLButtonAttributes = $props();

	let ripples = $state<Array<{ id: number; x: number; y: number; size: number }>>([]);
	let buttonElement: HTMLButtonElement | null = $state(null);
	let copyInput: HTMLInputElement | null = $state(null);

	let final_popover_content = popover_content ?? copy;

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
			try {
				await navigator.clipboard.writeText(copy);
			} catch (error) {
				console.error(error);
			}
		}

		restProps.onClick?.(event);
	}
</script>

<noscript>
	{#if final_popover_content}
		<div
			popover
			class="backdrop:bg-surface-100 dialog-anim text-text fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-transparent p-2 backdrop:opacity-40 backdrop:backdrop-blur-sm"
			id={popover_id}
		>
			<div class="bg-surface-200 text-text min-w-[280px] rounded-[28px] border-none p-[24px]">
				{@render popover_header?.()}

				<div class="flex items-center gap-2">
					{popover_title}

					<textarea
						class="bg-surface-100 resize-none border-2 border-none p-1 outline-none w-fit field-sizing-content"
						readonly="readonly"
						rows="1">{final_popover_content}</textarea
					>
				</div>
			</div>
		</div>
	{/if}
</noscript>

<button
	bind:this={buttonElement}
	class="bg-surface-100 hover:bg-surface-200 relative cursor-pointer overflow-hidden rounded-md transition-all duration-200 ease-in-out select-none {className}"
	onmousedown={createRipple}
	onclick={(e) => onClick(e)}
	popovertarget={popover_id}
	{...restProps}
>
	<a class="relative flex flex-row items-center justify-center p-1 {wrapperClass}" {href}>
		{@render children?.()}
	</a>

	<div class="pointer-events-none absolute inset-0 overflow-hidden">
		{#each ripples as ripple (ripple.id)}
			<span
				class="animate-ripple absolute rounded-full opacity-0"
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
<input
	type="text"
	class="absolute top-0 left-0 -translate-x-[200vw]"
	value={copy}
	bind:this={copyInput}
/>

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
