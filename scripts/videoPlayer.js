 'use strict';

export const videoPlayerInit = () => {
   //объявление всех элементов плеера
    const videoPlayer = document.querySelector('.video-player'),
      videoButtonPlay = document.querySelector('.video-button__play'),
      videoButtonStop = document.querySelector('.video-button__stop'),
      videoTimePassed = document.querySelector('.vitop-time__passed'),
      videoProgress = document.querySelector('.video-progress'),
      videoTimeTotal = document.querySelector('.video-time__total');

    //функция переключения классов у кнопки воспроизведения
    const toggleIcon = () => {
      if(videoPlayer.paused){
        videoButtonPlay.classList.remove('fa-pause');
        videoButtonPlay.classList.add('fa-play');
      }else{
        videoButtonPlay.classList.add('fa-pause');
        videoButtonPlay.classList.remove('fa-play');
      }
    }

    //функция включения/выключения воспроизведения
    const togglePlayer = () => {
      if (videoPlayer.paused) {
        videoPlayer.play();
      } else {
        videoPlayer.pause();
      }
      toggleIcon();
    }

    //функция остановки воспроизведения
    const playerStop = () => {
      videoPlayer.pause();
      videoPlayer.currentTime = 0;
    }
    //слушатель нажатия для включения воспроизведения и переключения иконки
    videoPlayer.addEventListener('click', togglePlayer);
    videoButtonPlay.addEventListener('click', togglePlayer);

    //слушатель для остановки воспроизведения
    videoButtonStop.addEventListener('click', playerStop)
};