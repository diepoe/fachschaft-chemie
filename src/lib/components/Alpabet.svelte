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
			formula: '\\ce{C2H5OH}'
		},
		{
			character: 'B',
			title: 'Backpulver',
			description:
				'Ein Triebmittel, das in der Küche zum Lockern von Teigen verwendet wird. Es besteht hauptsächlich aus Natron (<i>Natriumhydrogencarbonat</i>) und einem säurehaltigen Stoff. Wenn Backpulver mit Flüssigkeit in Kontakt kommt, reagieren diese Komponenten und setzen Kohlendioxid frei. Dieses Gas lässt den Teig aufgehen und macht Backwaren locker und luftig. Backpulver ist ein einfacher Ersatz für Hefe und wird häufig für Kuchen, Muffins und andere Gebäckarten verwendet.',
			formula: '\\ce{NaHCO3}'
		},
		{
			character: 'C',
			title: 'Chlor',
			description:
				'Ein Element, das zur Wasseraufbereitung und in Reinigungsmitteln verwendet wird. In Schwimmbädern tötet es schädliche Bakterien ab. Chlor ist auch Bestandteil von Kochsalz (Natriumchlorid) und somit in vielen Lebensmitteln enthalten.',
			formula: '\\ce{Cl}'
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
		{
			character: 'G',
			title: 'Gärung',
			description:
				'Ein biologisch-chemischer Prozess, der bei der Herstellung von Brot, Bier und Wein eine Rolle spielt. Dabei wandeln Mikroorganismen wie Hefen Zucker in Alkohol und CO2 um. Die Gärung ist eine der ältesten biotechnologischen Methoden der Menschheit.',
			formula: ''
		},
		{
			character: 'H',
			title: 'Haarspray',
			description:
				'Ein Kosmetikprodukt zur Fixierung von Frisuren. Es enthält Polymere wie <i>Polyvinylpyrrolidon</i>, die einen dünnen Film auf dem Haar bilden und es in Form halten. Moderne Haarsprays enthalten oft auch pflegende Zusätze und UV-Filter. Die Treibgase in Sprühdosen wurden umweltfreundlicher gestaltet, um die Ozonschicht zu schonen.',
			formula: '\\ce{C6H9NO}'
		},
		{
			character: 'I',
			title: 'Isolierung',
			description:
				'Materialien, die Wärme, Elektrizität oder Schall schlecht leiten und zum Energiesparen eingesetzt werden. Gute Isolierung in Gebäuden reduziert Heizkosten und CO2-Emissionen. Beispiele sind Styropor, Mineralwolle oder spezielle Fensterverglasungen.',
			formula: ''
		},
		{
			character: 'J',
			title: 'Joghurt',
			description:
				'Ein fermentiertes Milchprodukt, das durch Bakterienkulturen hergestellt wird. Die Bakterien wandeln Milchzucker in Milchsäure um, was zu einer Verdickung und dem charakteristischen säuerlichen Geschmack führt. Joghurt ist reich an Proteinen und Calcium und kann probiotische Kulturen enthalten, die sich positiv auf die Darmgesundheit auswirken.',
			formula: ''
		},
		{
			character: 'K',
			title: 'Koffein',
			description:
				'Ein Wirkstoff in Kaffee und Tee, der stimulierend wirkt. Er erhöht die Aufmerksamkeit und reduziert Müdigkeit. Koffein ist die am häufigsten konsumierte psychoaktive Substanz weltweit und findet sich auch in Cola und Energydrinks.',
			formula: '\\ce{C8H10N4O2}'
		},
		{
			character: 'L',
			title: 'Lippenstift',
			description:
				'Ein kosmetisches Produkt zur Färbung und Pflege der Lippen. Lippenstifte bestehen aus Wachsen, Ölen, Pigmenten und oft auch Pflegestoffen wie Vitamin E. Die Farbpalette reicht von dezenten Naturtönen bis zu kräftigen Rottönen. Manche Lippenstifte enthalten auch UV-Schutz oder feuchtigkeitsspendende Inhaltsstoffe.',
			formula: ''
		},
		{
			character: 'M',
			title: 'Mineralwasser',
			description:
				'Natürliches Wasser mit gelösten Mineralstoffen, das als Getränk konsumiert wird. Es stammt aus unterirdischen Quellen und enthält Mineralsalze und Spurenelemente. Die Zusammensetzung variiert je nach Herkunft und kann gesundheitsfördernde Wirkungen haben.',
			formula: ''
		},
		{
			character: 'N',
			title: 'Nagellack',
			description:
				'Ein flüssiger Lack zur dekorativen Gestaltung der Fingernägel. Er besteht hauptsächlich aus Filmbildnern, Lösungsmitteln, Pigmenten und Weichmachern. Moderne Nagellacke sind oft schnelltrocknend und langanhaltend. Es gibt auch spezielle Formulierungen wie Gel-Lacke oder atmungsaktive Varianten für eine bessere Nagelgesundheit.',
			formula: ''
		},
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
			formula: '\\ce{6CO2 + 12H2O -> C6H12O6 + 6O2 + 6H2O}'
		},
		{
			character: 'Q',
			title: 'Quecksilber',
			description:
				'Ein flüssiges Metall, das früher in Thermometern verwendet wurde, aber aufgrund seiner Giftigkeit ersetzt wird. Quecksilber kann schwere gesundheitliche Schäden verursachen. Es findet sich noch in Energiesparlampen und einigen industriellen Anwendungen.',
			formula: '\\ce{Hg}'
		},
		{
			character: 'R',
			title: 'Rost',
			description:
				'Das Produkt der Reaktion von Sauerstoff und Eisen (Oxidation), das Metalle zerstören kann.',
			formula: '\\ce{4Fe + 3O2 + 2H2O -> 4Fe(OH)3}'
		},
		{
			character: 'S',
			title: 'Seife',
			description:
				'Ein Reinigungsmittel, das Fette löst und durch chemische Reaktionen hergestellt wird. Seifen bestehen aus Salzen von Fettsäuren und wirken als Emulgatoren. Sie ermöglichen es, dass sich Wasser und Fett vermischen, wodurch Schmutz abgewaschen werden kann.',
			formula: ''
		},
		{
			character: 'T',
			title: 'Treibhausgase',
			description:
				'Treibhausgase wie Kohlenstoffdioxid sorgen für eine Verschlimmerung des Klimawandels. Die Wissenschaft ist darum bemüht, für die Zukunft Prozesse, welche große Mengen an Treibhausgasen ausstoßen, mit nachhaltigeren Alternativen zu ersetzen.',
			formula: '\\ce{CO2}'
		},
		{
			character: 'U',
			title: 'Uran',
			description:
				'Ein radioaktives chemisches Element mit dem Symbol U und der Ordnungszahl 92. Es ist ein silbrig-weißes Metall, das in der Natur in geringen Mengen vorkommt. Uran ist vor allem für seine Verwendung in der Kernenergie bekannt. Das Isotop U-235 wird in Kernreaktoren zur Energieerzeugung und in Kernwaffen genutzt. ',
			formula: '\\ce{U}'
		},
		{
			character: 'V',
			title: 'Vitamine',
			description:
				'Wichtige organische Verbindungen, die der Körper für verschiedene Funktionen benötigt. Vitamine können vom Körper nicht oder nur unzureichend hergestellt werden und müssen daher mit der Nahrung aufgenommen werden. Mangel an bestimmten Vitaminen kann zu Krankheiten führen.',
			formula: ''
		},
		{
			character: 'W',
			title: 'Waschmittel',
			description:
				'Chemische Produkte, die Schmutz und Flecken aus Textilien entfernen. Sie enthalten Tenside, die Schmutzpartikel lösen und in der Waschlauge halten. Moderne Waschmittel enthalten oft auch Enzyme, die biologische Flecken abbauen.',
			formula: ''
		},
		{
			character: 'X',
			title: 'Xylitol',
			description:
				'Ein Zuckeralkohol mit ähnlicher Süßkraft wie Zucker, aber weniger Kalorien. Es wird aus Pflanzenmaterie gewonnen. Xylitol hemmt Bakterienwachstum im Mund, wird in Zahnpflegeprodukten verwendet und erzeugt einen kühlenden Effekt beim Auflösen. In der Lebensmittelindustrie dient es als Süßungsmittel und Feuchthaltemittel.',
			formula: '\\ce{C5H12O5}'
		},
		{
			character: 'Y',
			title: 'Yttrium',
			description:
				'Ein silberweißes, relativ weiches Metall aus der Gruppe der Seltenen Erden. Es wird in verschiedenen technologischen Anwendungen genutzt, wie in Leuchtstoffen für Bildschirme und LEDs, in Lasern für medizinische Behandlungen und in Legierungen zur Verbesserung der Materialeigenschaften. Yttriumverbindungen finden auch Verwendung in der Keramikherstellung und als Katalysatoren in der chemischen Industrie.',
			formula: '\\ce{Y}'
		},
		{
			character: 'Z',
			title: 'Zucker',
			description:
				'Kohlenhydrate, die Lebensmitteln einen süßen Geschmack verleihen und als Energiequelle dienen. Der bekannteste Zucker ist Saccharose (Haushaltszucker). Übermäßiger Zuckerkonsum kann zu Übergewicht und Zahnproblemen führen. In der Natur kommt Zucker in vielen Früchten und Pflanzen vor, in etwa in Form von Glucose, einem Produkt der Photosynthese.',
			formula: '\\ce{C6H12O6}'
		}
	];

	let selectedLetter = getRandomLetter();

	/**
	 * @param {string} character
	 */
	function selectLetter(character) {
		selectedLetter = character;
	}

	function getRandomLetter() {
		const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		return alphabet[Math.floor(Math.random() * alphabet.length)];
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
			<p class="text-justify">
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
