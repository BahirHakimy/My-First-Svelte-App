import { readable, writable } from "svelte/store";

const players = [
  { color: "tomato", id: 1 },
  { color: "dodgerblue", id: 2 },
  { color: "gold", id: 3 },
  { color: "green", id: 4 },
];

const safeAreas = {
  p1: [2, 8, 9, 10, 11, 12, 15],
  p2: [5, 6, 7, 8, 11, 14, 17],
  p3: [2, 5, 8, 11, 14, 13, 12],
  p4: [4, 7, 8, 9, 10, 11, 17],
};

const pieces = {
  p1: [
    { location: "p1s$18", id: "p1-1", type: "tomato" },
    { location: "h", id: "p1-2", type: "tomato" },
    { location: "h", id: "p1-3", type: "tomato" },
    { location: "h", id: "p1-4", type: "tomato" },
  ],
  p2: [
    { location: "p2s$16", id: "p2-1", type: "blue" },
    { location: "h", id: "p2-2", type: "blue" },
    { location: "h", id: "p2-3", type: "blue" },
    { location: "h", id: "p2-4", type: "blue" },
  ],
  p3: [
    { location: "p3s$6", id: "p3-1", type: "gold" },
    { location: "h", id: "p3-2", type: "gold" },
    { location: "h", id: "p3-3", type: "gold" },
    { location: "h", id: "p3-4", type: "gold" },
  ],
  p4: [
    { location: "p4s$2", id: "p4-1", type: "green" },
    { location: "h", id: "p4-2", type: "green" },
    { location: "h", id: "p4-3", type: "green" },
    { location: "h", id: "p4-4", type: "green" },
  ],
};

const piecesLocation = writable(pieces);

const safeZones = readable(safeAreas);

const homes = writable(players);

export { safeZones, piecesLocation, homes };
