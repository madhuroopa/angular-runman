let DIMENSION = 12;
let game = {
createBoard() {
    let board = [];
    for (let row = 0; row < DIMENSION; row++) {
      board[row] = [];
      for (let col = 0; col < DIMENSION; col++) {
        board[row][col] = null;
      }
    }

    return board;
  },
 
};

export default game;
