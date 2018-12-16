const maze = [
    [ ' ', '*'],
    [ ' ', ' '],
    [ ' ', 'e'],
];

/// find and print all paths(sequences of moves) that avoid the "*" and reach the "e" exit. No diagonal moves allowed, only one step at a time
let arrOfPath = [];
const findAllPathsThrowMaze = function (maze, row, col, move) {

    if (!maze[row] || !maze[row][col]) {
        return;
    }

    if (move) {
        arrOfPath.push(move);
    }

    if (maze[row][col] === "e") {
        console.log(arrOfPath);
    }

    if (maze[row][col] === " ") {
        maze[row][col] = undefined;
        findAllPathsThrowMaze(maze, row + 1, col, "d");
        findAllPathsThrowMaze(maze, row - 1, col, "u");
        findAllPathsThrowMaze(maze, row, col + 1, "r");
        findAllPathsThrowMaze(maze, row, col - 1, "l");
        maze[row][col] = ' ';
    }

    arrOfPath = arrOfPath.slice(0, arrOfPath.length - 1);

}
console.log(findAllPathsThrowMaze(maze, 0, 0, ""));

//// Large problem - print all paths that lead to the exit "e" of the maze, without going outside and avoiding "*"

/// Base case - when the current position is "e" => console.log(path), when the current position is outside of the matrix => return 
/// Base case + 1 - when current position is " " => start searching for paths by making 1 step moves