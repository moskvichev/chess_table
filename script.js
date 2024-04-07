'use strict';

// var table = document.querySelector('.ch-wrap');
// table = [8];
// for (var index = 0; index < table.length; index++) {
//   table[index] = [8];
//   //рисуем массив

//   for (var row = 0; row < table.length; row++) {
//     for (var col = 0; col < table[row].length; col++) {
//       table[row][col] = row * col;
//       col.document.createElement('div');
//       table.appendChild(col);
//       col.classList.add('ch-item');
//       row.document.createElement('div');
//       table.appendChild(col);
//       row.classList.add('ch-item');
//     }
//   }
// }

var chessWrap = document.querySelector('.ch-wrap');

var i = 0,
  count = 0;

while (count < 8 * 8) {
  var item = document.createElement('div');
  chessWrap.appendChild(item);

  item.classList.add('ch-item');

  if (i && i % 2) item.classList.add('ch-black');

  i += (i + 2) % 9 ? 1 : 2;
  count++;
}
