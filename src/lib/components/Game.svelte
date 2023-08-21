<script lang="ts">

    let route:string,
        icon:string,
        name:string,
        drawerClose:any;

     export {route,icon,name,drawerClose};

     
</script>

<li class="list-none" on:click={drawerClose} on:keydown={() => {}}>
    <a href={route}>
        <span>
            <img 
                src={icon} 
                class="inline-block object-cover w-8 h-8 rounded-full"
                alt="">
        </span>
        <span>{name}</span>
    </a>
</li>