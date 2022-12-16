<script>
	import Hero from '$lib/components/Hero.svelte';
	import ContentContainer from '$lib/components/ContentContainer.svelte';
	import Alpabet from '$lib/components/Alpabet.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="bg-lime-400">
	<Nav />
	<main class="min-h-screen w-full">
		<Hero><br />Herzlich Willkommen auf der Seite der Fachschaft Chemie!<br /><br /></Hero>
		<ContentContainer>
			<h2>Chemie von A-Z</h2>
			<p>
				Chemie lässt sich in all deinen Lebensbereichen wiederfinden: Von A wie Autoöl bis Z wie
				Zellophantüte ist so gut wie jedes moderne Produkt auf Basis unserer Errungenschaften
				entwickelt:
			</p>
		</ContentContainer>
	
		<Alpabet />
	</main>
	<a href="/computer-modern">
		<Footer />
	</a>
</div>
