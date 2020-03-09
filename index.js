// Make 16 x 16 grid of divs
const setGrid = () => {
  const container = document.querySelector('#grid-container');
  for (let x = 0; x < 16; x++) {
    for (let y = 0; y < 16; y++) {
      const block = document.createElement('div');
      block.classList.add('grid');
      block.setAttribute('id', `${(x + 1) * (y + 1)}`);
      container.appendChild(block);
    }
  }
};

// Main function on load
document.addEventListener('DOMContentLoaded', () => {
  console.log("This thing started.");
  setGrid();

  for (let i = 0; i < gridArr.length; i++) {
    console.log(gridArr[i]);
    gridArr[i].addEventListener('mousedown', () => {
      console.log("Click event triggered.");
      gridArr[i].classList.add('filled');
    });
  }
});

// On-click colour event
let gridArr = document.getElementsByClassName('grid');
console.log(gridArr);
let gridArr2 = [...document.querySelectorAll('.grid')];
console.log(gridArr2);

// gridArr2.forEach(element => element.addEventListener('click', () => {
//   console.log("Click event triggered.");
//   element.ClassList.add('filled');
// }));

for (let i = 0; i < gridArr.length; i++) {
  console.log(gridArr[i]);
  gridArr[i].addEventListener('click', () => {
    console.log("Click event triggered.");
    gridArr[i].style.backgroundColor = 'black';
  });
}


