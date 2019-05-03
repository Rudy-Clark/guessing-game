// constant types for action handle
export const SELECT = 'SELECT';
export const START_GAME = 'START_GAME';

// actions
export const selectItem = id => ({
  id,
  type: SELECT,
});

export const startGame = () => ({
  type: START_GAME,
});
