<script>
	import hegLogo from '$lib/assets/img/heg_cool_chemie.png';
	export let font = 'font-sligoil';
	export let decoration = 'underline decoration-double';
	export let selection = 'selection:bg-black selection:text-lime-300 selection:decoration-lime-300';
	export let textStyle = 'font-bold';
</script>

<nav class={'mt-1 p-2 lg:p-4 xl:px-6 mb-2 lg:mb-4 xl:mb-6 flex items-center ' + selection}>
	<img src={hegLogo} alt="Herzog Ernst mit Reagenzglas" class="w-16 h-16 lg:w-24 lg:h-24 mr-4" />
	<span class="{font} {decoration} {textStyle} text-xl xl:text-2xl">Fachschaft Chemie des HEG</span>
</nav>
