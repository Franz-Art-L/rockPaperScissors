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
    emoji: '๐ชจ',
    beats: 'scissors'
  },
  {
    name: 'paper',
    emoji: '๐งป',
    beats: 'rock'
  },
  {
    name: 'scissors',
    emoji: 'โ๏ธ',
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
  
  if(computerScoreTally === winningScore) { //thanks to Junel and Nash! :)
    alert('SORRY ๐ COMPUTER WINS THE MATCH! better luck next time LOSER!! HAHAHAHA ๐');
    confirm('Please click the New Game button to restart the game.');
  }

  if(yourScoreTally === winningScore) { //thanks to Junel and Nash! :)
    document.getElementById('myAudio').play();
    alert('CONGRATULATIONS! ๐ ๐ ๐ YOU WIN THE MATCH!');
    backgroundCelebration();
    confirm('Please click New Game button to restart the game. ๐๐');
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

var timer 
function backgroundCelebration() {
  var body = document.querySelector('body');
  var colors = ['red', 'yellow', 'green'];
  var count = 0;
  timer = window.setInterval(() => {
    var newColor = colors[++count % colors.length];
    body.style.backgroundColor = newColor;
  }, 100);
};