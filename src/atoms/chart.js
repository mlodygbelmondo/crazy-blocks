import { atom } from "jotai";

const nodesAtom = atom([]);
const edgesAtom = atom([]);
const inputValuesAtom = atom({});
const currentNodeIdAtom = atom("");
const variablesAtom = atom({});
const isAppRunningAtom = atom(false);

export {
  nodesAtom,
  edgesAtom,
  inputValuesAtom,
  currentNodeIdAtom,
  variablesAtom,
  isAppRunningAtom,
};
