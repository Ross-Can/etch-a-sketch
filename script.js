/**
 * Default grid creation
 * 16x16
 */
createGrid(16);

/**
 * Applys the function that changes the color on "mouse over" 
 * of the square
 */
function applyHover() {
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', function() {
            changeColor(square)
        });
    });
}

/**
 * Prints a new grid into grid div.
 * @param {*} numOfRows - size of rows and collumns you want your grid to be.
 */
function createGrid(numOfRows) {
    let grid = document.querySelector('.grid');
    for (let row = 0; row < numOfRows; row++) {
        let newRow = document.createElement('div');
        newRow.classList = "row";
        for (let square = 0; square < numOfRows; square++) {
            let newSquare = document.createElement('div');
            newSquare.classList = "square";
            newSquare.style.backgroundColor = "rgb(255, 255, 255)";
            newRow.appendChild(newSquare);
        }
        grid.appendChild(newRow);
    }
    applyHover();
}

/**
 * Takes the element provided and make the elements color blacker
 * each time changeColor is called until the element is completely 
 * black.
 * @param {*} square - element whose color is to be changed.
 */
let changeColor = (square) => {
    let rgbCode = square.style.backgroundColor;
    rgbCode = rgbCode.substring(rgbCode.indexOf('(') + 1, rgbCode.indexOf(','));

    if (!parseInt(rgbCode) <= 0) {
        let code = parseInt(rgbCode) - 25;
        square.style.backgroundColor = `rgb(${code},${code},${code})`;
    }
};

/**
 * Changes the background color of the grid to white/rgb(255,255,255).
 */
function eraseGrid() {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.style.backgroundColor = "rgb(255, 255, 255)";
    });
}

/**
 * Removes the previous grid and replaces it with a brand new one.
 */
function removeGrid() {
    let gridContainer = document.querySelector(".grid-container");
    while (gridContainer.firstChild)
        gridContainer.removeChild(gridContainer.firstChild);
    let grid = document.createElement("div");
    grid.classList = "grid";
    gridContainer.appendChild(grid);
}

/**
 * Gives user the ability to change the size of the grid.
 * If the users query is not < 100 or a number it ask for the correct value
 * Current Max grid size:99; 
 */
function createUserGrid() {
    removeGrid();
    let query = prompt("Enter the amount of rows x columns you want");
    while (isNaN(query) || query > 100)
        query = prompt("Please enter a number less than 100");
    createGrid(query);
}