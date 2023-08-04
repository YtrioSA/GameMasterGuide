
<script lang="ts">
    import { computePosition, autoUpdate, offset, shift, flip, arrow } from "@floating-ui/dom";
    import { storePopup, popup, type PopupSettings } from "@skeletonlabs/skeleton";
    storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	import Icon from '@iconify/svelte';
	export let categorySource: Record<string, any>[];

</script>

<nav class="list-nav">
	<ul class="list-nav">
		{#each categorySource as { genero, icon, actionpopup }}
			<li>
				<button class="w-full" use:popup={actionpopup}>
					<span class="w-6 text-center">
						<Icon {icon} class="h-4 w-8" />
					</span>
					<span>{genero}</span>
				</button>
			</li>
		{/each}
	</ul>
</nav>

