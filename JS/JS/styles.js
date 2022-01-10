function oneMatrix () { //функция выбора работы с одной матрицей
    let elem = document.querySelector('.tumblr'); //получение элемента с классом 
    elem.setAttribute('style', 'display: none;'); //выключение отображения элемента

    let first = document.querySelector('.first');//получение элемента с классом 
    first.style.display = 'flex';//выключение отображения элемента
}

function twoMatrix () { //функция выбора работы с двумяматрциами
    let elem = document.querySelector('.tumblr');//получение элемента с классом 
    elem.setAttribute('style', 'display: none;'); //выключение отображения элемента

    let first = document.querySelector('.second');//получение элемента с классом 
    first.style.display = 'flex';//включение отображения элемента
}

function back () { //функция возврата к выбору режима
    let elem = document.querySelector('.tumblr');//получение элемента с классом 
    elem.setAttribute('style', 'display: inline-flex;');//ыключение отображения элемента
    let first = document.querySelector('.first');//получение элемента с классом 
    first.style.display = 'none';//выключение отображения элемента
    let second = document.querySelector('.second');//получение элемента с классом 
    second.style.display = 'none';//выключение отображения элемента
}