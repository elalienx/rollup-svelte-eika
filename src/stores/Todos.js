import { writable } from "svelte/store";

export const todos = writable([
  { name: "Chair", price: 100, checked: true },
  { name: "Table", price: 200, checked: true },
  { name: "Sofa", price: 100, checked: false },
]);
