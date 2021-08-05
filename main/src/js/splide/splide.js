document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.splide', {
        width: '45vw',
        fixedHeight: '16vw',
        autoplay: true,
        interval: 2000,
        resetProgress: true,
        cover: true,
    } ).mount();
} );

// new Splide( '.splide', {
//     width: '45vw',
//     fixedHeight: '16vw',
//     autoplay: true,
//     interval: 2000,
//     resetProgress: true,
//     cover: true,
// } ).mount();