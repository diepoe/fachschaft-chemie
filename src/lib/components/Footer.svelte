<script>
	// component props
	export let font = 'font-sligoil';

	// show actual year in footer
	let date = new Date();

	let year = date.getFullYear();
</script>

<footer class="w-full text-base text-center py-2 lg:py-4 mt-2 {font}">
	&copy; {year} Herzog-Ernst-Gymnasium Uelzen
</footer>
