<script lang="ts">
  import { createEventDispatcher } from "svelte";

  import type { PieceProps } from "../types/props";
  import Piece from "./Piece.svelte";

  export let piece: PieceProps = null;
  export let color: string = "golden";
  export let address: string;

  const dispatch = createEventDispatcher();

  function movePiece() {
    if (!piece) return;
    dispatch("squareClick", { piece, currentAddress: address });
  }
</script>

<div class="square" on:click={movePiece} style="background-color: {color};">
  {#if piece}
    <Piece props={piece} />
  {/if}
</div>

<style>
  .square {
    display: flex;
    user-select: none;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid #444;
  }
</style>
