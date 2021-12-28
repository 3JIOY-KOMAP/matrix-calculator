let numTr = 2; 
let numCl = 2;
let numTr2 = 2;
let numCl2 = 2;
function plusrow (){
  let table = document.getElementById('matrixOne');
  let row = table.insertRow(-1);
  numTr +=1;
  for (let j = 0, J = table.rows[0].cells.length; j < J; j++) {
      let input = document.createElement('input');
      input.setAttribute('name', 'a' + (table.rows.length - 1) +'_' + j);
      input.setAttribute('id',  'a' + (table.rows.length - 1) +'_' + j);
      input.setAttribute('class', "calc__cell");
      input.setAttribute('value', "0");
      let cell = row.insertCell(-1)
      cell.appendChild(input);
  }
}

function delrow () {
  let table = document.getElementById('matrixOne');
  if (table.rows.length < 2) {alert('В матрице должна остаться минимум одна строка. Команда отменена.'); return}
  table.deleteRow(table.rows.length - 1);
  numTr-=1;
}

function pluscol () {
  let table = document.getElementById('matrixOne');
  numCl+=1;
  for (let j = 0, J = table.rows.length; j < J; j++) {
      let input = document.createElement('input');
      input.setAttribute('name','a' + j +'_' + table.rows[j].cells.length);
      input.value = "0";
      input.setAttribute('id','a' + j +'_' + table.rows[j].cells.length);
      input.setAttribute('class', "calc__cell");
      let cell = table.rows[j].insertCell(-1)
      cell.appendChild(input);
  }
}

function delcol () {
  let table = document.getElementById('matrixOne');
  if (table.rows[0].cells.length < 2) {alert ('В матрице должен остаться минимум один столбец. Команда отменена.'); return}
  for (let j = 0, J = table.rows.length; j < J; j++) {let ceL = table.rows[j].cells.length; if (ceL > 1) table.rows[j].deleteCell(ceL - 1)}
  numCl-=1;
}

function plusrowTwo (){
  
  let table = document.getElementById('matrixTwo');
  let row = table.insertRow(-1);
  numTr2 += 1;
  for (let j = 0, J = table.rows[0].cells.length; j < J; j++) {
      let input = document.createElement('input');
      input.setAttribute('name', 'b' + (table.rows.length - 1) +'_' + j);
      input.setAttribute('id',  'b' + (table.rows.length - 1) +'_' + j);
      input.setAttribute('class', "calc__cell");
      input.setAttribute('value', "0");
      let cell = row.insertCell(-1)
      cell.appendChild(input);
  }
}

function delrowTwo () {
  let table = document.getElementById('matrixTwo');
  if (table.rows.length < 2) {alert('В матрице должна остаться минимум одна строка. Команда отменена.'); return}
  table.deleteRow(table.rows.length - 1);
  numTr2 -= 1;
}

function pluscolTwo () {
  let table = document.getElementById('matrixTwo');
  for (let j = 0, J = table.rows.length; j < J; j++) {
      let input = document.createElement('input');
      input.setAttribute('name','b' + j +'_' + table.rows[j].cells.length);
      input.value = "0";
      input.setAttribute('id','b' + j +'_' + table.rows[j].cells.length);
      input.setAttribute('class', "calc__cell");
      let cell = table.rows[j].insertCell(-1)
      cell.appendChild(input);
  }
  numCl2+=1;
}

function delcolTwo () {
  let table = document.getElementById('matrixTwo');
  if (table.rows[0].cells.length < 2) {alert ('В матрице должен остаться минимум один столбец. Команда отменена.'); return}
  for (let j = 0, J = table.rows.length; j < J; j++) {let ceL = table.rows[j].cells.length; if (ceL > 1) table.rows[j].deleteCell(ceL - 1)}
  numCl2-=1;
}