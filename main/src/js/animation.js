let blockBD = document.querySelector('.bd');
let boxBD = document.querySelector('.bd .item__box');
let hoverBD = document.querySelector('.bd .item__box-hover');
let btnBD = document.querySelector('.bd span');
let cardBD = document.querySelector('.bdl');
let closeBtnBD = document.querySelector('.bdl .list__closeBtn');

let blockINT = document.querySelector('.int');
let boxINT = document.querySelector('.int .item__box');
let hoverINT = document.querySelector('.int .item__box-hover');
let btnINT = document.querySelector('.int span');
let cardINT = document.querySelector('.intl');
let closeBtnINT = document.querySelector('.intl .list__closeBtn');

let blockWH = document.querySelector('.wh');
let boxWH = document.querySelector('.wh .item__box');
let hoverWH = document.querySelector('.wh .item__box-hover');
let btnWH = document.querySelector('.wh span');
let cardWH = document.querySelector('.whl');
let closeBtnWH = document.querySelector('.whl .list__closeBtn');

let serviceBlock = document.querySelector('.services');

//---Hover---

boxBD.onmouseover = () => {
    hoverBD.style.width = '100%';
    btnBD.style.opacity = '1';
};
boxBD.onmouseout = () => {
    hoverBD.style.width = '5%';
    btnBD.style.opacity = '0';
};


boxINT.onmouseover = () => {
    hoverINT.style.width = '100%';
    btnINT.style.opacity = '1';
};
boxINT.onmouseout = () => {
    hoverINT.style.width = '5%';
    btnINT.style.opacity = '0';
};


boxWH.onmouseover = () => {
    hoverWH.style.width = '100%';
    btnWH.style.opacity = '1';
};
boxWH.onmouseout = () => {
    hoverWH.style.width = '5%';
    btnWH.style.opacity = '0';
};

//---onclick---

btnBD.onclick = () => {
    let width = document.documentElement.clientWidth;
    if (width <= 768 && ( cardINT.classList.contains('listActive') || cardWH.classList.contains('listActive') )) {
        blockINT.classList.remove('columns__itemActive');
        cardINT.classList.remove('listActive');
        blockWH.classList.remove('columns__itemActive');
        cardWH.classList.remove('listActive');

        blockBD.classList.add('columns__itemActive');
        cardBD.classList.add('listActive');
    } else if (width <= 768) {
        blockBD.classList.add('columns__itemActive');
        cardBD.classList.add('listActive');
    } else if (cardINT.classList.contains('listActive') || cardWH.classList.contains('listActive') ) {
        cardINT.classList.remove('listActive');
        cardWH.classList.remove('listActive');
        cardBD.classList.add('listActive');
    } else {
        serviceBlock.classList.add('servicesActive');
        cardBD.classList.add('listActive');
    }
};

btnINT.onclick = () => {
    let width = document.documentElement.clientWidth;
    if (width <= 768 && ( cardBD.classList.contains('listActive') || cardWH.classList.contains('listActive') ) ) {
        blockBD.classList.remove('columns__itemActive');
        cardBD.classList.remove('listActive');
        blockWH.classList.remove('columns__itemActive');
        cardWH.classList.remove('listActive');

        blockINT.classList.add('columns__itemActive');
        cardINT.classList.add('listActive');
    } else if (width <= 768) {
        blockINT.classList.add('columns__itemActive');
        cardINT.classList.add('listActive');
    } else if (cardBD.classList.contains('listActive') || cardWH.classList.contains('listActive') ) {
        cardBD.classList.remove('listActive');
        cardWH.classList.remove('listActive');
        cardINT.classList.add('listActive');
    } else {
        serviceBlock.classList.add('servicesActive');
        cardINT.classList.add('listActive');
    }
};

btnWH.onclick = () => {
    let width = document.documentElement.clientWidth;
    if (width <= 768 && ( cardBD.classList.contains('listActive') || cardINT.classList.contains('listActive') ) ) {
        blockBD.classList.remove('columns__itemActive');
        cardBD.classList.remove('listActive');
        blockINT.classList.remove('columns__itemActive');
        cardINT.classList.remove('listActive');

        blockWH.classList.add('columns__itemActive');
        cardWH.classList.add('listActive');
    } else if (width <= 768) {
        blockWH.classList.add('columns__itemActive');
        cardWH.classList.add('listActive');
    } else if (cardBD.classList.contains('listActive') || cardINT.classList.contains('listActive') ) {
        cardBD.classList.remove('listActive');
        cardINT.classList.remove('listActive');
        cardWH.classList.add('listActive');
    } else {
        serviceBlock.classList.add('servicesActive');
        cardWH.classList.add('listActive');
    }
};

//---Remove---

closeBtnBD.onclick = () => {
    cardBD.classList.remove('listActive');
    serviceBlock.classList.remove('servicesActive');
    blockBD.classList.remove('columns__itemActive');
    blockINT.classList.remove('columns__itemActive');
    blockWH.classList.remove('columns__itemActive');
};

closeBtnINT.onclick = () => {
    cardINT.classList.remove('listActive');
    serviceBlock.classList.remove('servicesActive');
    blockBD.classList.remove('columns__itemActive');
    blockINT.classList.remove('columns__itemActive');
    blockWH.classList.remove('columns__itemActive');
};

closeBtnWH.onclick = () => {
    cardWH.classList.remove('listActive');
    serviceBlock.classList.remove('servicesActive');
    blockBD.classList.remove('columns__itemActive');
    blockINT.classList.remove('columns__itemActive');
    blockWH.classList.remove('columns__itemActive');
};