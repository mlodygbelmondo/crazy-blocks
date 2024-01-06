import { atom } from "jotai";

const nodesAtom = atom([]);
const edgesAtom = atom([]);
const inputValuesAtom = atom({});
const currentNodeIdAtom = atom("");

export { nodesAtom, edgesAtom, inputValuesAtom, currentNodeIdAtom };
