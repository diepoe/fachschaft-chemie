<script>
	import Katex from '$lib/components/helper/Katex.svelte';

	// component props
	export let font = 'font-sligoil';
	export let buttonColor = 'bg-black text-lime-300 hover:bg-lime-400 hover:text-black';
	export let selection = 'selection:bg-black selection:text-lime-300';

	//  alphabet list
	let alphabet = [
		{
			character: 'A',
			title: 'Autoöl',
			description: 'Moderne Treibstoffe strotzen nur so vor Chemie!',
			formula: ''
		},
		{ character: 'B', title: 'Autoöl', description: 'some description', formula: '' },
		{ character: 'C', title: 'Computerplatine', description: '🤖', formula: '' },
		{ character: 'D', title: 'Autoöl', description: 'some description', formula: '' },
		{ character: 'E', title: 'Autoöl', description: 'some description', formula: '' },
		{ character: 'F', title: 'Fluorid', description: 'In der Zahnpasta ist ein chemischer Stoff namens Fluorid enthalten.', formula: '' },
		{ character: 'G', title: 'Autoöl', description: 'some description', formula: '' },
		{ character: 'H', title: 'Autoöl', description: 'some description', formula: '' },
		{ character: 'I', title: 'Autoöl', description: 'some description', formula: '' },
		{ character: 'J', title: 'Autoöl', description: 'some description', formula: '' },
		{ character: 'K', title: 'Kernspaltung', description: 'Gewinnung elektrischen Stroms', formula: '' },
		{ character: 'L', title: 'Autoöl', description: 'some description', formula: '' },
		{ character: 'M', title: 'Autoöl', description: 'some description', formula: '' },
		{ character: 'N', title: 'Autoöl', description: 'some description', formula: '' },
		{ character: 'O', title: 'Autoöl', description: 'some description', formula: '' },
		{
			character: 'P',
			title: 'Photosynthese',
			description:
				'Die Photosynthese ist einer der grundlegenden Prozesse, welche das Leben auf unserem blauen Planeten erst möglich machen! Durch diesen gewinnen Pflanzen unter Licht- und Wasserzufuhr beispielsweise Glucose und wandeln dabei Kohlenstoffdioxid in Sauerstoff um, womit für Fauna und Menschen die Versorgung mit Atemluft aufrecht erhalten bleibt.',
			formula: '6CO_{2} + 12H_{2}O \\rarr C_6H_{12}O_6 + 6O_2 + 6 H_2O'
		},
		{ character: 'Q', title: 'Autoöl', description: 'some description', formula: '' },
		{ character: 'R', title: 'Redoxreaktionen', description: 'some description', formula: '' },
		{ character: 'S', title: 'Autoöl', description: 'some description', formula: '' },
		{
			character: 'T',
			title: 'Treibhausgase',
			description:
				'Treibhausgase wie Kohlenstoffdioxid sorgen für eine Verschlimmerung des Klimawandels. Die Wissenschaft ist darum bemüht, für die Zukunft Prozesse, welche große Mengen an Treibhausgasen ausstoßen, mit nachhaltigeren Alternativen zu ersetzen.',
			formula: ''
		},
		{ character: 'U', title: 'Autoöl', description: 'some description', formula: '' },
		{ character: 'V', title: 'Autoöl', description: 'some description', formula: '' },
		{ character: 'W', title: 'Autoöl', description: 'some description', formula: '' },
		{ character: 'X', title: 'Autoöl', description: 'some description', formula: '' },
		{ character: 'Y', title: 'Autoöl', description: 'some description', formula: '' },
		{ character: 'Z', title: 'Zellophantüte', description: '🛍️', formula: '' }
	];

	let selectedLetter = 'A';

	/**
	 * @param {string} character
	 */
	function selectLetter(character) {
		selectedLetter = character;
	}
</script>

<div class="my-2 p-2 lg:px-4 xl:px-6 2xl:px-8 space-y-4 {selection}">
	<div class="grid grid-cols-9 md:grid-cols-13 xl:grid-cols-26 gap-2">
		{#each alphabet as letter}
			<button
				on:click={() => selectLetter(letter.character)}
				class="{buttonColor} text-lg {font} grid place-items-center border-black border-2 rounded-md"
			>
				{letter.character}
			</button>
		{/each}
	</div>

	<section class="p-2 w-full lg:p-4 xl:p-5 border-2 {font} border-black rounded">
		<div class="prose xl:prose-lg prose-black max-w-none">
			<h1>{alphabet.find((letter) => letter.character === selectedLetter)?.title}</h1>
			<p>
				{@html alphabet.find((letter) => letter.character === selectedLetter)?.description}
			</p>
			{#if alphabet.find((letter) => letter.character === selectedLetter)?.formula != ''}
				<h2>Chemische Reaktionsformel:</h2>
				<div class="mx-auto w-full not-prose">
					<Katex math={alphabet.find((letter) => letter.character === selectedLetter)?.formula} />
				</div>
			{/if}
		</div>
	</section>
</div>
