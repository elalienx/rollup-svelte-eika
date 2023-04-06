<script>
  import Form from "./components/Form.svelte"
  import List from "./components/List.svelte"
  import {todos} from "./stores/Todos"

  $: pending = $todos.filter(item => !item.checked)
  $: adquired = $todos.filter(item => item.checked)
  let isChecked = false
</script>

<main>
  <h1>Welcome to EIKA 7</h1>
  <Form/>
  <List items={pending}/>
  <button on:click={() => isChecked = !isChecked}>
	{isChecked ? "Hide" : "Show"} adquired items
  </button>
  {#if isChecked} <List items={adquired}/> {/if}
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