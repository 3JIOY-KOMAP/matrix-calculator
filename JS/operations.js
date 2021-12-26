function trans() {
    let t = document.getElementById ('table');
    let trs =  t.getElementsByTagName ('tr').length;
    let tds = t.getElementsByTagName ('td').length;
    let matrix = [];
    let row = [];

    for (let i = 0; i<trs; i++) { 
        for (let j = 0; j<(tds/trs); j++) {row[j] = parseInt(parseInt(document.getElementById(`n${i}_${j}`).value))};
        matrix[i] = row;
        row=[];
    }

    console.log(matrix);
    for (let i = 0; i<(tds/trs); i++) { 
        for (let j = 0; j < i; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
            console.log(matrix);
        }
    }
    console.log(matrix);
    for (let i = 0; i<trs; i++) {
        for (let j = 0; j<(tds/trs); j++) {
            buf = document.getElementById(`r${i}_${j}`);
            buf.innerText = matrix[i][j];
        }
    }
}

function sumWithNum() {
    let t = document.getElementById ('table');
    let trs =  t.getElementsByTagName ('tr').length;
    let tds = t.getElementsByTagName ('td').length;
    let matrix = [];
    let row = [];

    for (let i = 0; i<trs; i++) { 
        for (let j = 0; j<(tds/trs); j++) {row[j] = parseInt(parseInt(parseInt(document.getElementById(`n${i}_${j}`).value)))};
        matrix[i] = row;
        row=[];
    }

    let num = parseInt(prompt('Введите число: ', 0));
    for (let i = 0; i<trs; i++) {
        for (let j = 0; j<(tds/trs); j++) {
            matrix[i][j] = matrix[i][j]+num;
        }
    }
    console.log(matrix);
    for (let i = 0; i<trs; i++) {
        for (let j = 0; j<(tds/trs); j++) {
            buf = document.getElementById(`r${i}_${j}`);
            buf.innerText = matrix[i][j];
        }
    }
}

function multiWithNum() {
    let t = document.getElementById ('table');
    let trs =  t.getElementsByTagName ('tr').length;
    let tds = t.getElementsByTagName ('td').length;
    let matrix = [];
    let row = [];

    for (let i = 0; i<trs; i++) { 
        for (let j = 0; j<(tds/trs); j++) {row[j] = parseInt(parseInt(document.getElementById(`n${i}_${j}`).value))};
        matrix[i] = row;
        row=[];
    }

    let num = prompt('Введите число: ', 0);
    for (let i = 0; i<trs; i++) {
        for (let j = 0; j<(tds/trs); j++) {
            matrix[i][j] = (matrix[i][j])*num;
        }
    }
    console.log(matrix);
    for (let i = 0; i<trs; i++) {
        for (let j = 0; j<(tds/trs); j++) {
            buf = document.getElementById(`r${i}_${j}`);
            buf.innerText = matrix[i][j];
        }
    }
}

function subNum() {
    let t = document.getElementById ('table');
    let trs =  t.getElementsByTagName ('tr').length;
    let tds = t.getElementsByTagName ('td').length;
    let matrix = [];
    let row = [];

    for (let i = 0; i<trs; i++) { 
        for (let j = 0; j<(tds/trs); j++) {row[j] = parseInt(document.getElementById(`n${i}_${j}`).value)};
        matrix[i] = row;
        row=[];
    }

    let num = prompt('Введите число: ', 0);
    for (let i = 0; i<trs; i++) {
        for (let j = 0; j<(tds/trs); j++) {
            matrix[i][j] = matrix[i][j]-num;
        }
    }
    console.log(matrix);
    for (let i = 0; i<trs; i++) {
        for (let j = 0; j<(tds/trs); j++) {
            buf = document.getElementById(`r${i}_${j}`);
            buf.innerText = matrix[i][j];
        }
    }
}

function getDet() {
    let t = document.getElementById ('table');
    let trs =  t.getElementsByTagName ('tr').length;
    let tds = t.getElementsByTagName ('td').length;
    let matrix = [];
    let row = [];

    for (let i = 0; i<trs; i++) { 
        for (let j = 0; j<(tds/trs); j++) {row[j] = parseInt(document.getElementById(`n${i}_${j}`).value)};
        matrix[i] = row;
        row=[];
    }

    alert(Determinant(matrix));
    
}

function Determinant(matrix) {
    let N = matrix.length;
    let A = [];
    denom = 1;
    exchanges = 0;

    for (let i = 0; i<N; i++) {
        A[i] = [];
        for (let j = 0; j < N; j++) {
            A[i][j] = matrix[i][j];
        }
    }
    for (let i=0; i<N-1; i++) {
        let maxN = i;
        let maxValue = Math.abs(A[i][i]);
        for (let j=i+1; j<N; j++) {
            let value = Math.abs(A[j][i]);
            if (value > maxValue) {
                maxN = j; maxValue=value;
            }
        }
        if (maxN > i) {
            let temp = A[i]; A[i]=A[maxN]; A[maxN] = temp; exchanges++;
        }
        else {
            if (maxValue == 0) return maxValue;
        }
        let value1 = A[i][i];
        for (let j = i+1; j<N; j++) {
            let value2 = A[j][i];
            A[j][i]=0;
            for (let k=i+1; k<N; k++) {
                A[j][k]=(A[j][k]*value1-A[i][k]*value2)/denom;}
            }
            denom = value1;
        }
    if (exchanges%2) return -A[N-1][N-1];
    else return A[N-1][N-1];
    
}

function AdjugateMatrix(A)   
{                                        
    let N = A.length, adjA = [];
    for (let i = 0; i < N; i++) { 
        adjA[ i ] = [];
        for (let j = 0; j < N; j++) { 
            let B = [], sign = ((i+j)%2==0) ? 1 : -1;
            for (let m = 0; m < j; m++) { 
                B[m] = [];
                for (let n = 0; n < i; n++)   B[m][n] = A[m][n];
                for (let n = i+1; n < N; n++) B[m][n-1] = A[m][n];
            }
            for (let m = j+1; m < N; m++) { 
                B[m-1] = [];
                for (let n = 0; n < i; n++)   B[m-1][n] = A[m][n];
                for (let n = i+1; n < N; n++) B[m-1][n-1] = A[m][n];
            }
            adjA[ i ][j] = sign*Determinant(B);   
        }
    }
    return adjA;
}


function getInverse() {
    let t = document.getElementById ('table');
    let trs =  t.getElementsByTagName ('tr').length;
    let tds = t.getElementsByTagName ('td').length;
    let matrix = [];
    let row = [];

    for (let i = 0; i<trs; i++) { 
        for (let j = 0; j<(tds/trs); j++) {row[j] = parseInt(document.getElementById(`n${i}_${j}`).value)};
        matrix[i] = row;
        row=[];
    }
    
    let det = Determinant(matrix);
    console.log(matrix);
    if (det == 0) return false;
    let N = matrix.length; matrix = AdjugateMatrix(matrix);
    console.log(matrix);
    for (let i = 0; i<N; i++) {
        for (let j = 0; j<N; j++) {
            matrix[i][j] = matrix[i][j]/det;
        }
    }
    console.log(1);
    for (let i = 0; i<trs; i++) {
        for (let j = 0; j<(tds/trs); j++) {
            buf = (document.getElementById(`r${i}_${j}`));
            buf.innerText = (matrix[i][j]).toFixed(2);
        }
    }
}

function pow() {
    let t = document.getElementById ('table');
    let trs =  t.getElementsByTagName ('tr').length;
    let tds = t.getElementsByTagName ('td').length;
    let matrix = [];
    let row = [];

    for (let i = 0; i<trs; i++) { 
        for (let j = 0; j<(tds/trs); j++) {row[j] = parseInt(document.getElementById(`n${i}_${j}`).value)};
        matrix[i] = row;
        row=[];
    }
    let n = prompt('Введите число: ', 0);
    let result = goDegree(n, matrix);

    for (let i = 0; i<trs; i++) {
        for (let j = 0; j<(tds/trs); j++) {
            buf = (document.getElementById(`r${i}_${j}`));
            buf.innerText = (result[i][j]).toFixed(2);
        }
    }
}

function goDegree(n, A) {
    if (n == 1) return A;
    else return multiMatrix(A, goDegree(n-1, A) );
}


function multiMatrix (A,B) {
    let rowsA = A.length;
    let colsA = A[0].length;
    let rowsB = B.length;
    let colsB = B[0].length;
    C = [];
    if (colsA != rowsB) return false;
    for (let i = 0; i < rowsA; i++) C[ i ] = [];
    for (let k = 0; k < colsB; k++) { 
        for (let i = 0; i < rowsA; i++) { 
            let t = 0;
            for (let j = 0; j < rowsB; j++) t += A[ i ][j]*B[j][k];
            C[ i ][k] = t;
        }
    }
    return C;
}

function Rank() {
    let t = document.getElementById ('table');
    let trs =  t.getElementsByTagName ('tr').length;
    let tds = t.getElementsByTagName ('td').length;
    let matrix = [];
    let row = [];
    for (let i = 0; i<trs; i++) { 
        for (let j = 0; j<(tds/trs); j++) {row[j] = parseInt(document.getElementById(`n${i}_${j}`).value)};
        matrix[i] = row;
        row=[];
    }
    let m = matrix.length;
    let n = matrix[0].length; 
    let k = (m < n ? m : n);
    let r = 1;
    let rank = 0;
    while (r <= k) {
        let B = [];
        for (let i = 0; i < r; i++) B[ i ] = [];
        for (let a = 0; a < m-r+1; a++) { 
            for (let b = 0; b < n-r+1; b++) { 
                for (let c = 0; c < r; c++) { 
                    for (let d = 0; d < r; d++) B[c][d] = matrix[a+c][b+d]; 
                }
                if (Determinant(B) != 0) rank = r;
            }       
        }
        r++;
    }
    alert(rank);
}

function clearInput() {
    let t = document.getElementById ('table');
    let trs =  t.getElementsByTagName ('tr').length;
    let tds = t.getElementsByTagName ('td').length;
    let matrix = [];
    let row = [];
    for (let i = 0; i<trs; i++) { 
        for (let j = 0; j<(tds/trs); j++) {row[j] = parseInt(document.getElementById(`n${i}_${j}`).value)};
        matrix[i] = row;
        row=[];
    }
    for (let i = 0; i<trs; i++) {
        for (let j = 0; j<(tds/trs); j++) {
            buf = document.getElementById(`n${i}_${j}`);
            buf.value = "0";
        }
    }
    for (let i = 0; i<trs; i++) {
        for (let j = 0; j<(tds/trs); j++) {
            buf = document.getElementById(`r${i}_${j}`);
            buf.innerText = '0';
        }
    }
}

function clearInput2() {
    let A = getMatrix();
    let B = getMatrix2();
    console.log(B);
    let trs = A.length;
    let n = B.length;
    let a = A[0].length;
    let b = B[0].length;
    for (let i = 0; i<trs; i++) {
        for (let j = 0; j<a; j++) {
            buf = document.getElementById(`a${i}_${j}`);
            buf.value = "0";
        }
    }
    for (let i = 0; i<n; i++) {
        for (let j = 0; j<b; j++) {
            buf = document.getElementById(`b${i}_${j}`);
            buf.value = '0';
        }
    }
    let str = document.getElementById('result2');
    str.innerHTML = ``;
}


function getMatrix () {
    let t = document.getElementById ('matrixOne');
    let trs =  t.getElementsByTagName ('tr').length;
    let tds = t.getElementsByTagName ('td').length;
    let matrix1 = [];
    let row = [];
    for (let i = 0; i<trs; i++) { 
        for (let j = 0; j<(tds/trs); j++) {
            row[j] = document.getElementById(`a${i}_${j}`).value;
            row[j] = parseInt(row[j]);
        }
        matrix1[i] = row;
        row=[];
    }
    return matrix1;
}
function getMatrix2 () {
    let table = document.getElementById ('matrixTwo');
    let trs2 =  table.getElementsByTagName ('tr').length;
    let tds2 = table.getElementsByTagName ('td').length;
    let matrix2 = [];
    let row2 = [];
    for (let i = 0; i<trs2; i++) { 
        for (let j = 0; j<(tds2/trs2); j++) {
            row2[j] = document.getElementById(`b${i}_${j}`).value;
            row2[j] = parseInt(row2[j]);
        }
        matrix2[i] = row2;
        row2=[];
    }
    console.log(matrix2)
    return matrix2;
    
}

function SumMatrix() {
    let matrix1 = getMatrix();
    let matrix2 = getMatrix2();

    let m = matrix1.length;
    let n = matrix1[0].length;
    let C = [];
    for (let i = 0; i < m; i++) {
        C[i]=[];
        for (let j=0; j<n;j++) {
            C[i][j] = matrix1[i][j]+matrix2[i][j];
        }
    }

    let table = document.getElementById('result2');

    fillTable(table, C);

    function fillTable(table, A) {
        for (let i = 0; i < A.length; i++) {
            let tr = document.createElement('tr');
            for (let j = 0; j < A[i].length; j++) { 
                let td = document.createElement('td');
                td.innerHTML = A[i][j];
                td.setAttribute('class', "calc__cell")
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
    }
}

function minusMatrix () {
    let matrix1 = getMatrix();
    let matrix2 = getMatrix2();

    let m = matrix1.length;
    let n = matrix1[0].length;
    let C = [];
    for (let i = 0; i < m; i++) {
        C[i]=[];
        for (let j=0; j<n;j++) {
            C[i][j] = matrix1[i][j]-matrix2[i][j];
        }
    }

    let table = document.getElementById('result2');

    fillTable(table, C);

    function fillTable(table, A) {
        for (let i = 0; i < A.length; i++) {
            let tr = document.createElement('tr');
            for (let j = 0; j < A[i].length; j++) { 
                let td = document.createElement('td');
                td.innerHTML = A[i][j];
                td.setAttribute('class', "calc__cell")
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
    }
}

function multiplexor() {
    let matrix1 = getMatrix();
    let matrix2 = getMatrix2();

    let C = multiMatrix(matrix1, matrix2);
    let table = document.getElementById('result2');
    fillTable(table, C);

    function fillTable(table, A) {
        for (let i = 0; i < A.length; i++) {
            let tr = document.createElement('tr');
            for (let j = 0; j < A[i].length; j++) { 
                let td = document.createElement('td');
                td.innerHTML = A[i][j];
                td.setAttribute('class', "calc__cell")
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
    }
}