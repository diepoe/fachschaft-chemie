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
			title: 'Alkohol',
			description:
				'Eine Gruppe von Verbindungen, die in Getränken, Desinfektionsmitteln und als Lösungsmittel vorkommen. In Getränken wirkt Ethanol berauschend und kann in hohen Dosen gesundheitsschädlich sein. In der Medizin wird Alkohol zur Desinfektion verwendet, da er Bakterien abtötet.',
			formula: 'CH_{3}CH_{2}OH'
		},
		{ character: 'B', title: 'B', description: 'some description', formula: '' },
		{
			character: 'C',
			title: 'Chlor',
			description:
				'Ein Element, das zur Wasseraufbereitung und in Reinigungsmitteln verwendet wird. In Schwimmbädern tötet es schädliche Bakterien ab. Chlor ist auch Bestandteil von Kochsalz (Natriumchlorid) und somit in vielen Lebensmitteln enthalten.',
			formula: 'Cl'
		},
		{
			character: 'D',
			title: 'Duft',
			description:
				'Flüchtige chemische Verbindungen, die wir mit der Nase wahrnehmen können. Düfte können natürlichen Ursprungs sein, wie bei Blumen, oder künstlich hergestellt werden, wie in Parfüms. Unser Geruchssinn kann Tausende verschiedener Düfte unterscheiden.',
			formula: ''
		},
		{
			character: 'E',
			title: 'Explosion',
			description:
				'<iframe src="https://giphy.com/embed/yfEjNtvqFBfTa" width="480" height="360" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/epilepsy-warning-muppets-yfEjNtvqFBfTa">via GIPHY</a></p>',
			formula: ''
		},
		{
			character: 'F',
			title: 'Fett',
			description:
				'Eine Gruppe von Nährstoffen, die in Lebensmitteln vorkommen und vom Körper als Energiespeicher genutzt werden. Fette sind wichtig für die Aufnahme bestimmter Vitamine. Es gibt gesättigte und ungesättigte Fettsäuren, wobei letztere als gesünder gelten.',
			formula: ''
		},
		{ character: 'G', title: 'G', description: 'some description', formula: '' },
		{ character: 'H', title: 'H', description: 'some description', formula: '' },
		{ character: 'I', title: 'K', description: 'some description', formula: '' },
		{ character: 'J', title: 'J', description: 'some description', formula: '' },
		{
			character: 'K',
			title: 'Koffein',
			description:
				'Ein Wirkstoff, den wir Menschen etwa durch Kaffee oder Tee konsumieren, der stimulierend wirkt',
			formula: 'C_{8}H_{10}N_{4}O_{2}'
		},
		{ character: 'L', title: 'L', description: 'some description', formula: '' },
		{ character: 'M', title: 'M', description: 'some description', formula: '' },
		{ character: 'N', title: 'N', description: 'some description', formula: '' },
		{
			character: 'O',
			title: 'Oxidation',
			description:
				'Ein Prozess, der u.a. für das Rosten von Metallen oder das Braunwerden von Äpfeln verantwortlich ist. Bei der Oxidation gibt ein Stoff Elektronen ab. Sie spielt auch eine Rolle bei der Energiegewinnung in unserem Körper und bei Verbrennungsprozessen.',
			formula: ''
		},
		{
			character: 'P',
			title: 'Photosynthese',
			description:
				'Die Photosynthese ist einer der grundlegenden Prozesse, welche das Leben auf unserem blauen Planeten erst möglich machen! Durch diesen gewinnen Pflanzen unter Licht- und Wasserzufuhr beispielsweise Glucose und wandeln dabei Kohlenstoffdioxid in Sauerstoff um, womit für Fauna und Menschen die Versorgung mit Atemluft aufrecht erhalten bleibt.',
			formula: '6CO_{2} + 12H_{2}O \\rarr C_6H_{12}O_6 + 6O_2 + 6 H_2O'
		},
		{ character: 'Q', title: 'Q', description: 'some description', formula: '' },
		{
			character: 'R',
			title: 'Rost',
			description:
				'Das Produkt der Reaktion von Sauerstoff und Eisen (Oxidation), das Metalle zerstören kann.',
			formula: ''
		},
		{ character: 'S', title: 'S', description: 'some description', formula: '' },
		{
			character: 'T',
			title: 'Treibhausgase 🏭',
			description:
				'Treibhausgase wie Kohlenstoffdioxid sorgen für eine Verschlimmerung des Klimawandels. Die Wissenschaft ist darum bemüht, für die Zukunft Prozesse, welche große Mengen an Treibhausgasen ausstoßen, mit nachhaltigeren Alternativen zu ersetzen.',
			formula: ''
		},
		{ character: 'U', title: 'U', description: 'some description', formula: '' },
		{ character: 'V', title: 'V', description: 'some description', formula: '' },
		{ character: 'W', title: 'W', description: 'some description', formula: '' },
		{
			character: 'X',
			title: 'X-Ray (engl.: Röntgenstrahlung)',
			description:
				'Eine Form elektromagnetischer Strahlung, die in der Medizin zur Bildgebung eingesetzt wird. Röntgenstrahlen durchdringen Gewebe und ermöglichen es Ärzten, Knochenbrüche, Zahnprobleme oder Lungenerkrankungen zu diagnostizieren. Sie werden auch in der Krebsbehandlung und bei Sicherheitskontrollen an Flughäfen verwendet.',
			formula: ''
		},
		{ character: 'Y', title: 'Y', description: 'some description', formula: '' },
		{
			character: 'Z',
			title: 'Zucker',
			description:
				'Kohlenhydrate, die Lebensmitteln einen süßen Geschmack verleihen und als Energiequelle dienen. Eine der bekanntesten Zuckerformen ist die Glucose, welche unter anderem als Produkt der Photosynthese entsteht.',
			formula: 'C_6H_{12}O_6'
		}
	];

	let selectedLetter = 'A';

	/**
	 * @param {string} character
	 */
	function selectLetter(character) {
		selectedLetter = character;
	}
</script>

<div class="my-2 space-y-4 p-2 lg:px-4 xl:px-6 2xl:px-8 {selection}">
	<div class="grid grid-cols-9 gap-2 md:grid-cols-13 xl:grid-cols-26">
		{#each alphabet as letter}
			<button
				on:click={() => selectLetter(letter.character)}
				class="{buttonColor} text-lg {font} grid place-items-center rounded-md border-2 border-black"
			>
				{letter.character}
			</button>
		{/each}
	</div>

	<section class="w-full border-2 p-2 lg:p-4 xl:p-5 {font} rounded border-black">
		<div class="prose-black prose max-w-none xl:prose-lg">
			<h1>{alphabet.find((letter) => letter.character === selectedLetter)?.title}</h1>
			<p>
				{@html alphabet.find((letter) => letter.character === selectedLetter)?.description}
			</p>
			{#if alphabet.find((letter) => letter.character === selectedLetter)?.formula != ''}
				<h2>Chemische Formel:</h2>
				<div class="not-prose mx-auto w-full">
					<Katex math={alphabet.find((letter) => letter.character === selectedLetter)?.formula} />
				</div>
			{/if}
		</div>
	</section>
</div>
