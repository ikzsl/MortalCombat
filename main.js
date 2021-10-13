const player1 = {
  name: 'Joe',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['gun'],
  attack: function() {
    console.log(`${this.name} fight...` )
  },
}

const player2 = {
  name: 'Max',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  weapon: ['knife'],
  attack: function() {
    console.log(`${this.name} fight...` )
  },
}

const $arenas = document.querySelector('.arenas');

function createPlayer(playerClass, player) {
  const $player = document.createElement(`div.${playerClass}`);
  
  const $progressbar = document.createElement('div.progressbar');
  const $life = document.createElement('div.life');
  $life.style.width = '100%';
  $life.innerText = player.hp ;
  const $name = document.createElement(`div.name`);
  $name.innerText = player.name;
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);

  const $character = document.createElement('div.character');
  const $img = document.createElement('img');
  $img.src=player.img;
  $character.appendChild($img);
  $player.appendChild($progressbar);
  $player.appendChild($character);
  $arenas.appendChild($player)
  return $player
}

createPlayer('player1', player1);
createPlayer('player2', player2);

