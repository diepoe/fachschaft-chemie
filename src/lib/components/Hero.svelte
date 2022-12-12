<script>
	export let bgColor = 'bg-black';
</script>

<section class="{bgColor} font-sligoil mb-2 md:mb-4 lg:mb-5 xl:mb-6 2xl:mb-8 md:text-lg text-lime-300 w-full px-3 md:px-4 lg:px-6 xl:px-8 selection:bg-lime-400 selection:text-black">
	
	<p class="py-1 px-4 text-center">
		<slot />
	</p>
	<!--<div class="bg-wissenschaftler bg-repeat-x h-10 bg-center bg-contain w-full" />-->
</section>
