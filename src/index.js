import addNewPlayer from './modules/add-players.js';

import './style.css';

const players = [
  {
    name: 'Wilhelm',
    score: 20,
  },
  {
    name: 'David',
    score: 15,
  },
  {
    name: 'Willem',
    score: 10,
  },
  {
    name: 'Peter',
    score: 15,
  },
  {
    name: 'Luke',
    score: 5,
  },
];

const displayPlayers = (players) => {
  const playerList = document.getElementById('player-list');
  playerList.innerHTML = '';
  players.forEach((playerListItem) => {
    const playerItem = document.createElement('li');
    playerItem.className = 'player-item';
    playerItem.innerHTML = `Name: ${playerListItem.score}`;
    playerList.appendChild(playerItem);
  });
};

window.addEventListener('load', () => {
  displayPlayers(players);
  const refreshBtn = document.getElementById('refresh-btn');
  refreshBtn.addEventListener('click', () => {
    displayPlayers(players);
  });
  const submitBtn = document.getElementById('submit-btn');
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const inputName = document.getElementById('input-name');
    const inputScore = document.getElementById('input-score');
    addNewPlayer(inputName.value, inputScore.value, players);
    inputName.value = '';
    inputScore.value = '';
    displayPlayers(players);
  });
});