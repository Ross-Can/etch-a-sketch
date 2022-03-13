let grid = document.querySelector('.grid');

createGrid(2);

function createGrid(numOfRows){
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
}

let squares = document.querySelectorAll('.square');

let changeColor = (square) => {console.log(square);
    square.style.backgroundColor = "black";
    let blackness = 25.6;
   
};

squares.forEach((square) => {
    square.addEventListener('mouseover', function(){
        changeColor(square)
    });
});

function eraseGrid(){
    squares.forEach((square) => {
        square.style.backgroundColor = "white";
    });
}



