 'use strict';

 export const videoPlayerInit = () => {
   //объявление всех элементов плеера
   const videoPlayer = document.querySelector('.video-player'),
     videoButtonPlay = document.querySelector('.video-button__play'),
     videoButtonStop = document.querySelector('.video-button__stop'),
     videoTimePassed = document.querySelector('.vitop-time__passed'),
     videoProgress = document.querySelector('.video-progress'),
     videoTimeTotal = document.querySelector('.video-time__total');

   //слушатель нажатия для включения воспроизведения
   videoPlayer.addEventListener('click', () => {
    if(videoPlayer.paused){
      videoPlayer.play();
    }else{
      videoPlayer.pause();
    }
  });
};