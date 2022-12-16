<script>
	import katex from 'katex';
	import '../../../katex.min.css';

	/**
	 * @type {string}
	 */
	export let math;
	export let displayMode = false;

	const options = {
		displayMode: displayMode,
		throwOnError: false
	};

	$: katexString = katex.renderToString(math, options);
</script>

<div class="p">{@html katexString}</div>
