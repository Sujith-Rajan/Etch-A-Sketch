const gridContainer =document.querySelector("#grid-container")

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
            cells.style.backgroundColor ='black';
        })

    }
}