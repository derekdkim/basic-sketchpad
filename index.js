// Make a grid of divs up to 960
const setGrid = (maxX, maxY) => {
  const container = document.querySelector('#grid-container');
  container.style.setProperty('--rowNum', maxY);
  container.style.setProperty('--colNum', maxX);

  for (let x = 0; x < maxX; x++) {
    for (let y = 0; y < maxY; y++) {
      const block = document.createElement('div');
      block.classList.add('grid');
      block.setAttribute('id', `${(x * maxX) + (y + 1)}`);
      container.appendChild(block);
    }
  }
};

// Checks if input is valid
const isInputValid = (input) => {
  if (typeof input === 'number' && input > 0 && input <= 200) {
    return true;
  } else {
    alert('That number is invalid. Please enter a number from 1 to 200.');
    return false;
  }
};

// Main function on load
document.addEventListener('DOMContentLoaded', () => {
  setGrid(16, 16);
  updateState();
});

// Reset function
const resetButton = document.getElementById('reset');

resetButton.addEventListener('click', () => {
  const size = document.getElementById('size-input');
  // Remove previous grid
  document.querySelectorAll('.grid').forEach(el => el.remove());
  // Create new grid
  const inputNum = Number(size.value);
  if (isInputValid(inputNum)) {
    setGrid(inputNum, inputNum);
  } else {
    setGrid(16, 16);
  }
  updateState();
});

// Erase function
const eraseButton = document.getElementById('erase');

eraseButton.addEventListener('click', () => {
  document.querySelectorAll('.filled').forEach(el => el.classList.remove('filled'));
});

// Allow for erase and fill functions to work properly
const gridArr = document.getElementsByClassName('grid');

const updateState = () => {
  // Fill in colour when clicked.
  for (let i = 0; i < gridArr.length; i++) {
    gridArr[i].addEventListener('mouseover', () => {
      gridArr[i].classList.add('filled');
    });
  }
};
