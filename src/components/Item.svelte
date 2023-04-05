<script>
    export let item;
</script>

<article>
    <input type="checkbox" bind:checked={item.checked}/>
    <span class="name">{item.name}</span>
    <span class="price">{item.price}</span>
</article>