<script>
  import {todos} from "../stores/Todos"

  export let item

  function updateItem(item) {
    const currentId = item.id;
    const newItem = { ...item };
    
    newItem.checked = !item.checked;
    todos.update(todos => {
      const index = todos.findIndex(item => item.id === currentId);

      if (index !== -1) {
        todos.splice(index, 1, newItem);
      }
      
      return todos;
      });
  }
</script>

<article>
    <input type="checkbox" bind:checked={item.checked} on:change={updateItem}/>
    <span class="id">#{item.id}</span>
    <span class="name">{item.name}</span>
    <span class="price">{item.price}</span>
</article>