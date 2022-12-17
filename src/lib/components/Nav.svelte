<script>
	import hegLogo from '$lib/assets/img/heg_cool_chemie.png';
	export let font = 'font-sligoil';
	export let decoration = 'underline decoration-double';
	export let selection = 'selection:bg-black selection:text-lime-300 selection:decoration-lime-300';
	export let textStyle = 'font-bold';
</script>

<nav
	class={'mt-1 p-2 lg:p-4 xl:px-6 mb-2 lg:mb-4 xl:mb-6 grid grid-cols-10 items-center w-full' +
		selection}
>
	<header class="col-span-10 md:col-span-8 flex items-center">
		<img src={hegLogo} alt="Herzog Ernst mit Reagenzglas" class="w-16 h-16 lg:w-24 lg:h-24 mr-4" />
		<span class="{font} {decoration} {textStyle} text-xl xl:text-2xl">
			Fachschaft Chemie des HEG
		</span>
	</header>
	<div
		class="col-span-2 hidden md:flex items-center justify-end {font} prose-sm prose lg:prose-base prose-purple xl:prose-lg 2xl:prose-xl"
	>
		<small>
			<a rel="noreferrer" href="https://www.heg-uelzen.de/fachschaften/">Zurück zur HEG-Homepage</a>
		</small>
	</div>
</nav>
