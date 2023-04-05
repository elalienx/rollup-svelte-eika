<script>
  import Form from "./components/Form.svelte"
  import List from "./components/List.svelte"
  import {todos} from "./stores/Todos"

  let isChecked = false
</script>

<main>
  <h1>Welcome to EIKA 7</h1>
  <Form/>
  <List items={$todos.filter(item => !item.checked)}/>
  <button on:click={() => isChecked = !isChecked}>Show adquired items</button>
  {#if isChecked}
    <List items={$todos.filter(item => item.checked)}/>
  {/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>