import type { PieceProps } from "../types/props";
import { piecesLocation, pieces } from "../context/mainStore";

const nextMoves = {
  p1s$1: "p1s$2",
  p1s$2: "p1s$3",
  p1s$3: "p1s$4",
  p1s$4: "p1s$5",
  p1s$5: "p1s$6",
  p1s$7: "p1s$1",
  p1s$7self: "p1s$8",
  p1s$8: "p1s$9",
  p1s$9: "p1s$10",
  p1s$10: "p1s$11",
  p1s$11: "p1s$12",
  p1s$12: "w",
  p1s$13: "p1s$7",
  p1s$14: "p1s$13",
  p1s$15: "p1s$14",
  p1s$16: "p1s$15",
  p1s$17: "p1s$16",
  p1s$18: "p1s$17",
  p1s$6: "p2s$16",
  p2s$1: "p2s$2",
  p2s$2: "p2s$3",
  p2s$2self: "p2s$5",
  p2s$3: "p2s$6",
  p2s$4: "p2s$1",
  p2s$5: "p2s$8",
  p2s$6: "p2s$9",
  p2s$7: "p2s$4",
  p2s$8: "p2s$11",
  p2s$9: "p2s$12",
  p2s$10: "p2s$7",
  p2s$11: "p2s$14",
  p2s$12: "p2s$15",
  p2s$13: "p2s$10",
  p2s$14: "p2s$17",
  p2s$15: "p2s$18",
  p2s$16: "p2s$13",
  p2s$17: "w",
  p2s$18: "p3s$1",
  p3s$1: "p1s$18",
  p3s$2: "w",
  p3s$3: "p3s$6",
  p3s$4: "p3s$1",
  p3s$5: "p3s$2",
  p3s$6: "p3s$9",
  p3s$7: "p3s$4",
  p3s$8: "p3s$5",
  p3s$9: "p3s$12",
  p3s$10: "p3s$7",
  p3s$11: "p3s$8",
  p3s$12: "p3s$15",
  p3s$13: "p3s$10",
  p3s$14: "p3s$11",
  p3s$15: "p3s$18",
  p3s$16: "p3s$13",
  p3s$17: "p3s$16",
  p3s$17self: "p3s$14",
  p3s$18: "p3s$17",
  p4s$1: "p4s$2",
  p4s$2: "p4s$3",
  p4s$3: "p4s$4",
  p4s$4: "p4s$5",
  p4s$5: "p4s$6",
  p4s$6: "p4s$12",
  p4s$7: "w",
  p4s$8: "p4s$7",
  p4s$9: "p4s$8",
  p4s$10: "p4s$9",
  p4s$11: "p4s$10",
  p4s$12: "p4s$18",
  p4s$12self: "p4s$11",
  p4s$13: "p3s$3",
  p4s$14: "p4s$13",
  p4s$15: "p4s$14",
  p4s$16: "p4s$15",
  p4s$17: "p4s$16",
  p4s$18: "p4s$17",
};
const selfMoves = ["p1s$7", "p2s$2", "p3s$17", "p4s$12"];

export function getNextMove(piece: PieceProps, currentHomeId: number): string {
  return piece.location.startsWith(`p${currentHomeId}`) &&
    selfMoves.includes(piece.location)
    ? nextMoves[`${piece.location}self`]
    : nextMoves[piece.location];
}

export function updatePieceLocation(piece: PieceProps, newAddress: string) {
  const pieceCategory = piece.id.split("-")[0];
  piecesLocation.update((current) => {
    let index = current[pieceCategory].indexOf(piece);
    piece.location = newAddress;
    current[pieceCategory][index] = piece;
    return current;
  });
}
