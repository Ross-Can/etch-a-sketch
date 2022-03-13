let grid = document.querySelector('.grid');

let numOfRows = 16;
let numOfCols = 16;

for(let row=0; row<numOfRows; row++){
    let newRow = document.createElement('div');
    newRow.classList = "row";
    for(let square = 0; square < numOfCols; square++){
        let newSquare = document.createElement('div');
        newSquare.classList = "square";
        newRow.appendChild(newSquare);
    }
    grid.appendChild(newRow);  
}
