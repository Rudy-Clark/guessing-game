const cells = [];
// eslint-disable-next-line no-plusplus
for (let i = 0; i < 16; i++) {
  cells.push({ id: i, color: i % 2 === 0 ? 'red' : 'default', clicked: false });
}

const reducerCells = (state = cells, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducerCells;
