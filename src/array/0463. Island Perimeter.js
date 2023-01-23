/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
    // let res = 0;
    
    // for (let i = 0; i < grid.length; i++) {
    //     for (let j = 0; j < grid[i].length; j++) {
    //         if (grid[i][j] == 1) {
    //             if (i == 0 || grid[i - 1][j] == 0) res++;
    //             if (i == grid.length - 1 || grid[i + 1][j] == 0) res++;
    //             if (j == 0 || grid[i][j - 1] == 0) res++;
    //             if (j == grid[i].length - 1 || grid[i][j + 1] == 0) res++;
    //         }
    //     }
    // }

    // return res;

    let islands = 0;
    let neighbours = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == 1) {
                islands++;
                if (i < grid.length - 1 && grid[i + 1][j] == 1) neighbours++;
                if (j < grid[i].length - 1 && grid[i][j + 1] == 1) neighbours++;
            }
        }
    }

    return islands * 4 - neighbours * 2;
};
