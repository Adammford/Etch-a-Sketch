
const container = document.querySelector(".gridContainer");
const box = document.createElement("div");

box.classList.add("gridBox");

let rowsColumns = 16;

let numOfBoxes = 16;

// for (let i = 0; i < numOfBoxes; i++) {
//     const boxRow = document.createElement("div");
//     boxRow.classList.add("gridBox");
//     for (let j = 0; j < numOfBoxes; j++) {
//         const boxCol = document.createElement("div");
//         boxCol.classList.add("gridBox");
//         boxRow.appendChild(boxCol)
//     }



    for (let i = 0; i < numOfBoxes; i++) {
        const boxRow = document.createElement("div");
        boxRow.classList.add("gridRow");
        container.appendChild(boxRow);
        for (let j = 0; j < numOfBoxes; j++) {
            const boxCol = document.createElement("div");
            boxCol.setAttribute("class", "gridBox")
            boxRow.appendChild(boxCol)
        }
    }

box.classList.add("gridBox");