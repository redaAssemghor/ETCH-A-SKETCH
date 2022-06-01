const container = document.getElementById("container");



function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (let i = 0; i < (rows * cols); i++) {
    let cell = document.createElement("div");
    
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);


const square = document.querySelector("div");
square.addEventListener("mouseover", function(event) {
  event.target.classList.replace("grid-item", "color");
});


const btn = document.querySelector("button");
btn.addEventListener('click', function() {
  let a = prompt ("Enter number of squares per side:" , 16);
  if (a != null && a < 100) {
    return makeRows(a,a);
  }
});

