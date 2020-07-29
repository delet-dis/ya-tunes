'use strict';
export const radioPlayerInit = () => {
  //объявление компонентов
  const radio = document.querySelector('.radio'),
    radioNavigation = document.querySelector('.radio-navigation'),
    radioCoverImg = document.querySelector('.radio-cover__img'),
    radioItem = document.querySelector('.radio-item'),
    radioHeader = document.querySelectorAll('.radio-header'),
    radioStop = document.querySelector('.radio-stop');

  //создание новго объекта аудио
  const audio = new Audio();
  audio.type = 'audio/aac';

  //функция переключения иконки
  const toggleRadioIcon = () => {
    if(audio.paused){
      radioStop.classList.add('fa-play');
      radioStop.classList.remove('fa-stop');
    }else{
      radioStop.classList.remove('fa-play');
      radioStop.classList.add('fa-stop');
    }
  };

  //блокировка кнопки
  radioStop.disabled = true; 

  //слушатель изменения станции
  radioNavigation.addEventListener('change', evt => {
    const target = evt.target;
    radioStop.disabled = false;
    audio.src = target.dataset.radioStantion;
    audio.play();
    toggleRadioIcon();
  });

  //слушатель остановки стриминга
  radioStop.addEventListener('click', () => {
    if(audio.paused){
      audio.play();
    }else{
      audio.pause();
    }
    toggleRadioIcon();
  })
};