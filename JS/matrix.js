function plusRow (){
    let table = document.getElementById('table');
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
    let result = document.getElementById('result');
    let row2 = result.insertRow(-1);
    for (let j = 0, J = result.rows[0].cells.length; j < J; j++) {
        let input = document.createElement('p');
        input.setAttribute('id',  'r' + (result.rows.length - 1) +'_' + j);
        input.setAttribute('class', "calc__cell");
        let cell = row2.insertCell(-1)
        cell.appendChild(input);
    }
}

function delRow () {
    let table = document.getElementById('table');
    if (table.rows.length < 2) {alert('В матрице должна остаться минимум одна строка. Команда отменена.'); return}
    table.deleteRow(table.rows.length - 1);
    let result = document.getElementById('result');
    if (result.rows.length < 2) {alert('В матрице должна остаться минимум одна строка. Команда отменена.'); return}
    result.deleteRow(result.rows.length - 1);
}

function plusCol () {
    let table = document.getElementById('table');
    for (let j = 0, J = table.rows.length; j < J; j++) {
        let input = document.createElement('input');
        input.setAttribute('name','n' + j +'_' + table.rows[j].cells.length);
        input.value = "0";
        input.setAttribute('id','n' + j +'_' + table.rows[j].cells.length);
        input.setAttribute('class', "calc__cell");
        let cell = table.rows[j].insertCell(-1)
        cell.appendChild(input);
    }
    let result = document.getElementById('result');
    for (let j = 0, J = result.rows.length; j < J; j++) {
        let input = document.createElement('p');
        input.setAttribute('id','r' + j +'_' + result.rows[j].cells.length);
        input.setAttribute('class', "calc__cell");
        let cell = result.rows[j].insertCell(-1)
        cell.appendChild(input);
    }
}

function delCol () {
    let table = document.getElementById('table');
    if (table.rows[0].cells.length < 2) {alert ('В матрице должен остаться минимум один столбец. Команда отменена.'); return}
    for (let j = 0, J = table.rows.length; j < J; j++) {let ceL = table.rows[j].cells.length; if (ceL > 1) table.rows[j].deleteCell(ceL - 1)}
    let result = document.getElementById('result');
    if (result.rows[0].cells.length < 2) {alert ('В матрице должен остаться минимум один столбец. Команда отменена.'); return}
    for (let j = 0, J = result.rows.length; j < J; j++) {let ceL = result.rows[j].cells.length; if (ceL > 1) result.rows[j].deleteCell(ceL - 1)}
}

