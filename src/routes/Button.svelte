<script lang="ts">
	export let href: string | null = null;
	export let copy: string | null = null;
	export let onclick: () => void = () => {};

	let className = '';
	export { className as class };

	let layer: HTMLDivElement;
	let clientWidth: number;
	let clientHeight: number;
	let mouseOffsetX = 0;
	let mouseOffsetY = 0;

	function click() {
		if (copy) {
			navigator.clipboard.writeText(copy);
		}

		if (href) {
			window.location.href = href;
		}

		onclick();
	}

	function mouseMove(e: MouseEvent) {
		mouseOffsetX = e.offsetX;
		mouseOffsetY = e.offsetY;
	}

	let anims: Animation[] = [];
	function mouseDown() {
		anims.forEach((e) => e.cancel());
		anims = [];

		layer.style.left = mouseOffsetX + 'px';
		layer.style.top = mouseOffsetY + 'px';

		anims.push(
			layer.animate(
				[
					{ transform: `scale(0)` },
					{ transform: `scale(${((clientHeight / 10) * (clientWidth / 10)) / 2})` }
				],
				{
					duration: 400,
					easing: 'cubic-bezier(0, 0.55, 0.45, 1)',
					endDelay: 300
				}
			)
		);

		anims.push(
			layer.animate([{ opacity: `100%` }, { opacity: `0%` }], {
				delay: 300,
				duration: 100,
				easing: 'cubic-bezier(0, 0.55, 0.45, 1)'
			})
		);
	}
</script>

<div class="relative overflow-clip rounded-md">
	<div class="absolute right-0 top-0 h-full w-full bg-base-700" />
	<div
		class="pointer-events-none absolute right-0 top-0 z-0 h-[10px] w-[10px] scale-0 rounded-md bg-base-900 bg-opacity-80"
		bind:this={layer}
	/>

	<button
		on:click={click}
		on:mousemove={mouseMove}
		on:mousedown={mouseDown}
		bind:clientWidth
		bind:clientHeight
		class="flex flex-row items-center gap-3 bg-transparent p-2 {className}"
	>
		<slot />
	</button>
</div>
