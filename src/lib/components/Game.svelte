<script lang="ts">

    let route:string,
        icon:string,
        name:string;

     export {route,icon,name};
     
</script>

<li>
    <a href={route}>
        <span>
            <img 
                src={icon} 
                class="object-cover w-8 h-8 rounded-full"
                alt="">
        </span>
        <span>{name}</span>
    </a>
</li>