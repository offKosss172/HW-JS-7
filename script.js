/* 
1.Опишіть своїми словами як працює метод forEach.
Метод застосовує передану йому функцію до кожного елементу масиву.

Як очистити масив?
задать длину массива 0
const arr = [1, 2, 3, 4];
arr.length = 0;

Як можна перевірити, що та чи інша змінна є масивом?
 если в коде написана то после объявления ее стоят квадратные скобки, или пустые или со значениями
если кодом ... то вот запрасить его длину array.length - покажет длину консоль значит это массив, можно вот методом forEach проверить
 массив ли это, если меторд сработает то массив, вывести результаты в консоль 
 
 array.forEach(function(element) {
  console.log(element);
});

  */
  

function filterBy(arr, dataType) {
  return arr.filter(function(item) {
    return typeof item !== dataType;
  });
}


var data = ['hello', 'world', 23, '23', null];
var result = filterBy(data, 'string');
console.log(result); 