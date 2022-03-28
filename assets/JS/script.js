const buttonForm = document.querySelector('.header__form')
const modal = document.querySelector('.modal')
const header = document.querySelector('.header')
const formEsc = document.querySelector('.form__esc')
const cancel = document.getElementById('cancel')
const btnSubmit = document.querySelector('.submit')
const inputName = document.getElementById('name')
const inputPhone = document.getElementById('phone')
const form = document.querySelector('form')
const btnOff = document.querySelector('.scroll-off')
const btnOn = document.querySelector('.scroll-on')
const body = document.body;
const box = document.querySelector('.box')

function openModal() {
	let pagePosition = window.scrollY;
	document.body.classList.add('disable-scroll');
	document.body.dataset.position = pagePosition;
	document.body.style.top = -pagePosition + 'px';
    const modal = document.querySelector('.modal')
    const header = document.querySelector('.header')
    header.setAttribute('style', 'display: none;');
    modal.setAttribute('style', 'display: flex;');
}

function closeModal() {
	let pagePosition = parseInt(document.body.dataset.position, 10);
	document.body.style.top = 'auto';
	document.body.classList.remove('disable-scroll');
	window.scroll({ top: pagePosition, left: 0 });
	document.body.removeAttribute('data-position');
    const modal = document.querySelector('.modal')
    const header = document.querySelector('.header')
    header.setAttribute('style', 'display: flex;');
    modal.setAttribute('style', 'display: none;');
    document.querySelector('.form').style.display = 'flex';
    document.querySelector('.box').style.display = 'none';
    document.querySelector('.data').style.display = 'none';
}

function changeData() {
    const name = /^[A-Za-zА-Яа-я]{3,20}$/;
    if(!name.test(inputName.value)){
        alert('Введите корректное Имя. Не менее 3 букв, без чисел и спец. знаков')
    }
    const phone = /^[8]+\d{10}$/
    if(!phone.test(inputPhone.value)) {
        alert('Введите корректный телефонный номер. Первая цифра 8 и 10 цифр за ней')
    }
    box.style.display = 'flex';
    inputName.value='';
    inputPhone.value='';
    
    let xhr = new XMLHttpRequest();
    xhr.open('get', "https://jsonplaceholder.typicode.com/todos", true)
    xhr.send()
    let k = 0;
    function build() {
        if (xhr.status != 200) {
            document.querySelector('.error__text').value += `
                Код ошибки:${xhr.status}
            `
            document.querySelector('.error').style.display = 'flex'
            setTimeout(closeModal, 1000)
            setTimeout(()=> {
                document.querySelector('.form').style.display = 'flex';
            }, 1100)
            setTimeout(()=> {
                document.querySelector('.box').style.display = 'none';
            }, 1100)
            setTimeout(()=> {
                document.querySelector('.data').style.display = 'none';
            }, 1100)
            setTimeout(()=> {
                document.querySelector('.error').style.display = 'none'
            }, 1100)
        }
        if ((xhr.readyState == 4) && (xhr.status == 200)) {
            data = JSON.parse(xhr.responseText);
            k = data.length;
            const dataValue = document.querySelector('.data__values')
            for (let i = 0; i < data.length; i++) {
                if ((data[i].userId == 5) && (data[i].completed == false)) {
                    let row = `<tr class="data__row">
                            <td class="cell data__number">${i}</td>
                            <td class="cell data__user">${data[i].userId}</td>
                            <td class="cell data__id">${data[i].id}</td>
                            <td class="cell data__title">${data[i].title}</td>
                            <td class="cell data__completed">${data[i].completed}</td>
                        </tr>`
                    dataValue.innerHTML += row
                }
            }    
        };
        console.log(xhr.status)
    }

    setTimeout(build, 1000);
    document.querySelector('.form').style.display = 'none';
    setTimeout(()=> {
        document.querySelector('.box').style.display = 'none';
    }, 1000)
    setTimeout(()=> {
        document.querySelector('.data').style.display = 'flex';
    }, 1200)
    
}
