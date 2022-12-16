<script>
	export let font = 'font-sligoil';
	export let selection = 'selection:bg-black selection:text-lime-300';
	export let proseColor = 'prose-a:text-violet-700';
</script>

<div
	class="px-2 w-full flex flex-col my-2 lg:mb-4 lg:prose-lg lg:px-4 xl:px-6 {font} prose-sm xl:prose-xl prose-a:underline  {proseColor} {selection}"
>
	<slot />
</div>
