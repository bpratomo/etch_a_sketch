let container = document.querySelector(".container")
console.log(container)
const rowToBuild = 16
const colToBuild = 16


//Build grids
for (let rowNumber = 0; rowNumber < rowToBuild; rowNumber++) {
  let row = document.createElement("div")
  row.setAttribute("id",`row${rowNumber}`)
  row.setAttribute("class","row")

  for (let colNumber = 0; colNumber < colToBuild; colNumber++) {
    let col = document.createElement("div")
    col.setAttribute("id",`cell${rowNumber}_${colNumber}`)
    col.setAttribute("class","cell")
    
    row.appendChild(col)
    
  }

  container.appendChild(row)
  
}


//Add event listeners 
let cells = document.querySelectorAll(".cell")
console.log(cells)

function fillCell(e) {
  this.style.backgroundColor = "coral";
  console.log("I'm triggered")
  
}



cells.forEach( cell => {
  cell.addEventListener("mouseover", fillCell)
}
  

)
