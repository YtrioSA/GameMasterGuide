<script lang="ts">
	import Icon from '@iconify/svelte';
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import { dataSource } from '$lib/ts/dataSource';
	let tabSet: number = 0;
</script>

<div class="ml-5 mr-5">
	<h1 class="h1 pb-5 text-center mt-5">
		<img class="inline-block object-cover rounded-full h-[50px] w-[50px]" src={dataSource[$page.url.pathname.split('/')[1]].filter((game) => $page.url.pathname.startsWith(game.route))[0]["icon"]} alt="">
		Dead Cells
	</h1>
	<hr />
	<div class="grid grid-cols-2">
		<div>
			<div class="h-full flex justify-center items-center">
				<p>
					<Icon icon="fluent:info-12-filled" color="blue" class="inline w-8 h-8" />
					<b>Dead Cells</b> foi desenvolvido pela
					<a target="_blank" href="https://store.steampowered.com/developer/MotionTwin"
						><u>Motion Twin</u></a
					>
					e publicado pela
					<a target="_blank" href="https://store.steampowered.com/publisher/playdigous"><u>Playdigious</u></a>
				</p>
			</div>
		</div>
		<div class="h-full">
			<h1 class="h1 text-center p-4">
				<Icon icon="fluent:document-bullet-list-20-filled" class="inline w-8 h-8"/>
				<span>Info</span>
			</h1>
			<hr class="ml-3 mr-3" />
		</div>
		<div>
			<img
				class="cursor-pointer h-[350px] w-full border-2"
				src="https://cdn.cloudflare.steamstatic.com/steam/apps/588650/header.jpg"
				alt=""
			/>
			<span class="font-mono pt-2 pb-2 inline-block">
				Embarque em uma jornada implacável por um mundo impiedoso: a luta pela sobrevivência em Dead
				Cells.
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
								Dead Cells é um jogo de ação roguelike com elementos de plataforma, conhecido por
								sua jogabilidade desafiadora e ambiente implacável. Explore um mundo misterioso,
								lute contra inimigos mortais e descubra segredos antigos.
							</p>
						{:else if tabSet === 1}
							<p class="mt-[25px]">
								Roguelike, Metroidvania, Jogo eletrônico de luta, Jogo eletrônico de tiro, Adventure
							</p>
						{:else if tabSet === 2}
							<p class="mt-[25px]">
								Android, Nintendo Switch, PlayStation 5, ...
							</p>
						{:else if tabSet === 3}
							<p class="mt-[25px]">
								Motion-Twin, Motion Twin Scop ARL
							</p>
						{/if}
					</svelte:fragment>
				</TabGroup>
			</div>
		</div>
	</div>
</div>
