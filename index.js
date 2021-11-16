const imgSelected = document.querySelectorAll('[data-selection]')
const resultChoice = document.querySelector('[data-resultChoice]')
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
  addSelectionResult(selection, youAreAWinner)
}

function isWinner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name;
}

function addSelectionResult(selection, winner) {
  const div = document.createElement('div')
  div.innerText = selection.emoji;
  div.classList.add('resultSelection')
  resultChoice.after(div)
}

function randomSelection() {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
  return SELECTIONS[randomIndex]
}