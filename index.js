const imgSelected = document.querySelectorAll('[data-selection]');
const finalColumn = document.querySelector('[data-final-column');
const resultChoice = document.querySelector('[data-resultChoice]');
const computerScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')
const SELECTIONS =[
  {
    name: 'rock',
    emoji: '🪨',
    beats: 'scissors'
  },
  {
    name: 'paper',
    emoji: '🧻',
    beats: 'rock'
  },
  {
    name: 'scissors',
    emoji: '✂️',
    beats: 'paper'
  }
]

function dMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}



imgSelected.forEach(imgSelect => {
  imgSelect.addEventListener('click', e => {
    const selectionName = imgSelect.dataset.selection
    const selection = SELECTIONS.find(selection => selection.name === selectionName);
    makeSelection(selection)
  })
})

function makeSelection(selection) {
  const computerSelection = randomSelection()
  const youAreAWinner = isWinner(selection, computerSelection);
  const computerWinner = isWinner(computerSelection, selection);
  console.log(computerSelection); //use this to check on the console if it will print the right selection

  addSelectionResult(computerSelection, computerWinner);
  addSelectionResult(selection, youAreAWinner);

  if(youAreAWinner) incrementScore(yourScoreSpan);
  if(computerWinner) incrementScore(computerScoreSpan);
}

function incrementScore(scoreSpan) {
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
}

function addSelectionResult(selection, winner) {
  const div = document.createElement('div');
  div.innerText = selection.emoji;
  finalColumn.after(div)
}

function isWinner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name;
}

function randomSelection() {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
  return SELECTIONS[randomIndex]
}