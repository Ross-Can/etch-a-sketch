createGrid(16);

function applyHover(){
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', function(){
            changeColor(square)
        });
    });
}

function createGrid(numOfRows){
    let grid = document.querySelector('.grid');
    for(let row=0; row<numOfRows; row++){
    let newRow = document.createElement('div');
    newRow.classList = "row";
    for(let square = 0; square < numOfRows; square++){
        let newSquare = document.createElement('div');
        newSquare.classList = "square";
        newSquare.style.backgroundColor = "rgb(255, 255, 255)";
        newRow.appendChild(newSquare);
    }
    grid.appendChild(newRow);  
}
applyHover();
}

let changeColor = (square) => {
   
    let rgbCode = square.style.backgroundColor;
    
    rgbCode = rgbCode.substring(rgbCode.indexOf('(') + 1, rgbCode.indexOf(','));
    console.log(rgbCode);
    if (parseInt(rgbCode) <= 0) return;
    let code = parseInt(rgbCode) - 25;
    console.log(code);
    square.style.backgroundColor = `rgb(${code},${code},${code})`;
};

function eraseGrid(){
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.style.backgroundColor = "rgb(255, 255, 255)";
    });
}

function removeGrid(){
    let gridContainer = document.querySelector(".grid-container");
    while(gridContainer.firstChild)
    gridContainer.removeChild(gridContainer.firstChild);
    let grid = document.createElement("div");
    grid.classList = "grid";
    gridContainer.appendChild(grid);
}

function createUserGrid(){
    removeGrid();
    let query = prompt("Enter the amount of rows x columns you want");
    while(isNaN(query) || query >100)
    query = prompt("Please enter a number less than 100");
    createGrid(query);
}



