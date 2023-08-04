<script lang="ts">

	import { guides } from '$lib/ts/dataSource';
	import { Accordion } from '@skeletonlabs/skeleton';
	import Guide from './Guide.svelte';

	let game: string;
	let category: string;

	export { game, category };


</script>

<Accordion autocollapse>
	{#each guides[category][game] as {pathname,icon,title,content} }
		<Guide {pathname} {icon} {title} {content} />
	{/each}
</Accordion>
