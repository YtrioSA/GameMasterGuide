<script lang="ts">
	import Icon from '@iconify/svelte';
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
		<p class="pt-2 pb-2 leading-loose">{content}</p>
        <div class="flex justify-center items-center gap-x-2">
			<Icon icon="fluent:link-16-filled" class="w-8 h-8"/>
		    <a class="capitalize underline" href={pathname}>acessar guia</a>
        </div>
	</svelte:fragment>
</AccordionItem>
