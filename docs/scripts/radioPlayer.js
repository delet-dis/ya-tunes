'use strict';
export const radioPlayerInit = () => {
  //объявление компонентов
  const radio = document.querySelector('.radio'),
    radioNavigation = document.querySelector('.radio-navigation'),
    radioCoverImg = document.querySelector('.radio-cover__img'),
    radioItem = document.querySelectorAll('.radio-item'),
    radioHeaderBig = document.querySelector('.radio-header__big'),
    radioStop = document.querySelector('.radio-stop');

  //создание новго объекта аудио
  const audio = new Audio();
  audio.type = 'audio/aac';

  //функция переключения иконки
  const toggleRadioIcon = () => {
    if (audio.paused) {
      radio.classList.remove('play');
      radioStop.classList.add('fa-play');
      radioStop.classList.remove('fa-stop');
    } else {
      radio.classList.add('play');
      radioStop.classList.remove('fa-play');
      radioStop.classList.add('fa-stop');
    }
  };

  //функция выделения играющей станции
  const selectItem = (elem) => {
    radioItem.forEach(item => item.classList.remove('select'));
    elem.classList.add('select');
  }
  //блокировка кнопки
  radioStop.disabled = true;

  //слушатель изменения станции
  radioNavigation.addEventListener('change', evt => {
    const target = evt.target;
    const parent = target.closest('.radio-item');
    selectItem(parent);

    const title = parent.querySelector('.radio-name').textContent;
    radioHeaderBig.textContent = title;

    const img = parent.querySelector('.radio-img').src;
    radioCoverImg.src = img;

    radioStop.disabled = false;
    audio.src = target.dataset.radioStantion;

    audio.play();
    toggleRadioIcon();
  });

  //слушатель остановки стриминга
  radioStop.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
    toggleRadioIcon();
  })
};