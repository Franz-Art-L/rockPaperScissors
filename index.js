const imgSelected = document.querySelectorAll('[data-selection]');

const finalColumn = document.querySelector('[data-final-column]');

const resultChoice = document.querySelector('[data-resultChoice]')

let computerScoreSpan = document.querySelector('[data-computer-score]')

let yourScoreSpan = document.querySelector('[data-your-score]')

let computerScoreTally = 0;

let yourScoreTally = 0;

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
  const winningScore = 2; //thanks to Junale and Nash! :)
  
  console.log(computerSelection); //use this to check on the console if it will print the right selection

  addSelectionResult(computerSelection, computerWinner);
  addSelectionResult(selection, youAreAWinner);
  
  if(youAreAWinner) incrementScore(yourScoreSpan, alert('You won!'));
  if(computerWinner) incrementScore(computerScoreSpan, alert('Computer won!'));
  
  if(youAreAWinner) yourScoreTally++; console.log(yourScoreTally);
  if(computerWinner) computerScoreTally++; console.log(computerScoreTally);
  
  if(computerScoreTally === winningScore) { //thanks to Junale and Nash! :)
    alert('SORRY 😞 COMPUTER WINS THE MATCH! better luck next time LOSER!! HAHAHAHA 😆');
  }

  if(yourScoreTally === winningScore) { //thanks to Junale and Nash! :)
    alert('CONGRATULATIONS! 🎉 🎉 🎉 YOU WIN THE MATCH!');
  }

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
  return SELECTIONS[randomIndex];
}
