'use strict';
export const musicPlayerInit = () => {
  //объявление элементов страницы
  const audio = document.querySelector('.audio'),
    audioImg = document.querySelector('.autio-img'),
    audioHeader = document.querySelector('.audio-header'),
    audioPlayer = document.querySelector('.audio-player'),
    audioNavigation = document.querySelector('.audio-navigation'),
    audioButtonPlay = document.querySelector('.audio-button__play'),
    audioProgress = document.querySelector('.audio-progress'),
    audioProgressTiming = document.querySelector('.audio-progress__timing'),
    audioTimePassed = document.querySelector('.audio-time__passed'),
    audioTimeTotal = document.querySelector('.audio-time__total');

  //создание плейлиста
    const playlist = ['hello', 'flow', 'speed'];

  //трек, с которого будет начинаться воспроизведение
    let trackIndex = 0;

  //слушатель нажания на навигацию
    audioNavigation.addEventListener('click', evt => {
      const target = evt.target;

      if(target.classList.contains('audio-button__play')){
        audio.classList.toggle('play');
        audioButtonPlay.classList.toggle('fa-play');
        audioButtonPlay.classList.toggle('fa-pause');
      }
    });
};