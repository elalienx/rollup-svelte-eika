<script>
  import {todos} from "../stores/Todos"

  let name = "Table"
  let price = "99"

  function onSubmit(event) {
    event.preventDefault()

    const newTodo = { name: name, price: price, checked: false }

    todos. update((todos)=>{
      console.log(newTodo)
      return [...todos, newTodo]
    })
  }
</script>

<form on:submit={onSubmit}>
  <input type="text" bind:value={name}/>
  <input type="number" bind:value={price} min=1 />
  <button>Add item</button>
</form>