import { atom } from "jotai";

const nodesAtom = atom([
  {
    id: "g1v9znxre65gcj854edcvcl8",
    type: "startEndBlock",
    data: {
      label: "Start",
      id: "g1v9znxre65gcj854edcvcl8",
    },
    position: {
      x: 92.22242187499998,
      y: -73.86271423339844,
    },
    width: 144,
    height: 40,
    selected: false,
    positionAbsolute: {
      x: 92.22242187499998,
      y: -73.86271423339844,
    },
    dragging: false,
  },
  {
    id: "ixkf2hmuvuz8hfehkpmbi4bq",
    type: "dataBlock",
    data: {
      id: "ixkf2hmuvuz8hfehkpmbi4bq",
    },
    position: {
      x: 101.07114868164061,
      y: 3.1164025878906614,
    },
    width: 132,
    height: 71,
    selected: false,
    positionAbsolute: {
      x: 101.07114868164061,
      y: 3.1164025878906614,
    },
    dragging: false,
  },
  {
    id: "r13m1lpcieuisov8ztzcqgmh",
    type: "decisionBlock",
    data: {
      id: "r13m1lpcieuisov8ztzcqgmh",
    },
    position: {
      x: 209.50266113281253,
      y: 227.328125,
    },
    width: 92,
    height: 92,
    selected: false,
    positionAbsolute: {
      x: 209.50266113281253,
      y: 227.328125,
    },
    dragging: false,
  },
  {
    id: "yoc5v5g9yemt39wew1sdxnjs",
    type: "startEndBlock",
    data: {
      label: "End",
      id: "yoc5v5g9yemt39wew1sdxnjs",
    },
    position: {
      x: 55.07744140624999,
      y: 364.1934692382813,
    },
    width: 144,
    height: 40,
    selected: false,
    positionAbsolute: {
      x: 55.07744140624999,
      y: 364.1934692382813,
    },
    dragging: false,
  },
  {
    id: "p2nne0rvqvfxtqjm9jc829vu",
    type: "startEndBlock",
    data: {
      label: "End",
      id: "p2nne0rvqvfxtqjm9jc829vu",
    },
    position: {
      x: 273.52159423828124,
      y: 350.9554809570312,
    },
    width: 144,
    height: 40,
    selected: false,
    positionAbsolute: {
      x: 273.52159423828124,
      y: 350.9554809570312,
    },
    dragging: false,
  },
  {
    id: "qtnfpyfnqyca2hcttjtwqzfr",
    type: "processBlock",
    data: {
      id: "qtnfpyfnqyca2hcttjtwqzfr",
    },
    position: {
      x: 106.91387329101562,
      y: 106.68356689453128,
    },
    width: 132,
    height: 63,
    selected: false,
    positionAbsolute: {
      x: 106.91387329101562,
      y: 106.68356689453128,
    },
    dragging: false,
  },
]);
const edgesAtom = atom([
  {
    source: "r13m1lpcieuisov8ztzcqgmh",
    sourceHandle: "a",
    target: "yoc5v5g9yemt39wew1sdxnjs",
    targetHandle: null,
    id: "reactflow__edge-r13m1lpcieuisov8ztzcqgmha-yoc5v5g9yemt39wew1sdxnjs",
  },
  {
    source: "r13m1lpcieuisov8ztzcqgmh",
    sourceHandle: "b",
    target: "p2nne0rvqvfxtqjm9jc829vu",
    targetHandle: null,
    id: "reactflow__edge-r13m1lpcieuisov8ztzcqgmhb-p2nne0rvqvfxtqjm9jc829vu",
  },
  {
    source: "g1v9znxre65gcj854edcvcl8",
    sourceHandle: null,
    target: "ixkf2hmuvuz8hfehkpmbi4bq",
    targetHandle: null,
    id: "reactflow__edge-g1v9znxre65gcj854edcvcl8-ixkf2hmuvuz8hfehkpmbi4bq",
  },
  {
    source: "ixkf2hmuvuz8hfehkpmbi4bq",
    sourceHandle: null,
    target: "qtnfpyfnqyca2hcttjtwqzfr",
    targetHandle: null,
    id: "reactflow__edge-ixkf2hmuvuz8hfehkpmbi4bq-qtnfpyfnqyca2hcttjtwqzfr",
  },
  {
    source: "qtnfpyfnqyca2hcttjtwqzfr",
    sourceHandle: null,
    target: "r13m1lpcieuisov8ztzcqgmh",
    targetHandle: null,
    id: "reactflow__edge-qtnfpyfnqyca2hcttjtwqzfr-r13m1lpcieuisov8ztzcqgmh",
  },
]);
const inputValuesAtom = atom({
  ixkf2hmuvuz8hfehkpmbi4bq: "tablica = [1,2,2];\ni = 5;",
  r13m1lpcieuisov8ztzcqgmh: "tablica[1] > 5;",
  qtnfpyfnqyca2hcttjtwqzfr: "i++;",
});
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
