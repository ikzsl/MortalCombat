const player1 = {
  player: 1,
  name: 'Joe',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['gun'],
  attack: function () {
    console.log(`${this.name} fight...`);
  },
};

const player2 = {
  player: 2,
  name: 'Max',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  weapon: ['knife'],
  attack: function () {
    console.log(`${this.name} fight...`);
  },
};

const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const createElement = (tag, className) => {
  const $element = document.createElement(tag);
  if (className) {
    $element.classList.add(className);
  }
  return $element;
}

function createPlayer(playerClass, playerObj) {
  const $player = createElement('div', playerClass);
  const $progressbar = createElement('div', 'progressbar');
  const $life = createElement('div', 'life');
  const $name = createElement('div', 'name');
  const $character = createElement('div', 'character');
  const $img = createElement('img');

  $life.style.width = `${playerObj.hp}%`;
  $name.innerText = playerObj.name;
  $img.src = playerObj.img;

  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  $character.appendChild($img);
  $player.appendChild($progressbar);
  $player.appendChild($character);

  return $player;
}

const randomizer = () => Math.ceil(Math.random() * 20)

const playerWins = (name) => {
  const $loseTitle = createElement('div', 'loseTitle');
  $loseTitle.innerText = `${name} wins!`;
  return $loseTitle;
}

let isBattleFinished = false;

const changeHP = (player) => {
  const $playerLife = document.querySelector(`.player${player.player} .life`);
  player.hp -= randomizer();
  $playerLife.style.width = `${player.hp}%`;
  console.log(player.name, player.hp);

  if (isBattleFinished) {
    $arenas.appendChild(playerWins(player.name));
  }

  if (player.hp <= 0) {
    isBattleFinished = true;
    player.hp = 0;
    console.log(player.hp);
    $randomButton.disabled = true;
  }
}



$randomButton.addEventListener('click', () => {
  changeHP(player1);
  changeHP(player2);

});

$arenas.appendChild(createPlayer('player1', player1));
$arenas.appendChild(createPlayer('player2', player2));