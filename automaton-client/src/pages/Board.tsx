import { useState } from "react";
import Toolbar from "../components/projects/Toolbar";

// TODO: Refactor into something nicer
class Transition {
  input: string;
  nextState: State;

  constructor(input: string, nextState: State) {
    this.input = input;
    this.nextState = nextState;
  }
}

export class State {
  name: string;
  transitions: Transition[];

  constructor(name: string, transitions?: Transition[]) {
    this.name = name;
    this.transitions = transitions === undefined ? [] : transitions;
  }

  addTransition(transitionInput: string, nextState: State): boolean {
    let newTransition = new Transition(transitionInput, nextState);

    if (this.transitions.includes(newTransition)) return false;

    this.transitions.push(newTransition);
    return true;
  }

  removeTransition(transitionInput: string, nextState: State): boolean {
    let delTransition = new Transition(transitionInput, nextState);
    const index = this.transitions.indexOf(delTransition);

    if (index > -1) {
      this.transitions.splice(index, 1);
      return true;
    }

    return false;
  }
}

export class DFA {
  name: string;
  alphabet: string;
  states: State[];
  startState?: State;
  acceptingStates: State[];

  constructor(name: string, alphabet: string) {
    this.name = name;
    this.alphabet = alphabet;
    this.states = [];
    this.startState = undefined;
    this.acceptingStates = [];
  }

  addState(name: string) {
    let newState = new State(name);
    this.states.push(newState);
  }

  addAcceptingState(stateName: string): boolean {
    const index = this.states.map((cur) => cur.name).indexOf(stateName);

    // Should in theory never fail
    if (index > -1) {
      this.acceptingStates.push(this.states[index]);
      return true;
    }
    return false;
  }

  set start(newStart: string) {
    this.startState = this.states.find(
      (currentState) => currentState.name === newStart
    );
  }
}

const Board = () => {
  // DFAs in this project
  const [DFAs, setDFAs] = useState<DFA[]>([]);

  // State hooks to modify current DFA
  const [transition, setTransition] = useState<Transition>();
  const [state, setState] = useState<State>();

  return (
    <div className="flex flex-col">
      <Toolbar dfas={DFAs} />
    </div>
  );
};

export default Board;
