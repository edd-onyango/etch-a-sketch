let grid = document.getElementById('gridContainer');
let counter = 0;

for(counter = 1; counter <= 16;  counter++){
    const row = document.createElement('div')
    row.setAttribute('style', 'display: flex; justify-content: center; gap: 5px;');
    for(let counterRow = 1; counterRow <= 16; counterRow++){
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





