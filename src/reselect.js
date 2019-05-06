import { createSelector } from 'reselect';

const mapCells = cells => cells.map(cell => ({ ...cell }));

export const calcResult = createSelector(
  [mapCells],
  cells => {
    const total = cells.length / 2;
    const attempts = cells.filter(cell => cell.done).length / 2;
    const found = cells.filter(cell => cell.done && !cell.hidden).length / 2;
    return {
      total,
      attempts,
      found,
    };
  },
);
