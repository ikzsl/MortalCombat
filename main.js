const player1 = {
  name: 'Joe',
  hp: 60,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['gun'],
  attack: function () {
    console.log(`${this.name} fight...`);
  },
};

const player2 = {
  name: 'Max',
  hp: 80,
  img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  weapon: ['knife'],
  attack: function () {
    console.log(`${this.name} fight...`);
  },
};

const $arenas = document.querySelector('.arenas');

function createPlayer(playerClass, player) {
  const $player = document.createElement('div');
  $player.classList.add(playerClass);

  const $progressbar = document.createElement('div');
  $progressbar.classList.add('progressbar');

  const $life = document.createElement('div');
  $life.classList.add('life');

  $life.style.width = `${player.hp}%`;

  const $name = document.createElement('div');
  $name.classList.add('name');

  $name.innerText = player.name;
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);

  const $character = document.createElement('div');
  $character.classList.add('character');

  const $img = document.createElement('img');
  $img.src = player.img;
  $character.appendChild($img);
  $player.appendChild($progressbar);
  $player.appendChild($character);
  $arenas.appendChild($player);
  return $player;
}

createPlayer('player1', player1);
createPlayer('player2', player2);
