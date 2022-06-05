const container = document.querySelector('.container');
const screen = document.querySelector('.screen');
const resize = document.getElementById('resize')

let screenSize = 50;

function makeRows(grdSize) {
  for (let i = 0; i < grdSize ** 2; i++) {
    let pxl = document.createElement("div");
    screen.appendChild(pxl).className = "pixel";
  }
  screen.style.gridTemplateColumns = `repeat(${grdSize}, auto)`;
  screen.style.gridTemplateRows = `repeat(${grdSize}, auto)`;
};
makeRows(screenSize);




resize.addEventListener('click', () =>{
  screenSize = prompt("enter a screen size:",16);
  if (screenSize > 100 || screenSize === null) {
    alert('enter a valid input!');
  }
    makeRows(screenSize);
});


const randomColor = () => {
  let color = 'rgba(';
  for(let i = 0;i< 3;i++){
    color += Math.floor(Math.random() * 255) + ',';
  }
  return color + '1)';
}



screen.addEventListener("mouseover", function(event) {
  event.target.style.backgroundColor = randomColor();
});

