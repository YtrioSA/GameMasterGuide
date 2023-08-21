<script lang="ts">

	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
	import {storeSumario} from "$lib/ts/storeSumario";
	import { AccordionItem } from '@skeletonlabs/skeleton';
	let icon: string, title: string, content: string, pathname: string;
	export { icon, title, content, pathname };

</script>

<AccordionItem>
	<svelte:fragment slot="lead">
		<Icon {icon} />
	</svelte:fragment>
	<svelte:fragment slot="summary">
		<span>{title}</span>
	</svelte:fragment>
	<svelte:fragment slot="content">
		{#if $page.url.pathname.match(/\/guide\/(\d+)/) }
		<h1 class="h3 text-center uppercase"> Sumário </h1>
		<hr>
		<div class="flex justify-center">
				<ul>
					{#each JSON.parse(JSON.stringify($storeSumario)) as item,index}
						<li>
							<span>{index+1} - </span>
							<a class="text-blue-700 underline mt-3 inline-block" href="#{item.id}">{item.id}</a>
						</li>
					{/each}
				</ul>
			</div>
		{:else}
			<p class="pt-2 pb-2 leading-loose capitalize">
				{content} 
			</p>
			<div class="flex justify-center items-center gap-x-2">
				<Icon icon="fluent:link-16-filled" class="w-8 h-8"/>
				<a class="capitalize underline" href={pathname}>acessar guia</a>
			</div>
		{/if}
	</svelte:fragment>	
</AccordionItem>
