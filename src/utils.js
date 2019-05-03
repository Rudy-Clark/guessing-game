import {
  red,
  green,
  blue,
  purple,
  indigo,
  cyan,
  yellow,
  grey,
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
  grey[main],
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

export const defaultState = () => {
  const cells = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 16; i++) {
    cells.push({
      id: generateId(5),
      color: '#00bcd4',
      clicked: false,
    });
  }
  return cells;
};
