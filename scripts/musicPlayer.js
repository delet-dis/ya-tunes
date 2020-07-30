'use strict';
export const musicPlayerInit = () => {
  //объявление элементов страницы
  const audio = document.querySelector('.audio'),
    audioImg = document.querySelector('.audio-img'),
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

  //функция проигрывания треков
  const loadTrack = () => {
    const isPlayed = audioPlayer.paused;
    const track = playlist[trackIndex];

    audioImg.src = `./audio/${track}.jpg`;
    audioHeader.textContent = track.toUpperCase();
    audioPlayer.src = `./audio/${track}.mp3`;

    if (isPlayed) {
      audioPlayer.pause();
    } else {
      audioPlayer.play();
    }
  };

  //функция переключения на следующий трек
  const nextTrack = () => {
    if (trackIndex === playlist.length - 1) {
      trackIndex = 0
    } else {
      trackIndex++;
    }
    loadTrack();
  }

  //функция переключения на предыдущий трек
  const prevTrack = () => {
    if (trackIndex !== 0) {
      trackIndex--;
    } else {
      trackIndex = playlist.length - 1;
    }
    loadTrack();
  }

  //функция добавления нулей
  const addZero = n => n < 10 ? '0' + n : n;

  //слушатель нажания на навигацию
  audioNavigation.addEventListener('click', evt => {
    const target = evt.target;

    if (target.classList.contains('audio-button__play')) {
      audio.classList.toggle('play');
      audioButtonPlay.classList.toggle('fa-play');
      audioButtonPlay.classList.toggle('fa-pause');

      if (audioPlayer.paused) {
        audioPlayer.play();
      } else {
        audioPlayer.pause();
      }
      const track = playlist[trackIndex];
      audioHeader.textContent = track.toUpperCase();
    };

    if (target.classList.contains('audio-button__next')) {
      nextTrack();
    };

    if (target.classList.contains('audio-button__prev')) {
      prevTrack();
    }
  });

  //слушатель на окончание трека
  audioPlayer.addEventListener('ended', () => {
    nextTrack();
    audioPlayer.play();
  });

  //действия на обновление времени воспроизведения
  audioPlayer.addEventListener('timeupdate', () => {
    const duration = audioPlayer.duration;
    const currentTime = audioPlayer.currentTime;
    const progress = (currentTime / duration) * 100;

    audioProgressTiming.style.width = progress + '%';

    const minutesPassed = Math.floor(currentTime / 60);
    const secondsPassed = Math.floor(currentTime % 60);

    const minutesTotal = Math.floor(duration / 60);
    const secondsTotal = Math.floor(duration % 60);

    audioTimePassed.textContent = `${addZero(minutesPassed)}:${addZero(secondsPassed)}`;
    audioTimeTotal.textContent = `${addZero(minutesTotal)}:${addZero(secondsTotal)}`;
  });

  //слушатель изменения значения у прогрессбара
  audioProgress.addEventListener('click', evt => {
    const x = evt.offsetX;
    const totalWidth = audioProgress.clientWidth;
    const progress = (x / totalWidth) * audioPlayer.duration;

    audioPlayer.currentTime = progress;
  });
};