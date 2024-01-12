let grid = document.getElementById('gridContainer');
let counter = 0;

for(counter = 1; counter <= 16;  counter++){
    const row = document.createElement('div')
    row.setAttribute('style', 'display: flex; justify-content: center;');
    for(let counterRow = 1; counterRow <= 16; counterRow++){
        const square = document.createElement('div');
        square.setAttribute(
            'style',
            'background-color: salmon; color: white; width: 90px; height: 90px; margin:5px;',
        );
        square.textContent = `${counterRow}`;
        row.appendChild(square);
    }
    
    grid.appendChild(row);

}



