
const container = document.querySelector(".gridContainer");
const button = document.querySelector(".gridGenerator");
const reset = document.querySelector(".reset");


function setGridSize () {
   let choice = Number(prompt("Choose a grid size: (Max 100)"));
   let isValid = 0;
    while (isValid < 1) {
        if (choice > 100 ||  choice <= 0) {
            choice = Number(prompt("Invalid input: Choose a grid size: (min: 1, max: 100) "))
        } else {
            isValid++;
            return choice;
        }
    }
}

function clearGrid() {
    let toDelete = container.lastElementChild;
    while(toDelete) {
        container.removeChild(toDelete);
        toDelete = container.lastElementChild;
    }
} 

function createGrid(boxes = 16) {
    for (let i = 0; i < boxes; i++) {
        const boxRow = document.createElement("div");
        boxRow.setAttribute("class", "gridRow");
        container.appendChild(boxRow);
        for (let j = 0; j < boxes; j++) {
            const boxCol = document.createElement("div")
            boxCol.setAttribute("class", "gridBox");
            boxRow.appendChild(boxCol);
            boxCol.addEventListener("mouseover", () => {
                let red = Math.floor(Math.random() * 255);
                let green = Math.floor(Math.random() * 255);
                let blue = Math.floor(Math.random() * 255);
                boxCol.style.backgroundColor = `rgb(${red}, ${green}, ${blue}`;
              
            })
        }
    }
    
}
createGrid();

button.addEventListener('click', () => {
   let size = setGridSize();
   clearGrid();
   button.textContent = `${size} x ${size}`
   createGrid(size);
})

reset.addEventListener('click', () => {
    clearGrid();
    createGrid();
})


