//capturar o height para facilitar os ajustes do header/nav-bar
const $logo = document.querySelectorAll('.logo')[0]

const $navBar = document.querySelectorAll('.nav-bar')[0]

// pegar o scroll da página

window.addEventListener('scroll',toggleNavBar,false);

function toggleNavBar() {
    if (window.pageYOffset >= $logo.offsetHeight && $navBar.classList.contains('abs-pos')) {
        $navBar.classList.remove('abs-pos');
        $navBar.classList.add('fix-pos');
    } else if (window.pageYOffset < $logo.offsetHeight && $navBar.classList.contains('fix-pos')){
        $navBar.classList.remove('fix-pos');
        $navBar.classList.add('abs-pos');
    }
}