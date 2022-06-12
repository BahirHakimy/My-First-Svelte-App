<script lang="ts">
  import type { PlayerProps } from "../types/props";
  export let players: PlayerProps[] = [];

  let styles = players.map(({ id, color }) => {
    return `
    ${id === 1 ? "left" : id === 2 ? "top" : id === 3 ? "right" : "bottom"}:0;
    ${
      id !== 1
        ? `border-right: 60px solid ${
            id === 3 ? players[3].color : "transparent"
          }`
        : ""
    };
    ${
      id !== 2
        ? `border-bottom: 60px solid ${
            id === 4 ? players[2].color : "transparent"
          }`
        : ""
    };
    ${
      id !== 3
        ? `border-left: 60px solid ${id === 1 ? color : "transparent"}`
        : ""
    };
    ${
      id !== 4
        ? `border-top: 60px solid ${id === 2 ? color : "transparent"}`
        : ""
    };
    `;
  });
</script>

<div class="middleSquare">
  {#each players as p}
    <div class={`triangle p${p.id}`} style={styles[p.id - 1]} />
  {/each}
</div>

<style>
  .middleSquare {
    position: inherit;
    width: 120px;
    height: 120px;
  }
  .triangle {
    position: absolute;
  }

  .middleSquare > div {
    width: 0;
    height: 0;
  }
</style>
