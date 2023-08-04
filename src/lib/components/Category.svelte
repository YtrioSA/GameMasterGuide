<script lang="ts">

    import Game from "$lib/components/Game.svelte";
    
    export let categorySource:Record<string,any>[];
    export let dataSource:Record<string,Record<string,string>[]>;
    
</script>

{#each categorySource as {genero,actionpopup}}
    <div class="card p-4 w-72 shadow-xl" data-popup={actionpopup.target}>
        <nav class="list-nav">
            <ul class="list-nav">
                {#each dataSource[`${genero.toLowerCase()}`] as {name,route,icon}}
                    <Game {name} {route} {icon} />
                {/each}
            </ul> 
        </nav>
    </div>
{/each}