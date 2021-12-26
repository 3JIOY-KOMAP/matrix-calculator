function plusrow (){
  
  let table = document.getElementById('matrixOne');
  let row = table.insertRow(-1);
  
  for (let j = 0, J = table.rows[0].cells.length; j < J; j++) {
      let input = document.createElement('input');
      input.setAttribute('name', 'n' + (table.rows.length - 1) +'_' + j);
      input.setAttribute('id',  'n' + (table.rows.length - 1) +'_' + j);
      input.setAttribute('class', "calc__cell");
      input.value = "0";
      let cell = row.insertCell(-1)
      cell.appendChild(input);
  }
  console.log(1);
}

function delrow () {
  let table = document.getElementById('matrixOne');
  if (table.rows.length < 2) {alert('В матрице должна остаться минимум одна строка. Команда отменена.'); return}
  table.deleteRow(table.rows.length - 1);
}

function pluscol () {
  let table = document.getElementById('matrixOne');
  for (let j = 0, J = table.rows.length; j < J; j++) {
      let input = document.createElement('input');
      input.setAttribute('name','n' + j +'_' + table.rows[j].cells.length);
      input.value = "0";
      input.setAttribute('id','n' + j +'_' + table.rows[j].cells.length);
      input.setAttribute('class', "calc__cell");
      let cell = table.rows[j].insertCell(-1)
      cell.appendChild(input);
  }
}

function delcol () {
  let table = document.getElementById('matrixOne');
  if (table.rows[0].cells.length < 2) {alert ('В матрице должен остаться минимум один столбец. Команда отменена.'); return}
  for (let j = 0, J = table.rows.length; j < J; j++) {let ceL = table.rows[j].cells.length; if (ceL > 1) table.rows[j].deleteCell(ceL - 1)}
}

function plusrowTwo (){
  
  let table = document.getElementById('matrixTwo');
  let row = table.insertRow(-1);
  
  for (let j = 0, J = table.rows[0].cells.length; j < J; j++) {
      let input = document.createElement('input');
      input.setAttribute('name', 'n' + (table.rows.length - 1) +'_' + j);
      input.setAttribute('id',  'n' + (table.rows.length - 1) +'_' + j);
      input.setAttribute('class', "calc__cell");
      input.value = "0";
      let cell = row.insertCell(-1)
      cell.appendChild(input);
  }
  console.log(1);
}

function delrowTwo () {
  let table = document.getElementById('matrixTwo');
  if (table.rows.length < 2) {alert('В матрице должна остаться минимум одна строка. Команда отменена.'); return}
  table.deleteRow(table.rows.length - 1);
}

function pluscolTwo () {
  let table = document.getElementById('matrixTwo');
  for (let j = 0, J = table.rows.length; j < J; j++) {
      let input = document.createElement('input');
      input.setAttribute('name','r' + j +'_' + table.rows[j].cells.length);
      input.value = "0";
      input.setAttribute('id','r' + j +'_' + table.rows[j].cells.length);
      input.setAttribute('class', "calc__cell");
      let cell = table.rows[j].insertCell(-1)
      cell.appendChild(input);
  }
}

function delcolTwo () {
  let table = document.getElementById('matrixTwo');
  if (table.rows[0].cells.length < 2) {alert ('В матрице должен остаться минимум один столбец. Команда отменена.'); return}
  for (let j = 0, J = table.rows.length; j < J; j++) {let ceL = table.rows[j].cells.length; if (ceL > 1) table.rows[j].deleteCell(ceL - 1)}
}