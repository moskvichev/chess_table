'use strict';
for (var index = 0; index < table.length; index++) {
  table[index] = [8];
  //рисуем массив
  for (var row = 0; row < table.length; row++) {
    for (var col = 0; col < table[row].length; col++) {
      table[row][col] = row * col;
      col.document.createElement('div');
      table.appendChild(col);
      col.classList.add('ch-item');
      row.document.createElement('div');
      table.appendChild(col);
      row.classList.add('ch-item');
    }
  }
}
