<script>
	import Hero from '$lib/components/Hero.svelte';
	import ContentContainer from '$lib/components/ContentContainer.svelte';
	import Alpabet from '$lib/components/Alpabet.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<meta name="theme-color" content="#a3e635" />
	<style lang="css">
		body {
			@apply bg-lime-400;
		}
	</style>
</svelte:head>

<div class="bg-lime-400">
	<Nav />
	<main class="min-h-screen w-full">
		<Hero><br />Herzlich Willkommen auf der Seite der Fachschaft Chemie!<br /><br /></Hero>
		<ContentContainer>
			<h2>Chemie von A-Z</h2>
			<p>
				Chemie lässt sich in all deinen Lebensbereichen wiederfinden: Von A wie Autoöl bis Z wie
				Zellophantüte ist so gut wie jedes moderne Produkt auf Basis unserer Errungenschaften
				entwickelt. Selbst das simpelste biologische Leben wäre nicht ohne die Chemie möglich, doch
				im Zuge des Klimawandels drohen chemische Prozesse auch, unserem bisherigen Leben den Garaus
				zu machen.
			</p>
			<p>
				Im Folgenden eine Übersicht von A-Z über die Vielfältigkeit der Chemie (einfach den
				entsprechenden Buchstaben anwählen):
			</p>
		</ContentContainer>

		<Alpabet />

		<div class="h-4 lg:h-6 w-full" />
		<ContentContainer>
			<h2>Chemie am HEG</h2>
			<p>
				Der Chemieunterricht erfolgt bei uns am Herzog-Ernst-Gymnasium ab der 6. bis zur 10. Klasse
				epochal für je ein Halbjahr. Der Chemieunterricht kann dann in der Einführungsphase (Klasse
				11) fortgeführt werden, in der gymnasialen Oberstufe in den Jahrgängen 12 und 13 besteht
				zudem die Möglichkeit, das Fach Chemie als sogenannten Leistungskurs (eA, sprich "erhöhtes
				Anforderungsniveau") und somit auch als Prüfungsfach für das Abitur zu wählen.
			</p>
			<h3>Curriculum</h3>
			<p>
				Mehr zum Kerncurriculum sowie dem Abitur in dem Fach Chemie können Sie auf dem
				<a
					target="_blank"
					rel="noreferrer"
					href="https://bildungsportal-niedersachsen.de/unterricht-mehr/unterrichtsfaecher/chemie"
				>
					niedersächsischen Bildungsportal
				</a> finden.
			</p>
		</ContentContainer>
	</main>
	<a href="/computer-modern">
		<Footer />
	</a>
</div>
