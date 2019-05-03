import { SELECT, START_GAME } from '../actions';
import { defaultState } from '../utils';

const reducerCells = (state = defaultState(), action) => {
  switch (action.type) {
    case SELECT:
      return state.map(item => {
        if (item.id === action.id) item.clicked = !item.clicked;
        else item.clicked = false;
        return item;
      });
    case START_GAME:
      return state;
    default:
      return state;
  }
};

export default reducerCells;
