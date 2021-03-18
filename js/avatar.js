// Загрузка аватара и фото на страницу

//Данные для загрузки файлов

const fileChooser = document.querySelector('.ad-form-header__input');

const preview = document.querySelector('.ad-form-header__preview__avatar');

const filePhotoChooser = document.querySelector('.ad-form__input');

const previewPhoto = document.querySelector('.ad-form__photo__pict');

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'bmp']

// Загрузка аватара

fileChooser.addEventListener('change', () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();

  const MATCHES = FILE_TYPES.some((it) => {
    return fileName.endsWith(it)
  });

  if (MATCHES) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      preview.src = reader.result;
    });
    reader.readAsDataURL(file);
  }

})

// Загрузка фото жилья на страницу

filePhotoChooser.addEventListener('change', () => {
  const filePhoto = filePhotoChooser.files[0];
  const filePhotoName = filePhoto.name.toLowerCase();

  const MATCHES = FILE_TYPES.some((it) => {
    return filePhotoName.endsWith(it)
  });

  if (MATCHES) {
    const readerPhoto = new FileReader();
    readerPhoto.addEventListener('load', () => {
      previewPhoto.src = readerPhoto.result;
    });
    readerPhoto.readAsDataURL(filePhoto);
    previewPhoto.classList.remove('visually-hidden')
  }

})

function resetAvatar() {
  preview.src = 'img/muffin-grey.svg';
  previewPhoto.src = '';
  previewPhoto.classList.add('visually-hidden');
}

export {resetAvatar}
