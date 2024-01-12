let grid = document.getElementById('gridContainer');

const randomRgbColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
};

let gridButton = document.getElementById('gridButton');
gridButton.addEventListener('click', () => {

    let gridSize = prompt('Please enter the desired grid size');
    while(grid.hasChildNodes()){
        grid.removeChild(grid.firstChild);
    }
    drawGrid(gridSize);
}); 

function drawGrid (sizeOfGrid) {
    for(let counterRow = 1; counterRow <= sizeOfGrid;  counterRow++){
        const row = document.createElement('div')
        row.setAttribute('style', 'display: flex; justify-content: center; gap: 5px;');
        row.setAttribute('class', 'sq-row');
        for(let counterSquare = 1; counterSquare <= sizeOfGrid; counterSquare++){
            const square = document.createElement('div');
            square.setAttribute(
                'style',
                'background-color: salmon; color: white; width: 90px; height: 90px;',
            );
            square.setAttribute('class', 'pink-sq');
            square.textContent = `${counterSquare}`;
            row.appendChild(square);
        }
        grid.appendChild(row);
    }
    
    const pinkSquares = document.getElementsByClassName('pink-sq');
    
    for (const pinkSquare of pinkSquares) {
        pinkSquare.addEventListener('mouseover', () =>{
            pinkSquare.style.backgroundColor = randomRgbColor();
        });
    
        // pinkSquare.addEventListener('mouseout', () =>{
        //     pinkSquare.style.backgroundColor = 'salmon';
        // });
    }
}







