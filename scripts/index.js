'use strict';
import {
  radioPlayerInit
} from './radioPlayer.js';

import {
  musicPlayerInit
} from './musicPlayer.js';

import {
  videoPlayer
} from './videoPlayer.js';

//объявление элементов страницы
const playerBtn = document.querySelectorAll('.player-btn'),
  playerBlock = document.querySelectorAll('.player-block'),
  temp = document.querySelector('.temp');

//функция отключения плеера
const playerDeactivation = () => {
  temp.style.display = 'none';
  playerBtn.forEach(item =>
    item.classList.remove('active')
  );
  playerBlock.forEach(item =>
    item.classList.remove('active')
  );
};

//слушатель для каждой кнопки
playerBtn.forEach((btn, i) => btn.addEventListener('click', () => {
  playerDeactivation();
  btn.classList.add('active');
  playerBlock[i].classList.add('active');
}));

