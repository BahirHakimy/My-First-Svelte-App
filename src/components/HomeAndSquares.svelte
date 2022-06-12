<script lang="ts">
  import Squares from "./Squares.svelte";
  import Home from "./Home.svelte";
  import type { PlayerProps } from "../types/props";
  import { piecesLocation } from "../context/mainStore";
  import { beforeUpdate } from "svelte";

  export let player: PlayerProps = {};

  beforeUpdate(() => {
    console.log("updating");
  });

  piecesLocation.subscribe((a) => {
    player = player;
  });
</script>

<div
  class={`playerContainer${
    player.id === 2 || player.id === 3 ? "" : "V"
  } player${player.id}`}
>
  {#if player.id % 2 === 0}
    <Squares {...player} />
  {/if}
  <Home props={player} pieces={$piecesLocation[`p${player.id}`]} />
  {#if player.id % 2 != 0}
    <Squares {...player} />
  {/if}
</div>

<style>
  .playerContainerV {
    display: flex;
    flex-direction: column;
    height: 360px;
    width: 240px;
  }
  .playerContainer {
    display: flex;
    width: 360px;
    height: 240px;
  }
  .player1 {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 3;
  }
  .player2 {
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
  }
  .player3 {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 4;
  }
  .player4 {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 4;
  }
</style>
