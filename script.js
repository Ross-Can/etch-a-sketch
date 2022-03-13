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
        newRow.appendChild(newSquare);
    }
    grid.appendChild(newRow);  
}
applyHover();
}



let changeColor = (square) => {
    square.style.backgroundColor = "black";
    let blackness = 25.6;
   
};



function eraseGrid(){
    squares.forEach((square) => {
        square.style.backgroundColor = "white";
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
    while(isNaN(query))
    query = prompt("Please enter a number");
    createGrid(query);
}



