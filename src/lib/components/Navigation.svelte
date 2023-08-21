<script lang="ts">

	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import { dataSource } from '$lib/ts/dataSource';
    import { drawerStore } from '@skeletonlabs/skeleton';
	
	import Game   from '$lib/components/Game.svelte';
    import Icon   from '@iconify/svelte';
   

	const categorys: Record<string, string>[] = [
		{
			genero: 'Action',
			icon: 'ri:sword-fill'
		},

		{
			genero: 'Metroidvania',
			icon: 'fluent:key-16-filled'
		},

		{
			genero: 'Roguelike',
			icon: 'game-icons:maze-cornea'
		},

		{
			genero: 'RPG',
			icon: 'mdi:dice-d20'
		}
	];
	
	const drawerClose = (): void => {
		drawerStore.close();
	}
	
</script>

<Accordion>
	{#each categorys as category}
		<AccordionItem close>
			<svelte:fragment slot="lead">
				<Icon icon={category.icon} />
			</svelte:fragment>
			<svelte:fragment slot="summary">
				{category.genero}
			</svelte:fragment>
            <svelte:fragment slot="content">
				{#each dataSource[`${category.genero.toLowerCase()}`] as { name, route, icon }}
					 <Game {name} {route} {icon} {drawerClose} />
				{/each}
            </svelte:fragment>
		</AccordionItem>
	{/each}
</Accordion>