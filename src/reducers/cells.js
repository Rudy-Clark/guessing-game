import { zip as _zip, random as _random } from 'lodash';

import { SELECT, START_GAME, CHOICE } from '../actions';
import { defaultState, colors } from '../utils';

const reducerCells = (state = defaultState(), action) => {
  switch (action.type) {
    case SELECT: {
      console.log(action.id);
      return state.map(item => {
        const newItem = { ...item, selected: false };
        if (item.id === action.id) newItem.selected = !item.selected;
        return newItem;
      });
    }
    case START_GAME: {
      const lottoBox = _zip(colors, colors);
      return state.map(cell => {
        const newCell = {
          ...cell,
          color: '',
          hidden: false,
          selected: false,
          done: false,
        };
        // const randomIndex = Math.floor(Math.random() * lottoBox.length); // native method
        const randomIndex = _random(0, lottoBox.length - 1);
        if (lottoBox[randomIndex].length > 1) {
          const [color] = lottoBox[randomIndex].splice(0, 1);
          newCell.color = color;
        } else {
          const [[color]] = lottoBox.splice(randomIndex, 1);
          newCell.color = color;
          newCell.hidden = true;
        }
        return newCell;
      });
    }
    case CHOICE: {
      const selectedItems = state.filter(cell => cell.selected);
      if (!selectedItems.length) return state;
      const [selItem] = selectedItems;
      return state.map(cell => {
        const newCell = { ...cell, selected: false };
        if (newCell.id === selItem.id || newCell.id === action.id) {
          newCell.hidden =
            newCell.color !== action.color || selItem.color !== action.color;
          newCell.done = true;
        }
        return newCell;
      });
    }
    default:
      return state;
  }
};

export default reducerCells;
