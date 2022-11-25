import { useState } from "react";

// TODO: Refactor into something nicer
class Transition {
  input: string;
  nextState: State;

  constructor(input: string, nextState: State) {
    this.input = input;
    this.nextState = nextState;
  }
}

class State {
  name: string;
  transitions: Transition[];

  constructor(name: string, transitions?: Transition[]) {
    this.name = name;
    this.transitions = transitions === undefined ? [] : transitions;
  }
}

class DFA {
  name: string;
  alphabet: string;
  states: State[];
  startState?: State;
  acceptingState?: State;

  constructor(name: string, alphabet: string) {
    this.name = name;
    this.alphabet = alphabet;
    this.states = [];
    this.startState = undefined;
    this.acceptingState = undefined;
  }
}

const Board = () => {
  const [DFAs, setDFAs] = useState<DFA[]>([]);
  return <div></div>;
};

export default Board;
