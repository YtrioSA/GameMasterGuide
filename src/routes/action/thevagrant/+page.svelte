<script lang="ts">
	import Icon from '@iconify/svelte';
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import { dataSource } from '$lib/ts/dataSource';
	import Guides from '$lib/components/Guides.svelte';
	let tabSet: number = 0;
</script>

<div class="ml-5 mr-5">
    <h1 class="h1 pb-5 text-center mt-5">
        <img class="inline-block object-cover rounded-full h-[50px] w-[50px]" src={dataSource[$page.url.pathname.split('/')[1]].filter((game) => $page.url.pathname.startsWith(game.route))[0]["icon"]} alt="">
        The Vagrant
    </h1>
    <hr/>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div class="grid-content">
			<p class="text-sm mb-1">
				<Icon icon="fluent:info-12-filled" color="blue" class="inline w-8 h-8" />
				<b>The Vagrant</b> foi desenvolvido pela
				<a target="_blank" href="https://store.steampowered.com/curator/33860697-O.T.K-Games/"><u>O.T.K Games</u></a>
				e publicado pela a
				<a target="_blank" href="https://store.steampowered.com/publisher/sakuragame">
					<u>SakuraGame</u>
				</a>
			</p>
            <img
                class="cursor-pointer h-[350px] w-full border-2"
                src="https://cdn.cloudflare.steamstatic.com/steam/apps/598700/header.jpg"
                alt=""/>

            <span class="font-mono pt-2 pb-2 inline-block">
                Vivian, perdida em pensamentos entre as páginas do passado
            </span>
			
        </div>
        <div class="grid-content">
			<h1 class="h1 text-center p-4">
				<Icon icon="fluent:document-bullet-list-20-filled" class="inline w-8 h-8"/>
				<span>Info</span>
			</h1>
			<hr class="ml-3 mr-3" />
            <div class="flex justify-center">
                <div class="w-auto mt-5 text-base tracking-wide leading-8">
                    <TabGroup class="w-[300px] lg:w-[470px]" justify="justify-evenly lg:justify-between">
						<Tab
							bind:group={tabSet}
							name="tab1"
							value={0}
							class="mx-1 border-2 hover:variant-filled-primary"
						>
							<span class="text-sm">
								<Icon icon="fluent:book-20-filled" class="inline w-4 h-4" />
								<span class="hidden lg:block">
									Story
								</span>
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
								<span class="hidden lg:block">
									Gender
								</span>
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
								<span class="hidden lg:block">
									Platform
								</span>
							</span>
						</Tab>
						<Tab
							bind:group={tabSet}
							name="tab4"
							value={3}
							class="mx-1 border-2 hover:variant-filled-primary">
							<span class="text-sm">
								<Icon icon="tabler:brush" class="inline w-4 h-4" />
								<span class="hidden lg:block">
									Studio
								</span>
							</span>
						</Tab>
						<svelte:fragment slot="panel">
							{#if tabSet === 0}
								<p class="mt-[25px]">
									The Vagrant <strong>é um RPG de ação 2D</strong>. Você vivenciará uma aventura emocionante e
									desafiadora com foco no combate no qual se utiliza série de combos, ataques
									carregados e habilidades especiais - todos eles enquanto você faz melhorias na
									personagem com novos equipamentos e habilidades.
								</p>
							{:else if tabSet === 1}
								<p class="mt-[25px]">
									RPG eletrônico, Jogo eletrônico independente, Jogo eletrônico de luta, Adventure
								</p>
							{:else if tabSet === 2}
								<p class="mt-[25px]">
									Nintendo Switch, PlayStation 5, PlayStation 4, Microsoft Windows, Xbox One
								</p>
							{:else if tabSet === 3}
								<p class="mt-[25px]">
									Hong Kong Sakura Game Limited, Rainy Frog, SakuraGame, Limited Run Games
								</p>
							{/if}
						</svelte:fragment>
					</TabGroup>
					<div class="mt-5 w-[300px] block lg:hidden pb-5">
						<Guides category = {$page.url.pathname.split('/')[1]} 
								game     = {$page.url.pathname.split('/')[2]} />
					</div>
                </div>
            </div>
        </div>
    </div>
</div>
