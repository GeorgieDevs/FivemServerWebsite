const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar-menu')
const navLogo = document.querySelector('#navbar-logo')



const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const teamMenu = document.querySelector('#team-page');
    const socialMenu = document.querySelector('#social-page');
    let scrollPos = window.scrollY;
    //console.log(scrollPos);

    if(window.innerWidth > 960 && scrollPos < 800){
    homeMenu.classList.add('highlight')
    aboutMenu.classList.remove('highlight')
    return
    
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight')
    homeMenu.classList.remove('highlight')
    teamMenu.classList.remove('highlight')
    return

    } else if (window.innerWidth > 960 && scrollPos < 2050) {
        teamMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        socialMenu.classList.remove('highlight')
        return

    } else if (window.innerWidth > 960 && scrollPos < 2845) {
    socialMenu.classList.add('highlight')
    teamMenu.classList.remove('highlight')
    return
    }
    
    if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight')
    }

}

window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)

// mobile menu

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
}

menuLinks.addEventListener('click', hideMobileMenu)
navLogo.addEventListener('click', hideMobileMenu)