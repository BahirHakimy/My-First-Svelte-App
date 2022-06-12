<script lang="ts">
  import type { PieceProps, PlayerProps } from "../types/props";
  import { piecesLocation, safeZones } from "../context/mainStore";
  import Square from "./Square.svelte";
  import { getNextMove, updatePieceLocation } from "../utils/helperFunctions";

  export let { color, id }: PlayerProps = {};

  let vertical = id === 2 || id === 3;
  let array = Array.from(Array(18).keys());

  function hasPiece(address: string): PieceProps {
    let piecesInAddress = [];
    Object.keys($piecesLocation).forEach((key) => {
      const piecesInSquare = $piecesLocation[key].filter(
        (piece: PieceProps) => piece.location === address
      );
      piecesInAddress = [...piecesInAddress, ...piecesInSquare];
    });

    return piecesInAddress[0];
  }

  function move({ detail: { piece } }: { detail: { piece: PieceProps } }) {
    updatePieceLocation(
      piece,
      getNextMove(piece, Number.parseInt(piece.id.substring(1, 2)))
    );
    console.log($piecesLocation);

    array = Array.from(Array(18).keys());
  }
</script>

<div class={vertical ? "squaresContainerV" : "squaresContainer"}>
  {#key $piecesLocation}
    {#each array as c}
      <Square
        on:squareClick={move}
        color={$safeZones[`p${id}`].indexOf(c + 1) === -1 ? "#ccc" : color}
        address={`p${id}s$${c + 1}`}
        piece={hasPiece(`p${id}s$${c + 1}`)}
      />
    {/each}
  {/key}
</div>

<style>
  .squaresContainer {
    display: grid;
    grid-template-columns: 40px 40px 40px 40px 40px 40px;
    grid-template-rows: 40px 40px 40px;
  }
  .squaresContainerV {
    display: grid;
    grid-template-columns: 40px 40px 40px;
    grid-template-rows: 40px 40px 40px 40px 40px 40px;
  }
</style>
