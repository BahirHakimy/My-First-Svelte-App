<script lang="ts">
  import type { PieceProps, PlayerProps } from "../types/props";
  import Piece from "./Piece.svelte";

  export let props: PlayerProps = { color: "", id: 0 };
  export let pieces: PieceProps[] = [];
</script>

<div class="pieceContainer" style={`background-color: ${props.color};`}>
  <div class="wrapper">
    {#each pieces as piece}
      <div class="pieceFrame">
        {#if piece.location === "h"}
          <Piece props={piece} inHome />
        {/if}
      </div>
    {/each}
  </div>
</div>

<style>
  .pieceContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 240px;
    height: 240px;
    border-radius: 10px;
    background-color: springgreen;
  }
  .wrapper {
    display: grid;
    grid-template-columns: 85px 85px;
    grid-template-rows: 85px 85px;
    height: 170px;
    width: 170px;
    background-color: #ccc;
    border-radius: 20px;
    transform: rotate(45deg);
  }
  .pieceFrame {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 50px;
    height: 50px;
    border-radius: 25px;

    background-color: white;
  }
</style>
