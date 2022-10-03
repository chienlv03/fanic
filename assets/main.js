const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const headerHome = $('.js-header-section-home')
const homeList = $('.home-list')
const headerPage = $('.js-header-section-page')
const pageList = $('.header-page')

// const CollecBtns = $$('.collection-btn')
// const collecItems = $$('.collection-item')

headerHome.onclick = function() {
    const open = homeList.classList.contains("js-display-block")
    if(open) {
        homeList.classList.remove('js-display-block');
        pageList.classList.remove('js-display-flex');
    } else {
        homeList.classList.add('js-display-block');
    }
}

headerPage.onclick = function() {
    const open = pageList.classList.contains("js-display-flex")
    if(open) {
        pageList.classList.remove('js-display-flex');
    } else {
        pageList.classList.add('js-display-flex');
    }
}

// for(let collecItem of collecItems) {

//     collecItem.onmouseover = function() {
//         console.log(Math.random);
//     }
// }