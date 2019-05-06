import { HIDE_CELLS, START_GAME, END_GAME } from '../actions';

const initialState = {
  gameRun: false,
  startedAt: null,
};

const reducerTimer = (state = initialState, action) => {
  switch (action.type) {
    case HIDE_CELLS:
      return {
        gameRun: true,
        startedAt: Date.now(),
      };
    case START_GAME:
      return initialState;
    case END_GAME:
      return {
        ...state,
        gameRun: false,
      };
    default:
      return state;
  }
};

export default reducerTimer;
