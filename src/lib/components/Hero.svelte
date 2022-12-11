<script>
	export let bgColor = 'bg-black';
</script>

<section class="{bgColor} font-sligoil md:text-lg text-lime-300 w-full px-3 md:px-4 lg:px-6 xl:px-8">
	
	<p class="py-1 px-4 text-center">
		<slot />
	</p>
	<!--<div class="bg-wissenschaftler bg-repeat-x h-10 bg-center bg-contain w-full" />-->
</section>
