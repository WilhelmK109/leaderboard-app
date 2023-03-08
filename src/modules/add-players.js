const addNewPlayer = (name, score, playerList) => {
  const newPlayer = {
    name,
    score,
  };
  playerList.push(newPlayer);
};

export default addNewPlayer;