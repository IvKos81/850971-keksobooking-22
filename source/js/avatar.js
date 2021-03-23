'use strict';

// Загрузка аватара и фото на страницу

//Данные для загрузки файлов

const avatarChooser = document.querySelector('.ad-form-header__input');
const previewAvatar = document.querySelector('.ad-form-header__preview__avatar');
const photoChooser = document.querySelector('.ad-form__input');
const previewPhoto = document.querySelector('.ad-form__photo__pict');
const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'bmp', 'png'];

// Функция загрузки аватара или фото помещения

const onLoadPhoto = (fileChooser, preview) => {
  fileChooser.addEventListener('change', () => {
    const file = fileChooser.files[0];
    const fileName = file.name.toLowerCase();

    const MATCHES = FILE_TYPES.some((it) => {
      return fileName.endsWith(it);
    });

    if (MATCHES) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        preview.src = reader.result;
      });
      reader.readAsDataURL(file);
      preview.classList.remove('visually-hidden');
    }
  });
};

// Функция удаления фото при очистке формы

const resetAvatar = () => {
  previewAvatar.src = 'img/muffin-grey.svg';
  previewPhoto.src = '';
  previewPhoto.classList.add('visually-hidden');
};

// Запуск загрузки фото на страницу

onLoadPhoto(avatarChooser, previewAvatar);
onLoadPhoto(photoChooser, previewPhoto);

export {resetAvatar};
