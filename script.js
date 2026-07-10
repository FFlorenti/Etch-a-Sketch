 const container = document.getElementById('container');
const newGridBtn = document.getElementById('new-grid-btn');
const CONTAINER_SIZE = 960;

function createGrid(squaresPerSide) {
  container.innerHTML = '';

  const squareSize = CONTAINER_SIZE / squaresPerSide;
  const totalSquares = squaresPerSide * squaresPerSide;

  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    square.addEventListener('mouseenter', () => {
      square.classList.add('hovered');
    });

    container.appendChild(square);
  }
}

function promptForNewGrid() {
  let input = prompt('Sa katrore per brinje duhet te kete rrjeta e re? (max 100)', '16');

  if (input === null) return;

  let size = parseInt(input, 10);

  if (isNaN(size) || size < 1) {
    alert('Ju lutem shkruani nje numer te vlefshem (te pakten 1).');
    return;
  }

  if (size > 100) {
    alert('Numri maksimal i lejuar eshte 100. Do te perdoret 100.');
    size = 100;
  }

  createGrid(size);
}

newGridBtn.addEventListener('click', promptForNewGrid);

createGrid(16);