let grid = document.getElementById('gridContainer');
let counter = 0;

let gridButton = document.getElementById('gridButton');
gridButton.addEventListener('click', () => {
    let gridSize = prompt('Please enter the desired grid size');
    drawGrid(gridSize);
}); 

function drawGrid (sizeOfGrid) {
    for(counter = 1; counter <= sizeOfGrid;  counter++){
        const row = document.createElement('div')
        row.setAttribute('style', 'display: flex; justify-content: center; gap: 5px;');
        for(let counterRow = 1; counterRow <= sizeOfGrid; counterRow++){
            const square = document.createElement('div');
            square.setAttribute(
                'style',
                'background-color: salmon; color: white; width: 90px; height: 90px;',
            );
            square.setAttribute('class', 'pink-sq');
            square.textContent = `${counterRow}`;
            row.appendChild(square);
        }
        grid.appendChild(row);
    }
    
    const pinkSquares = document.getElementsByClassName('pink-sq');
    
    for (const pinkSquare of pinkSquares) {
        pinkSquare.addEventListener('mouseover', () =>{
            pinkSquare.style.backgroundColor = 'blue';
        });
    
        // pinkSquare.addEventListener('mouseout', () =>{
        //     pinkSquare.style.backgroundColor = 'salmon';
        // });
    }
}







