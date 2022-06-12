<script lang="ts">
  // import { createEventDispatcher } from "svelte";

  import type { PieceProps } from "../types/props";

  export let props: PieceProps = { id: "", type: "tomato", location: "h" };
  export let inHome: boolean = false;

  // const dispatch = createEventDispatcher();
  // function handleClick(event) {
  //   event.preventDefault();
  //   dispatch("updateLocation", props);
  //   console.log("from inside");
  // }
</script>

<img
  on:click
  class="image"
  style={`transform: ${inHome ? "rotate(316deg)" : "none"}`}
  src={`pieces/${props.type}.png`}
  alt="green"
/>

<style>
  .image {
    height: 35px;
    width: auto;
  }
</style>
