<script>
	// component props
	export let font = 'font-sligoil';
	export let buttonColor = 'bg-black text-lime-300 hover:bg-lime-400 hover:text-black';
	export let selection = 'selection:bg-black selection:text-lime-300';

	// create alphabet list
	const alpha = Array.from(Array(26)).map((e, i) => i + 65);
	const alphabet = alpha.map((x) => String.fromCharCode(x));

	let selectedLetter = 'A';

	/**
	 * @param {string} character
	 */
	function selectLetter(character) {
		selectedLetter = character;
	}
</script>

<div class="my-2 p-2 lg:px-4 xl:px-6 2xl:px-8 space-y-4 {selection}">
	<div class="grid grid-cols-13 xl:grid-cols-26 gap-2">
		{#each alphabet as letter}
			<button
				on:click={() => selectLetter(letter)}
				class="{buttonColor} text-lg {font} grid place-items-center border-black border-2 rounded-md"
			>
				{letter}
			</button>
		{/each}
	</div>

	<section class="p-2 w-full lg:p-4 xl:p-5 border-2 {font} border-black rounded">
		<div class="prose-sm md:prose xl:prose-lg">
			<h1>{selectedLetter}</h1>
		</div>
	</section>
</div>
