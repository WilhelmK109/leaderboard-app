import axios from 'axios';
import './style.css';

let gameId = 'Ny7Ttc30wM2KhPKVHTkh';

axios.post('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
  name: 'My Awesome Game',
}).then((response) => {
  gameId = response.data.result;
});

const displayPlayers = (players) => {
  const playerList = document.getElementById('player-list');
  playerList.innerHTML = '';
  players.forEach((playerListItem) => {
    const playerItem = document.createElement('li');
    playerItem.className = 'player-item';
    playerItem.innerHTML = `${playerListItem.user}: ${playerListItem.score}`;
    playerList.appendChild(playerItem);
  });
};

window.addEventListener('load', async () => {
  try {
    const response = await axios.get(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`);
    const scores = response.data.result;
    displayPlayers(scores);
  } catch (error) {
    // Handle the error
  }

  const submitBtn = document.getElementById('submit-btn');
  submitBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const inputName = document.getElementById('input-name');
    const inputScore = document.getElementById('input-score');
    const newName = inputName.value;
    const newScore = Number(inputScore.value);
    try {
      await axios.post(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`, {
        user: newName,
        score: newScore,
      });
      inputName.value = '';
      inputScore.value = '';
      // const response = await axios.get(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`);
      // const scores = response.data.result;
    } catch (error) {
      // Handle the error
    }
  });

  const refreshBtn = document.getElementById('refresh-btn');
  refreshBtn.addEventListener('click', async () => {
    try {
      const response = await axios.get(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`);
      const scores = response.data.result;
      displayPlayers(scores);
    } catch (error) {
      // Handle the error
    }
  });
});