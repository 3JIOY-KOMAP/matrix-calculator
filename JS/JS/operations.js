function trans() { //функция транпонирования матрицы
    clearResult(); //вызов функции очистки поля результатов
    let matrix = []; //создание пустого массива
    let row = [];//создание пустого массива, который будет вставать в предыдущий массив в роли элемента

    for (let i = 0; i<Tr; i++) {  //цикл, считывающий значения из полей ввода
        for (let j = 0; j<Cl; j++) {row[j] = parseInt(document.getElementById(`n${i}_${j}`).value)}; //каждый элемент сначала заносится в строку
        matrix[i] = row; //строка заносится в массив
        row=[]; //обнуление строки
    }

    for (let i = 0; i<Cl; i++) { //цикл транспонирования матрицы 
        for (let j = 0; j < i; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]; //элементы отзеркаливаются по главной диагонали
        }
    }
    fillTable('result', matrix); //функция вывода результата
}

function sumWithNum() { //функция прибавления числа к матрице
    clearResult();
    let matrix = [];
    let row = [];

    for (let i = 0; i<Tr; i++) { 
        for (let j = 0; j<Cl; j++) {row[j] = parseInt(document.getElementById(`n${i}_${j}`).value)};
        matrix[i] = row;
        row=[];
    }

    let num = parseInt(prompt('Введите число: ', 0)); //вывод всплывающего окна и получение числа
    for (let i = 0; i<Tr; i++) {//цикл прибавления к каждому элементу числа
        for (let j = 0; j<Cl; j++) {
            matrix[i][j] = matrix[i][j]+num; //прибавление к содержимому ячейки числа
        }
    }
    fillTable('result', matrix);   
}

function multiWithNum() { //функция умножения матрицы на число, идентичная предыдущей. Единственное отличие - вместо сложения идет умножение
    clearResult();
    let matrix = [];
    let row = [];

    for (let i = 0; i<Tr; i++) { 
        for (let j = 0; j<Cl; j++) {row[j] = parseInt(document.getElementById(`n${i}_${j}`).value)};
        matrix[i] = row;
        row=[];
    }

    let num = prompt('Введите число: ', 0);
    for (let i = 0; i<Tr; i++) {
        for (let j = 0; j<Cl; j++) {
            matrix[i][j] = (matrix[i][j])*num;
        }
    }
    fillTable('result', matrix); 
}

function subNum() {//функция вычитания из матрицы числа, идентичная предыдущей. Единственное отличие - вместо умножения идет вычитание
    clearResult();
    let matrix = [];
    let row = [];

    for (let i = 0; i<Tr; i++) { 
        for (let j = 0; j<Cl; j++) {row[j] = parseInt(document.getElementById(`n${i}_${j}`).value)};
        matrix[i] = row;
        row=[];
    }

    let num = prompt('Введите число: ', 0);
    for (let i = 0; i<Tr; i++) {
        for (let j = 0; j<Cl; j++) {
            matrix[i][j] = matrix[i][j]-num;
        }
    }
    fillTable('result', matrix); 
}

function getDet() { //функция получения значения детерминанта, при помощи второй функции
    clearResult();
    if (Tr != Cl) { //проверка квадратности матрицы, так как определитель есть только у кквадратной матрицы
        alert("Матрицы не квадратная, операция невозможна");//вывод сообщения об ошибке
        return false; //прерывание функции
    }
    let matrix = []; 
    let row = [];

    for (let i = 0; i<Tr; i++) { 
        for (let j = 0; j<Cl; j++) {row[j] = parseInt(document.getElementById(`n${i}_${j}`).value)};
        matrix[i] = row;
        row=[];
    }

    alert(Determinant(matrix)); //вывод детерминанта в всплывающем окне
}

function Determinant(matrix) { //функция вычисления детерминанта при помощи алгоритма Барейса
    let N = matrix.length; //вычисление длины массива
    let A = []; //создание массива
    denom = 1; //знаменатель
    exchanges = 0; //счетчик                           

    for (let i = 0; i<N; i++) { //заполнение матрицы A значениями из matrix
        A[i] = [];
        for (let j = 0; j < N; j++) {
            A[i][j] = matrix[i][j];
        }
    }
    for (let i=0; i<N-1; i++) { //перебор строк матрицы, кроме последней
        let maxN = i; //идентификатор максимального числа
        let maxValue = Math.abs(A[i][i]); //переменная максимального элемента строки
        for (let j=i+1; j<N; j++) { //перебор элементов строки, который находит максимальный элемент
            let value = Math.abs(A[j][i]);//присвоение значения
            if (value > maxValue) { //проверка
                maxN = j; maxValue = value; //если проверка провалена, назначается новый максимальный элемент
            }
        }
        if (maxN > i) { //если максимальный элемент принадлежит не выбранной строке, то нужна перестановка строк местами
            let temp = A[i]; 
            A[i]=A[maxN]; 
            A[maxN] = temp; 
            exchanges++; //срабатывает инкремент счетчика
        }
        else { //иначе идет проверка на ноль
            if (maxValue == 0) return maxValue;
        }
        let value1 = A[i][i];
        for (let j = i+1; j<N; j++) { //строка вычитается из последующих
            let value2 = A[j][i];
            A[j][i]=0;
            for (let k=i+1; k<N; k++) {
                A[j][k]=(A[j][k]*value1-A[i][k]*value2)/denom;}
            }
            denom = value1; //заменатель принимает значение самого правого и нижнего элемента, из допустимого диапазона
        }
    if (exchanges%2) return -A[N-1][N-1]; //если количество перестановок четное - определитель отрицательный, определитель - крайняя верхняя левая ячейка (матрица принимает вид нижнетреугольной)
    else return A[N-1][N-1]; //если перестановок нечетное количество - определитель положительный
    
}

function AdjugateMatrix(A)   //вычисление союзной матрицы, для последующего нахождения обратной матрицы
{                                        
    let N = A.length; //получение количества массивов в вводимой матрице
    let adjA = []; //создание результатной матрицы
    for (let i = 0; i < N; i++) {  //цикл для получения союзной матрицы
        adjA[i] = []; //создается строка в союзной матрице
        for (let j = 0; j < N; j++) {  //перебор элементов исходной матрицы
            let B = [], sign = ((i+j)%2==0) ? 1 : -1; //создание "буферной" матрицы, для вычисления алгебраических дополнений элементов
            //в следующих двух циклах в буферную матрицу попадают элементы, которые не вычеркиваются (вычеркиваются элементы по вертикали и горизонтали от исходного элемента)
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
            adjA[ i ][j] = sign*Determinant(B);   //элемент союзной матрицы = детерминант  буферной матрицы
        }
    }
    return adjA; //возвращение союзной матрицы
}


function getInverse() { //функция получения обратной матрицы
    clearResult();
    let matrix = [];
    let row = [];

    for (let i = 0; i<Tr; i++) { 
        for (let j = 0; j<Cl; j++) {row[j] = parseInt(document.getElementById(`n${i}_${j}`).value)};
        matrix[i] = row;
        row=[];
    }
    
    let det = Determinant(matrix); //получение детерминанта введенной матрицы
    if (det == 0) {alert("Детерминант равен 0, невозможно выполнить функцию"); return false}; //прерывание функции, если детерминант равен 0
    let N = matrix.length; matrix = AdjugateMatrix(matrix); //получение длины массива и получение союзной матрицы
    for (let i = 0; i<N; i++) { //циклы обработки матрицы
        for (let j = 0; j<N; j++) {// применение формулы, обратная матрица = союзная матрица деленная на детерминант, цикл применяет формулу к каждому элементу матрицы
            matrix[i][j] = (matrix[i][j]/det);
        }
    }
    fillTable('result', matrix); 
}

function pow() { //функция вывода матрицы, после возведения в степень
    clearResult();
    let matrix = [];
    let row = [];

    for (let i = 0; i<Tr; i++) { 
        for (let j = 0; j<Cl; j++) {row[j] = parseInt(document.getElementById(`n${i}_${j}`).value)};
        matrix[i] = row;
        row=[];
    }
    let n = prompt('Введите число: ', 0);
    let result = goDegree(n, matrix); //вызов функции возведения в степень

    fillTable('result', result);
}

function goDegree(n, A) { //функция возведения в степень
    if (n == 1) return A; //если степень равна 1 - выводится оригинальная матрицы
    else return multiMatrix(A, goDegree(n-1, A) ); //рекурсивный вызов функции умножения матриц и возведения в степень
}


function multiMatrix (A,B) { //функция умножения матриц, возвращающая матрицу. Применяется в функциях
    let rowsA = A.length;
    let colsA = A[0].length;
    let rowsB = B.length;
    let colsB = B[0].length;
    C = []; 
    for (let i = 0; i < rowsA; i++) C[i] = []; //матрица получает количество строк от первой матрицы, а количество столбцов от второй
    for (let k = 0; k < colsB; k++) {  //матрица С заполняется результатами 
        for (let i = 0; i < rowsA; i++) { //перебор строки  
            let t = 0; //создание "контейнера"
            for (let j = 0; j < rowsB; j++) t += A[i][j]*B[j][k]; //в контейнере складывается результат умножения строки первой матрицы на столбцы второй матрицы
            C[i][k] = t; //элемент результатной матрицы получает значение контейнера
        }
    }
    return C; //возвращение результата
}

function Rank() { //функция получения ранга матрицы, выводящая его в всплывающем окне
    clearResult();
    let matrix = [];
    let row = [];
    for (let i = 0; i<Tr; i++) { 
        for (let j = 0; j<Cl; j++) {row[j] = parseInt(document.getElementById(`n${i}_${j}`).value)};
        matrix[i] = row;
        row=[];
    }
    let k = (Tr < Cl ? Tr : Cl); //к примет значение большего (количества строк или столбцов)
    let r = 1; //счетчик
    let rank = 0; //переменная ранга матрицы
    while (r <= k) { //пока r не достигнет к
        let B = []; //создание буферной матрицы
        for (let i = 0; i < r; i++) B[ i ] = [];//заполнение буферной матрицы строками
        for (let a = 0; a < Tr-r+1; a++) { //при помощи буферной матрицы вычисляются миноры матрицы
            for (let b = 0; b < Cl-r+1; b++) { 
                for (let c = 0; c < r; c++) { 
                    for (let d = 0; d < r; d++) B[c][d] = matrix[a+c][b+d]; //в буферную матрицу сначала попадает каждый элемент отдельно, потом квадраты по 2, затем квадраты по 3 и т.д. Если на всех шагах детерминант будет положительным, то ранг - максимальный, если на определенном шаге детерминант станет 0 - ранг=номеру шага
                }
                if (Determinant(B) != 0) rank = r; //если детерминант буферной матрицы будет не равен нулю, она примет его значение (минимальный ранг = 1, и идет строго в положительную сторону, т.е. когда примет значение 0 - цикл окончен)
            }       
        }
        r++;
    }
    alert(rank);
}

function clearResult() { //функция очистки поля результатов
    let str = document.getElementById('result'); //нахождение поля результатов по Id
    str.innerHTML = ``; //очистка содеожимого поля
}

function clearResultM() {//функция очистки поля результатов для вкладки с двумя матрицами
    let str = document.getElementById('result2');//нахождение поля результатов по Id
    str.innerHTML = ``; //очистка содеожимого поля
}
function clearInput() { //функция очистки полей для операций с 1 матрицей
    let matrix = [];
    let row = [];
    for (let i = 0; i<Tr; i++) { 
        for (let j = 0; j<Cl; j++) {row[j] = parseInt(document.getElementById(`n${i}_${j}`).value)};
        matrix[i] = row;
        row=[];
    }
    for (let i = 0; i<Tr; i++) { //заполнение первоначальной матрицы 0
        for (let j = 0; j<Cl; j++) {
            buf = document.getElementById(`n${i}_${j}`); //получение ячейки по ID
            buf.value = "0"; //запись "0" в ячейку
        }
    }
    clearResult(); //очистка результатов
}

function clearInput2() { //очистка полей для операций с 2 матрицами
    for (let i = 0; i<numTr; i++) { //заполнение матрицы 1 нулями, перебор элементов матрицы
        for (let j = 0; j<numCl; j++) { //перебор элементов строки
            document.getElementById(`a${i}_${j}`).value = "0"; //получение элемента по id и заполнение его 0
        }
    }
    for (let i = 0; i<numTr2; i++) {//заполнение матрицы 2 нулями
        for (let j = 0; j<numCl2; j++) {
            document.getElementById(`b${i}_${j}`).value = "0"; //получение элемента по id и заполнение его 0
        }
    }
    clearResultM();//очистка результатов
}

function getMatrix () { //функция получения матрицы в переменную и возвращения ее в программу
    let matrix1 = []; //создание будущей матрицы
    row = []; //создание будущих строк
    for (let i = 0; i<numTr; ++i) { //цикл, собирающий матрицы
        for (let j = 0; j<numCl; ++j) {
            row[j] = parseInt(document.getElementById(`a${i}_${j}`).value); //считывание информации из ячейки таблицы на сайте по Id и занесение в виде элемента в массив(строку)
        }
        matrix1[i] = row; //занесение массива(строки) вдругой массив, образуется матрица
        row=[]; //обнуление массива(строки)
    }
    return matrix1;//возвращение матрицы по вызову
}
function getMatrix2 () { //функция получения второй матрицы, аналогична предудщей, обусловлена отличием в Id полей ввода на сайте
    let matrix2 = [];
    let row2 = [];
    for (let i = 0; i<numTr2; ++i) { 
        for (let j = 0; j<numCl2; ++j) {
            row2[j] = document.getElementById(`b${i}_${j}`).value; //считывание информации происходит по другому блоку id, из-за чего и создана вторая функция
            row2[j] = parseInt(row2[j]);
        }
        matrix2[i] = row2;
        row2=[];
    }
    return matrix2;
    
}

function fillTable(res, A) { //вывод результатной матрицы
    clearResultM();
    let table = document.getElementById(res); //получение поля по ID
    for (let i = 0; i < A.length; i++) { //цикл заполнения строками
        let tr = document.createElement('tr'); //создание строки
        for (let j = 0; j < A[i].length; j++) {  //цикл заполнения ячейками 
            let td = document.createElement('td'); //создание ячеек
            td.innerHTML = (A[i][j]).toFixed(2); //вставка в ячейку числа, с сокращением до 2 знаков после запятой
            td.setAttribute('class', "calc__cell") //присвоение класса ячейке
            tr.appendChild(td); //вставка ячейки в строку
        }
        table.appendChild(tr);//вставка строки в матрицу
    }
}

function SumMatrix() { //операция сложения матриц
    if ( numTr!=numTr2 || numCl!=numCl2 ) { //проверка возможности выполнения операции
        alert("Матрицы должны быть одного размера, невозможно выполнить операцию");//вывод сообщения, в случае если операция невохможна, с пояснением
        return false;//прерывание функции
    }
    let matrix1 = getMatrix(); //получение матрицы 1
    let matrix2 = getMatrix2(); //получение матрицы 2
    let C = [];
    for (let i = 0; i < numTr; i++) { //цикл операции
        C[i]=[]; //создание массива-строки
        for (let j=0; j<numCl;j++) { //цикл заполнения строки элементами
            C[i][j] = matrix1[i][j]+matrix2[i][j]; //элемент новой матрицы = сумме элементов матриц на сайте
        }
    }

    fillTable('result2', C); //создание таблицы результатов и вывод ее на сайте
}



function minusMatrix () { //функция вычитания, аналогична предыдущей с различием только в операции
    if ( numTr!=numTr2 || numCl!=numCl2 ) {
        alert("Матрицы должны быть одного размера, невозможно выполнить операцию");
        return false;
    }
    let matrix1 = getMatrix();
    let matrix2 = getMatrix2();

    let C = [];
    for (let i = 0; i < numTr; i++) {
        C[i]=[];
        for (let j=0; j<numCl;j++) {
            C[i][j] = matrix1[i][j]-matrix2[i][j];
        }
    }

    fillTable('result2', C);
}

function multiplexor() {//функция умножения
    if (numCl != numTr2) { //проверка возможности выполнения операции
        alert("количество столбцов первой матрицы не равно количеству строк второй матрицы, невозможно выполнить операцию"); //вывод сообщения, в случае если операция невохможна, с пояснением
        return false; //прерывание функции
    }
    let matrix1 = getMatrix(); //получение матрицы 1
    let matrix2 = getMatrix2(); //получение матрицы 2

    let C = multiMatrix(matrix1, matrix2); //выполнение операции при помощи вызова функции
    fillTable('result2', C); //создание таблицы результатов и вывод ее на сайт
}