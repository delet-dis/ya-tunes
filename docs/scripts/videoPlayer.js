 'use strict';

export const videoPlayerInit = () => {
   //объявление всех элементов плеера
    const videoPlayer = document.querySelector('.video-player'),
      videoButtonPlay = document.querySelector('.video-button__play'),
      videoButtonStop = document.querySelector('.video-button__stop'),
      videoTimePassed = document.querySelector('.video-time__passed'),
      videoProgress = document.querySelector('.video-progress'),
      videoTimeTotal = document.querySelector('.video-time__total'),
      videoVolume = document.querySelector('.video-volume');

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

    //функция добавления нулей
    const addZero = n => n < 10 ? '0' + n : n;

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
    videoButtonStop.addEventListener('click', playerStop);

    //слушатель времени
    videoPlayer.addEventListener('timeupdate', () => {
      const currentTime = videoPlayer.currentTime,
        duration = videoPlayer.duration;

      videoProgress.value = (currentTime / duration) * 100;

      let minutesPassed = Math.floor(currentTime / 60);
      let secondsPassed = Math.floor(currentTime % 60);
      
      let minutesTotal = Math.floor(duration / 60);
      let secondsTotal = Math.floor(duration % 60);

      videoTimePassed.textContent = `${addZero(minutesPassed)}:${addZero(secondsPassed)}`;
      videoTimeTotal.textContent = `${addZero(minutesTotal)}:${addZero(secondsTotal)}`;
  });

  //слушатель изменения значения у range input
  videoProgress.addEventListener('change', () => {
    const duration = videoPlayer.duration,
      value = videoProgress.value;

    videoPlayer.currentTime = (value * duration) / 100;
  });

  //слушатель изменения громкости
  videoVolume.addEventListener('input' , () => {
    videoPlayer.volume = videoVolume.value / 100;
  })
  
  videoVolume.value = videoPlayer.volume * 100;
};