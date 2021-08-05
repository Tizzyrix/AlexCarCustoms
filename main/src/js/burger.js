let brgIc = document.querySelector('#burger');
let brgIcItem = document.querySelector('#burger span')
let brgIcItemBefore = document.querySelector('#burger span::after')
let brgIcItemAfter = document.querySelector('#burger span::before')
let brgMenu = document.querySelector('.menuB');

brgIc.onclick = () => {
    brgIcItem.classList.toggle('brgActive');
    if ( brgIcItem.classList.contains('brgActive') ) {
        brgMenu.style.left = '0';
    } else {
        brgMenu.style.left = '-100%';
    }
    let intro = document.querySelector('.intro')
    let introStyles = window.getComputedStyle(intro);
    let introHeight = Math.floor(introStyles.height.substring(0, introStyles.height.length - 2));
    let introMargin = Math.floor(introStyles.marginTop.substring(0, introStyles.marginTop.length - 2));

    let header = document.querySelector('header');
    let headerStyles = window.getComputedStyle(header);
    let headerHeight = Math.floor(headerStyles.height.substring(0, headerStyles.height.length - 2));
    let headerMargin = Math.floor(headerStyles.marginTop.substring(0, headerStyles.marginTop.length - 2));

    brgMenu.style.height = `${ (introHeight + introMargin) + (headerHeight + headerMargin)  + 10}px`
};