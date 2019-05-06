// constant types for action handle
export const SELECT = 'SELECT';
export const START_GAME = 'START_GAME';
export const CHOICE = 'CHOICE';
export const HIDE_CELLS = 'HIDE_CELLS';

// actions
export const selectItem = id => ({
  id,
  type: SELECT,
});

export const choiceItem = (color, id) => ({
  id,
  color,
  type: CHOICE,
});

export const startGame = () => ({
  type: START_GAME,
});

export const hideCells = () => ({
  type: HIDE_CELLS,
});
