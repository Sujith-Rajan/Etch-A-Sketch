const gridContainer =document.querySelector("#grid-container")
const colorPick = document.querySelector("#favcolor")

function createGrid(size){
    gridContainer.innerHTML = '';
    gridContainer.style.setProperty('--rowNum', size);
    gridContainer.style.setProperty('--colNum', size);
    let toatalArea = size * size ;
    for( let rowColum = 0;rowColum < toatalArea;rowColum++){
        const cells= document.createElement('div');
        cells.classList.add('grid');
        gridContainer.appendChild(cells);
        cells.addEventListener('mouseover',(action)=>{
            cells.style.backgroundColor =colorPick.value;
        })

    }
}

function erasePixal(){
    const cellErase = document.querySelectorAll(".grid");
    cellErase.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = ' #bce67d';
        });
    });
}