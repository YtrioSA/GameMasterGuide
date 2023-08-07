<script lang="ts">
	import Icon from '@iconify/svelte';
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import { dataSource } from '$lib/ts/dataSource';
	import { platform } from '@floating-ui/dom';
	let tabSet: number = 0;
</script>

<div class="ml-5 mr-5">
	<h1 class="h1 pb-5 text-center mt-5">
		<img
			class="inline-block object-cover rounded-full h-[50px] w-[50px]"
			src={dataSource[$page.url.pathname.split('/')[1]].filter((game) =>
				$page.url.pathname.startsWith(game.route)
			)[0]['icon']}
			alt=""
		/>
		Stoneshard
	</h1>
	<hr />
	<div class="grid grid-cols-2">
		<div>
			<div class="h-full flex justify-center items-center">
				<p>
					<Icon icon="fluent:info-12-filled" color="blue" class="inline w-8 h-8" />
					<b>Stoneshard</b> foi desenvolvido pela
					<a target="_blank" href="https://store.steampowered.com/developer/InkStainsGames">
						<u>Ink Stains Games</u>
					</a>
					e publicado pela
					<a target="_blank" href="https://store.steampowered.com/publisher/HypeTrainDigital">
						<u>HypeTrain Digital</u>
					</a>
				</p>
			</div>
		</div>
		<div class="h-full">
			<h1 class="h1 text-center p-4">
				<Icon icon="fluent:document-bullet-list-20-filled" class="inline w-8 h-8" />
				<span>Info</span>
			</h1>
			<hr class="ml-3 mr-3" />
		</div>
		<div>
			<img
				class="cursor-pointer h-[350px] w-full border-2"
				src="https://cdn.cloudflare.steamstatic.com/steam/apps/625960/header.jpg"
				alt=""
			/>
			<span class="font-mono pt-2 pb-2 inline-block">
				Explore um mundo de aventuras épicas e desafios inigualáveis em stoneshard, onde seu destino
				está em suas mãos.
			</span>
		</div>
		<div class="flex justify-center">
			<div class="w-auto mt-5 text-base tracking-wide leading-8">
				<TabGroup class="w-[470px]" justify="justify-center">
					<Tab
						bind:group={tabSet}
						name="tab1"
						value={0}
						class="mx-1 border-2 hover:variant-filled-primary"
					>
						<span class="text-sm">
							<Icon icon="fluent:book-20-filled" class="inline w-4 h-4" />
							Story
						</span>
					</Tab>
					<Tab
						bind:group={tabSet}
						name="tab2"
						value={1}
						class="mx-1 border-2 hover:variant-filled-primary"
					>
						<span class="text-sm">
							<Icon icon="tabler:gender-epicene" class="inline w-4 h-4" />
							Gender
						</span>
					</Tab>
					<Tab
						bind:group={tabSet}
						name="tab3"
						value={2}
						class="mx-1 border-2 hover:variant-filled-primary"
					>
						<span class="text-sm">
							<Icon icon="material-symbols:device-reset" class="inline w-4 h-4" />
							Platform
						</span>
					</Tab>
					<Tab
						bind:group={tabSet}
						name="tab4"
						value={3}
						class="mx-1 border-2 hover:variant-filled-primary"
					>
						<span class="text-sm">
							<Icon icon="tabler:brush" class="inline w-4 h-4" />
							Studio
						</span>
					</Tab>
					<svelte:fragment slot="panel">
						{#if tabSet === 0}
							<p class="mt-[25px]">
								Stoneshard <b>é um complexo RPG em turnos em mundo aberto</b>. Experimente a vida
								implacável de um mercenário medieval: viaje por reinos divididos pela guerra, assine
								contratos, lute, cuide de seus ferimentos e desenvolva sem restrições seu
								personagem.
							</p>
						{:else if tabSet === 1}
							<p class="mt-[25px]">
								Roguelike, Jogo eletrônico de aventura, 
                                Early Access, Adventure, Strategy
							</p>
						{:else if tabSet === 2}
							<p class="mt-[25px]">
								Nintendo Switch, PlayStation 4, 
                                Linux, Microsoft Windows, Mac OS, Xbox One
							</p>
						{:else if tabSet === 3}
							<p class="mt-[25px]">
								HypeTrain Digital
							</p>
						{/if}
					</svelte:fragment>
				</TabGroup>
			</div>
		</div>
	</div>
</div>
