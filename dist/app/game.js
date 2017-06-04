System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DIMENSION, game;
    return {
        setters:[],
        execute: function() {
            DIMENSION = 12;
            game = {
                createBoard: function () {
                    var board = [];
                    for (var row = 0; row < DIMENSION; row++) {
                        board[row] = [];
                        for (var col = 0; col < DIMENSION; col++) {
                            board[row][col] = null;
                        }
                    }
                    return board;
                },
            };
            exports_1("default",game);
        }
    }
});
//# sourceMappingURL=game.js.map