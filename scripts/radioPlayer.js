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

  //блокировка кнопки
  radioStop.disabled = true; 

  //слушатель изменения станции
  radioNavigation.addEventListener('change', evt => {
    const target = evt.target;
    audio.src = target.dataset.radioStantion;
    audio.play();
  })
};