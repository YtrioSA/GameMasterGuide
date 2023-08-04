<script lang="ts">
	
	let category: string,
		game: string,
		oldpathname: string,
		currentTile: number = 1,
		isGuides: boolean = false,
		pathnames: string[] = [];

	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { page } from '$app/stores';
	import { categorySource } from '$lib/ts/categorySource';
	import { dataSource, guides } from '$lib/ts/dataSource';
	import { pathnames as paths } from '$lib/ts/pathnames';
	import { onMount } from 'svelte';
	import { AppShell, AppBar, storePopup, popup, type PopupSettings } from '@skeletonlabs/skeleton';
	import { AppRail, AppRailTile } from '@skeletonlabs/skeleton';
	import Category from '$lib/components/Category.svelte';
	import Icon from '@iconify/svelte';
	import Guides from '$lib/components/Guides.svelte';
	import Categorys from '$lib/components/Categorys.svelte';

	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';

	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
	const gamesFeatured: PopupSettings = {
		event: 'click',
		target: 'GamesFeatured',
		placement: 'bottom'
	};

	onMount(() => (oldpathname = $page.url.pathname));

	$: {
		category = $page.url.pathname.split('/')[1];
		game     = $page.url.pathname.split('/')[2];

		isGuides = guides?.[category]?.[game] && guides?.[category]?.[game].length != 0 ? true : false;

		if (isGuides) {
			pathnames = guides?.[category]?.[game].map((guide) => guide.pathname);
			isGuides =
				!pathnames.includes($page.url.pathname) && !paths.includes($page.url.pathname)
					? false
					: true;
		}

		if ($page.url.pathname != oldpathname) {
			currentTile = 1;
			oldpathname = $page.url.pathname;
		}
	}
</script>

<AppShell
	slotSidebarLeft={isGuides ? 'block' : 'hidden'}
	slotSidebarRight="w-[300px] mr-2 {isGuides && currentTile ? 'block' : 'hidden'}">

	<svelte:fragment slot="header">
		<AppBar slotDefault="flex justify-center">
			<svelte:fragment slot="lead">
				<a href="/" class="flex gap-x-2">
					<Icon icon="fluent:compass-northwest-20-filled" class="h-8 w-8" />
					<h1 class="h3 text-[#E86A33]">GameMaster Guide</h1>
				</a>
			</svelte:fragment>
			<svelte:fragment slot="default">
				<div class="relative hidden lg:block">
					<a href="/" class="btn hover:variant-soft-tertiary {$page.url.pathname === '/'
							? 'variant-soft-tertiary':''}">

						<Icon icon="fluent:home-12-filled" class="h-4 w-8" />
						<span> Home </span>
					</a>
					<button use:popup={gamesFeatured} class="btn hover:variant-soft-tertiary">
						<Icon icon="ion:game-controller" class="h-4 w-8" />
						<span> Games </span>
						<Icon icon="tabler:caret-down-filled" class="h-4 w-8" />
					</button>
					<a
						href="https://github.com/YtrioSA"
						class="btn hover:variant-soft-tertiary"
						target="_blank"
						rel="noreferrer">

						<Icon icon="ant-design:github-filled" class="h-4 w-8" />
						<span> Github </span>
					</a>
					<div class="card p-4 w-72 shadow-xl" data-popup="GamesFeatured">
						<Categorys {categorySource} />
					</div>
					<Category {dataSource} {categorySource} />
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarRight">
		{#if isGuides}
			<h1 class="h1 pb-5 mt-5 text-center">Guides</h1>
			<hr class="pb-2" />
			<Guides {category} {game} />
		{/if}
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<AppRail>
			<AppRailTile bind:group={currentTile} name="tile-1" value={0} title="tile-1">
				<svelte:fragment slot="lead">
					<Icon icon="jam:padlock-f" class="m-auto w-8 h-8" />
				</svelte:fragment>
				<h1 class="text-lg">Close</h1>
			</AppRailTile>
			<AppRailTile bind:group={currentTile} name="tile-2" value={1} title="tile-2">
				<svelte:fragment slot="lead">
					<Icon icon="jam:padlock-open-f" class="m-auto w-8 h-8" />
				</svelte:fragment>
				<h1 class="text-lg">Open</h1>
			</AppRailTile>
		</AppRail>
	</svelte:fragment>
	<slot />
</AppShell>