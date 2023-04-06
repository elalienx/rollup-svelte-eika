<script>
    import Item from "./Item.svelte";

    export let items;
</script>

{#if items.length == 0}<p>Nothing to show</p>{/if}
<ul>
    {#each items as item}
    <Item item={item} />
	{/each}
</ul>