<script lang="ts">
  import HomeAndSquares from "./components/HomeAndSquares.svelte";
  import WinSquares from "./components/WinSquares.svelte";
  import type { PlayerProps } from "./types/props";

  let players: PlayerProps[] = [
    { color: "tomato", id: 1 },
    { color: "dodgerblue", id: 2 },
    { color: "gold", id: 3 },
    { color: "green", id: 4 },
  ];
</script>

<main>
  <div id="gameContainer">
    {#each players as player}
      <HomeAndSquares {player} />
      {#if player.id === 2}
        <WinSquares {players} />
      {/if}
    {/each}
  </div>
</main>

<style>
  main {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #gameContainer {
    display: grid;
    grid-template-columns: 240px auto 240px;
    grid-template-rows: 240px auto 240px;
    position: relative;
    width: 600px;
    height: 600px;
    border-radius: 10px;
    background: lightsalmon;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
