/* eslint-disable no-param-reassign */
import _zip from 'lodash/zip';

import { SELECT, START_GAME } from '../actions';
import { defaultState, colors } from '../utils';

const reducerCells = (state = defaultState(), action) => {
  const lottoBox = _zip(colors, colors);
  switch (action.type) {
    case SELECT:
      return state.map(item => {
        if (item.id === action.id) item.selected = !item.selected;
        else item.selected = false;
        return item;
      });
    case START_GAME:
      // eslint-disable-next-line no-plusplus
      return state.map(cell => {
        const randomIndex = Math.floor(Math.random() * (lottoBox.length - 1));
        if (lottoBox[randomIndex].length > 1) {
          const [color] = lottoBox[randomIndex].splice(0, 1);
          cell.color = color;
        } else {
          const [[color]] = lottoBox.splice(randomIndex, 1);
          cell.color = color;
          cell.hidden = true;
        }
        return cell;
      });
    default:
      return state;
  }
};

export default reducerCells;
