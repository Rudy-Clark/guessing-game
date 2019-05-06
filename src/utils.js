/* eslint-disable no-param-reassign */

import {
  red,
  green,
  blue,
  purple,
  indigo,
  cyan,
  yellow,
  brown,
} from '@material-ui/core/colors';

const main = 500;
export const colors = [
  red[main],
  green[main],
  blue[main],
  purple[main],
  indigo[main],
  cyan[main],
  yellow[main],
  brown[main],
];

// Generate unique id
const generateId = length => {
  const symbols = 'ABCDEFGHKLMNOPRSTQUVXYZWabcdefghklmnoprstquvxyzw1234567890';
  let result = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < length; i++) {
    result += symbols.charAt(Math.floor(Math.random() * symbols.length));
  }
  return result;
};

export const getFormattedTime = startedAt => {
  const timestamp = new Date(Date.now() - startedAt);
  const sec =
    timestamp.getSeconds() < 10
      ? `0${timestamp.getSeconds()}`
      : timestamp.getSeconds();
  const min =
    timestamp.getMinutes() < 10
      ? `0${timestamp.getMinutes()}`
      : timestamp.getMinutes();
  return { sec, min };
};

export const defaultState = () => {
  const cells = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 16; i++) {
    cells.push({
      id: generateId(5),
      color: '',
      selected: false,
      hidden: false,
      done: false,
      prepareToHide: false,
    });
  }
  return cells;
};
