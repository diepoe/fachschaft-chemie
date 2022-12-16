<script>
	export let font = 'font-sligoil';
	export let selection = 'selection:bg-black selection:text-lime-300';
	export let proseColor = 'prose-lime';
</script>

<div
	class="px-2 w-full flex flex-col my-2 lg:mb-4 lg:prose-lg lg:px-4 xl:px-6 {font} prose-sm xl:prose-xl {proseColor} {selection}"
>
	<slot />
</div>
