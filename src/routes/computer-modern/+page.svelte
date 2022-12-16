<script>
	import Hero from '$lib/components/Hero.svelte';
	import ContentContainer from '$lib/components/ContentContainer.svelte';
	import Alpabet from '$lib/components/Alpabet.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Nav font="font-cmu" textStyle="" decoration="" selection="" />
<main class="min-h-screen w-full">
	<Hero font="font-cmu" bgColor="bg-white" textcolor="text-black" selection="">
		<br />Herzlich Willkommen auf der Seite der Fachschaft Chemie!<br /><br />
	</Hero>
	<ContentContainer font="font-cmu" selection="" proseColor="prose-black">
		<h2>Chemie von A-Z</h2>
		<p>
			Chemie lässt sich in all deinen Lebensbereichen wiederfinden: Von A wie Autoöl bis Z wie
			Zellophantüte ist so gut wie jedes moderne Produkt auf Basis unserer Errungenschaften
			entwickelt:
		</p>
	</ContentContainer>

	<Alpabet
		buttonColor="bg-white text-black hover:bg-blue-200 hover:text-black"
		font="font-cmu"
		selection=""
	/>
</main>
<a href="/">
	<Footer font="font-cmu" />
</a>
