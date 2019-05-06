// constant types for action handle
export const SELECT = 'SELECT';
export const START_GAME = 'START_GAME';
export const CHOICE = 'CHOICE';
export const HIDE_CELLS = 'HIDE_CELLS';
export const END_GAME = 'END_GAME';

// actions
export const selectItem = id => ({
  id,
  type: SELECT,
});

export const choiceItem = color => ({
  color,
  type: CHOICE,
});

export const startGame = () => ({
  type: START_GAME,
});

export const hideCells = () => ({
  type: HIDE_CELLS,
});

export const endGame = () => ({
  type: END_GAME,
});
