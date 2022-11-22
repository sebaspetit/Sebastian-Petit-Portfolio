function show() {
    let hidden = document.getElementsByClassName('hidden');
    for(let i = 0 ; i < hidden.length; i++){
        if (hidden[i].style.display == "none") {
            hidden[i].style.display = "block"
        } else {
            hidden[i].style.display = "none"
        }
    }
}

(function () {
    let navbar = document.querySelector('#navbar');
    let hamburguer = document.querySelector('#hamburger');
    hamburguer.addEventListener('click', () => {
        navbar.classList.toggle('open');
    });
})();

(function () {

    let navbar = document.querySelector('#navbar');
    let main = document.querySelector('main');
    let navbarHeight = navbar.getBoundingClientRect().height;
    let breakpoint = main.offsetTop - navbarHeight;
    let windowPos;
    let isFixed = false;

    function updatePos() {
        windowPos = window.scrollY;
    }

    function onScroll() {

        updatePos();
    
        if (windowPos >= breakpoint && !isFixed) {
            navbar.classList.remove('open');

            navbar.classList.add('navbar-fixed');
            main.style.cssText = "margin-top: " + navbarHeight + 'px;';
            isFixed = true;
    
        } else if (windowPos < breakpoint && isFixed) {
            navbar.classList.remove('navbar-fixed');
            main.style.cssText = "margin-top: " + 0;
            isFixed = false;
        }
    }

    document.addEventListener('scroll', onScroll);

})()
