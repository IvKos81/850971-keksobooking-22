//Вспомогательные функции

function getRandomNumber(num1, num2) {
  num1 = Math.ceil(num1);
  num2 = Math.floor(num2);

  if (num1>=0 && num2>0) {
    if ((num1 === num2) || (num1 > num2)) {
      return 'Диапазон задан неверно'
    } else {
      return Math.floor(Math.random() * (num2 - num1)) + num1;
    }
  } else {
    return 'Диапазон содержит отрицательное значение'
  }
}

/* Функция, возвращающая случайное число с плавающей точкой из переданного диапазона. */

function getRandomCoordinate(num1, num2, x) {
  if (num1>=0 && num2>0) {
    if ((num1 === num2) || (num1 > num2)) {
      return 'Диапазон задан неверно'
    } else {
      return ((Math.random() * (num2 - num1)) + num1).toFixed(x);
    }
  } else {
    return 'Диапазон содержит отрицательное значение'
  }
}

export {getRandomNumber, getRandomCoordinate}
