let toggle = document.querySelector('.switch input');
let lang = 'est';
// let car = document.querySelector('.target')

toggle.onclick = () => {
    if (toggle.checked) {
        lang = 'rus';
    } else {
        lang = 'est';
    }
    for (let key in langArr) {
            document.querySelector('.lng-' + key).innerHTML = langArr[key][lang];
        }
    let car = document.querySelector('.target')
    car.classList.toggle('comparisonLang')
    if (car.classList.contains('comparisonLang')) {
        car.src = "src/img/comparison/gtCleanv5.0.png"
    } else {
        car.src = "src/img/comparison/gtEstonia.png"
    }
}

