import { PieceProps } from "./../types/props";
import type { Readable, Writable } from "svelte/store";

declare const pieces: {
  p1: PieceProps[];
  p2: PieceProps[];
  p3: PieceProps[];
  p4: PieceProps[];
};

declare const players: PieceProps[];

export const piecesLocation: Writable<{}>;
export const homes: Writable<{}>;
export const safeZones: Readable<{
  p1: number[];
  p2: number[];
  p3: number[];
  p4: number[];
}>;
