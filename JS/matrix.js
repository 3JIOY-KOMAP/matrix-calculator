let Tr = 2; //глобальные переменные
let Cl = 2;

function plusRow (){ //функция добавления строки
    let table = document.getElementById('table'); //получения элемента по Id
    let row = table.insertRow(-1); 
    Tr +=1;
    for (let j = 0, J = table.rows[0].cells.length; j < J; j++) {
        let input = document.createElement('input');
        input.setAttribute('name', 'n' + (table.rows.length - 1) +'_' + j);
        input.setAttribute('id',  'n' + (table.rows.length - 1) +'_' + j);
        input.setAttribute('class', "calc__cell");
        input.setAttribute('value', "0");
        let cell = row.insertCell(-1)
        cell.appendChild(input);
    }
}

function delRow () { //функция удаления строки
    let table = document.getElementById('table');
    if (table.rows.length < 2) {alert('В матрице должна остаться минимум одна строка. Команда отменена.'); return}
    table.deleteRow(table.rows.length - 1);
    Tr-=1;
}

function plusCol () { //функция добавления столбца
    let table = document.getElementById('table');
    Cl+=1;
    for (let j = 0, J = table.rows.length; j < J; j++) {
        let input = document.createElement('input');
        input.setAttribute('name','n' + j +'_' + table.rows[j].cells.length);
        input.setAttribute('value', "0");
        input.setAttribute('id','n' + j +'_' + table.rows[j].cells.length);
        input.setAttribute('class', "calc__cell");
        let cell = table.rows[j].insertCell(-1)
        cell.appendChild(input);
    }
}

function delCol () { //функция удаления столбца
    let table = document.getElementById('table');
    Cl-=1;
    if (table.rows[0].cells.length < 2) {alert ('В матрице должен остаться минимум один столбец. Команда отменена.'); return}
    for (let j = 0, J = table.rows.length; j < J; j++) {let ceL = table.rows[j].cells.length; if (ceL > 1) table.rows[j].deleteCell(ceL - 1)}
}

